# Global Functions

Global Functions are reusable JavaScript functions that can be called from any **Script Node** or **If Node** in your workflow. They help you avoid code duplication and keep your logic organized.

## Creating a Global Function
1.  Click the **Environment** button in the sidebar.
2.  Navigate to the **Functions** tab.
3.  Click **Add Function**.
4.  **Name**: Give your function a unique name (e.g., `formatDate`, `calculateTax`).
5.  **Code**: Write the function body.

## Writing Function Code
The code you write is the **body** of the function.
*   The function definition `function name(...args) { ... }` is handled automatically.
*   You have access to arguments via the `args` array or by defining named arguments in the UI (if supported).
*   **Standard Usage**:
    ```javascript
    // Function Name: calculateTotal
    // Inputs: price, quantity (passed as arguments)
    
    const [price, quantity] = args;
    return price * quantity;
    ```

## Using Global Functions
Once defined, you can call these functions directly in your nodes.

### In Script Nodes
```javascript
// Using the calculateTotal function defined above
const total = calculateTotal(100, 5);
return { total };
```

### In If Nodes
```javascript
// Using a helper function to check status
checkStatus(args.status) === true
```

## Example: Date Formatter
**Function Name**: `formatDate`
**Code**:
```javascript
const [dateStr] = args;
const date = new Date(dateStr);
return date.toLocaleDateString('en-US', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
});
```

**Usage in Script Node**:
```javascript
const formatted = formatDate('2023-12-25');
// Returns "December 25, 2023"
```

## Example: Email Validator
**Function Name**: `isValidEmail`
**Code**:
```javascript
const [email] = args;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
```

**Usage in If Node**:
```javascript
isValidEmail(args.userEmail)
```
