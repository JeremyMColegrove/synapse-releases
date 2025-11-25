# Security: Sanitization & Injection

Security is a critical aspect of backend application development. Synapse provides built-in mechanisms to help you write secure workflows.

## Input Sanitization

### SQL Injection Protection
The **SQL Node** is designed to prevent SQL injection attacks.

*   **Mechanism**: Synapse uses the `sqlstring` library to escape values.
*   **Usage**: When you use the `${variable}` syntax within a SQL Node, the system does **not** simply replace the text. Instead, it wraps the value in `SqlString.escape()`.
    *   If `args.name` is `O'Reilly`, the query becomes `... WHERE name = 'O\'Reilly'`.
    *   If `args.name` is `' OR '1'='1`, it is safely escaped to prevent the attack.

**Important**: Always use the `${}` syntax for dynamic values. Do not attempt to build raw SQL strings in Script nodes and execute them, as this bypasses the built-in protection.

## Argument Injection

### Script Nodes
In **Script Nodes**, you have full access to JavaScript.
*   **Context**: Code runs in the server's Node.js environment.
*   **Variables**:
    *   `req`: The raw request object. Be careful when using `req.body` or `req.query` directly in sensitive operations without validation.
    *   `args`: Data from previous nodes.
*   **Best Practice**: Validate inputs at the beginning of your workflow (e.g., using a Script node to check types and values) before passing them to sensitive nodes.

**Example: Input Validation**
```javascript
const { email, age } = req.body;

// Validate email format
if (!email || !email.includes('@')) {
    throw new Error('Invalid email address');
}

// Validate age is a number
if (typeof age !== 'number' || age < 18) {
    throw new Error('User must be 18 or older');
}

return { email, age };
```

### AI Nodes (Prompt Injection)
When using **Gemini** or **OpenAI** nodes, you often inject user input into prompts.
*   **Risk**: Users might attempt "Prompt Injection" to manipulate the AI's behavior.
*   **Mitigation**:
    *   Be explicit in your system instructions (if available) or prompt structure.
    *   Delimit user input clearly. For example:
        ```text
        Translate the following text to Spanish.
        Text: """
        ${req.body.text}
        """
        ```
    *   This helps the model distinguish between your instructions and the user's input.

## Secrets Management

For detailed information on managing API keys and passwords, please refer to the [Secrets Management](./secrets.md) guide.

