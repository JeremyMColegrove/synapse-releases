# Node Reference

This document details the available nodes in Synapse and how to use them.

## Request Node
**Purpose**: Defines the entry point for an API endpoint.
*   **Configuration**:
    *   **Method**: HTTP method (GET, POST, PUT, DELETE, PATCH).
    *   **Endpoint**: The URL path (e.g., `/users`, `/submit`).
*   **Output**: Passes the initial request context (`req`) to the next node.
*   **Example**:
    *   Method: `POST`
    *   Endpoint: `/api/v1/users`

## Script Node
**Purpose**: Execute custom JavaScript code.
*   **Inputs**:
    *   `req`: The initial HTTP request object.
    *   `args`: The result from the previous node(s).
*   **Usage**:
    *   Write standard JavaScript.
    *   You can use `await` for asynchronous operations.
    *   **Must return a value** to pass data to the next node.
*   **Example**:
    ```javascript
    // Transform input data from previous node
    const user = args;
    
    // Add a timestamp
    return {
        ...user,
        processedAt: new Date().toISOString(),
        isActive: true
    };
    ```

## SQL Node
**Purpose**: Execute SQL queries against a configured database.
*   **Configuration**:
    *   **Query**: Write your SQL query here.
*   **Variable Injection**:
    *   Use `${variableName}` to inject variables safely.
    *   Synapse automatically sanitizes these inputs to prevent SQL injection.
*   **Output**: Returns the query results (rows).
*   **Example**:
    ```sql
    -- Select users based on input ID
    SELECT * FROM users 
    WHERE id = ${args.userId} 
    AND status = 'active';
    ```

## If Node
**Purpose**: Conditional logic to branch the workflow.
*   **Configuration**:
    *   **Condition**: A JavaScript expression that evaluates to `true` or `false`.
    *   Has access to `req` and `args`.
*   **Outputs**:
    *   **True Path**: Executed if the condition is truthy.
    *   **False Path**: Executed if the condition is falsy.
*   **Example**:
    ```javascript
    // Check if the user is an admin
    // Returns true or false
    return args.role === 'admin' && args.level > 5;
    ```

## Read File Node
**Purpose**: Read a file from the server's filesystem.
*   **Configuration**:
    *   **Path**: The file path to read.
    *   **Type**:
        *   `Text`: Reads the entire file as a string.
        *   `Stream`: Reads the file as a stream (useful for large files or piping to response).
*   **Output**: The file content or stream.
*   **Example**:
    *   Path: `/var/www/data/config.json`
    *   Type: `Text`

## Gemini Node
**Purpose**: Generate text or data using Google's Gemini AI.
*   **Configuration**:
    *   **Prompt**: The text prompt to send to the AI.
    *   Can use `${}` for variable injection.
*   **Prerequisites**: Requires Gemini API key configured in **Environment > Server > AI Services**.
*   **Output**: The AI's text response.
*   **Example**:
    ```text
    Summarize the following user bio:
    ${args.userBio}
    ```

## OpenAI Node
**Purpose**: Generate text or data using OpenAI's models (e.g., GPT-4).
*   **Configuration**:
    *   **Prompt**: The text prompt.
    *   Can use `${}` for variable injection.
*   **Prerequisites**: Requires OpenAI API key configured in **Environment > Server > AI Services**.
*   **Output**: The AI's text response.
*   **Example**:
    ```text
    Generate a welcome email for user: ${args.name}
    ```
