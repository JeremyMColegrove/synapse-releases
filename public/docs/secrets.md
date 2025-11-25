# Secrets Management

Secrets allow you to securely store sensitive information such as API keys, database passwords, and access tokens.

## What is a Secret?
A Secret is a key-value pair where:
*   **Key**: A unique identifier (e.g., `OPENAI_API_KEY`).
*   **Value**: The sensitive data.

<iframe width="560" height="315" src="https://www.youtube.com/embed/zr-eZ_pLTNI?si=0eZHwHyBBv3T41rK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Managing Secrets
You can manage secrets in the **Environment** modal.

1.  Click the **Environment** button in the sidebar.
2.  Navigate to the **Secrets** tab.

### Adding a Secret
1.  Click **Add Secret**.
2.  Enter a **Key** (e.g., `STRIPE_KEY`).
3.  Enter the **Value**.
4.  The secret is saved securely.

### Using Secrets
Secrets can be accessed in two ways:

1.  **In Script Nodes**:
    Secrets are injected as environment variables. You can access them using `process.env`.
    ```javascript
    const apiKey = process.env.STRIPE_KEY;
    
    // Example: Using the key in a fetch request
    const response = await fetch('https://api.stripe.com/v1/charges', {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    });
    ```

2.  **In Configuration**:
    Many nodes and settings allow you to select a secret directly.
    *   **Database Password**: Select a secret from the dropdown in Server settings.
    *   **AI Service API Keys**: Select a secret for Gemini or OpenAI configuration.

## Security & Exporting
*   **Storage**: Secrets are stored locally in your workflow file.
*   **Exporting**: When you share a workflow file, **secrets are included** but should be handled with care.
*   **Best Practice**: If sharing a workflow publicly, ensure you remove actual secret values or replace them with placeholders.
