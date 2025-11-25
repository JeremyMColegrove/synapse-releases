# Database Connectivity

Synapse supports direct integration with relational databases, allowing you to query data directly within your workflows.

## Supported Databases
*   **PostgreSQL** (`pg`)
*   **MySQL** (`mysql2`)

## Configuration
To connect to a database, you must configure the connection settings in the Environment modal.

1.  Click the **Environment** button in the sidebar.
2.  Navigate to the **Server** tab.
3.  Scroll to the **Database** section.
4.  Toggle **Enable Database**.
5.  Select your **Type** (Postgres or MySQL).
6.  Enter your connection details:
    *   **Host**: Database server address (e.g., `localhost` or an IP).
    *   **Port**: Default is 5432 for Postgres, 3306 for MySQL.
    *   **Username**: Database user.
    *   **Password**: Database password.
        *   *Security Tip*: It is highly recommended to store your password as a **Secret** and reference it here (e.g., select from the dropdown or use the secret key).
    *   **Database**: The name of the database to connect to.
    *   **SSL**: Enable if your database requires a secure connection (common for cloud databases like AWS RDS or Supabase).

### Example Configuration
| Setting | Value |
| :--- | :--- |
| **Type** | `PostgreSQL` |
| **Host** | `db.example.com` |
| **Port** | `5432` |
| **Username** | `app_user` |
| **Database** | `production_db` |

## Using the SQL Node
Once configured, you can use the **SQL Node** to execute queries.

### Basic Queries
Write standard SQL in the editor:
```sql
SELECT * FROM users LIMIT 10;
```

### Dynamic Queries (Variable Injection)
You can inject data from previous nodes (`args`) or the request (`req`) into your queries.

**Syntax**: `${expression}`

**Example**:
Assuming the previous node returned an object with a `userId` property:
```sql
SELECT * FROM orders WHERE user_id = ${args.userId};
```

### Data Modification (INSERT/UPDATE)
You can also modify data using dynamic values.

**Example**:
```sql
INSERT INTO logs (level, message, created_at)
VALUES ('INFO', ${args.logMessage}, NOW());
```

### Security & Sanitization
Synapse automatically handles input sanitization for injected variables. When you use the `${}` syntax in a SQL node, the value is **escaped** using the `sqlstring` library before being inserted into the query.

*   **Safe**: `SELECT * FROM users WHERE name = ${args.name}` (Prevents SQL injection)
*   **Unsafe**: Manually concatenating strings in a Script node and passing the full query string to a SQL node (Synapse does not support this pattern directly to encourage safety).

## Connection Pooling
The generated server code automatically sets up a connection pool for efficient database access. You do not need to manually open or close connections.
