# Global Variables

Global Variables are constants or configuration values that are accessible across your entire workflow. They are useful for storing environment-specific settings, base URLs, or default values.

## Managing Global Variables
1.  Click the **Environment** button in the sidebar.
2.  Navigate to the **Variables** tab.

### Adding a Variable
1.  Click **Add Variable**.
2.  **Name**: Enter a unique name (e.g., `BASE_URL`, `MAX_RETRIES`).
3.  **Type**: Select the data type:
    *   `String`: Text values.
    *   `Number`: Numeric values.
    *   `Boolean`: True/False.
    *   `JSON`: Complex objects or arrays.
4.  **Value**: Enter the value.

## Usage
Global variables are automatically injected into the scope of **Script Nodes** and **If Nodes**. You can use them directly by their name.

### Example: String
**Variable**: `API_BASE_URL` = `"https://api.example.com"`

**Script Node**:
```javascript
const url = `${API_BASE_URL}/users`;
// url is "https://api.example.com/users"
```

### Example: Boolean
**Variable**: `FEATURE_FLAG_NEW_UI` = `true`

**If Node**:
```javascript
// Check if feature is enabled
FEATURE_FLAG_NEW_UI === true
```

### Example: Number
**Variable**: `MAX_ITEMS` = `50`

**Script Node**:
```javascript
if (args.items.length > MAX_ITEMS) {
    throw new Error('Too many items');
}
```

### JSON Variables
**Variable**: `CONFIG` (Type: JSON)
**Value**:
```json
{
  "timeout": 5000,
  "retries": 3
}
```

**Script Node**:
```javascript
const timeout = CONFIG.timeout; // 5000
```

## Best Practices
*   Use **UPPERCASE** for variable names to distinguish them from local variables.
*   Use Global Variables for configuration that might change between environments (e.g., Dev vs. Prod).
*   Do **not** store sensitive data (passwords, keys) here. Use **Secrets** instead.
