# Introduction to Synapse

Synapse is a visual workflow builder that allows you to create complex API endpoints and backend logic without writing boilerplate code. You can drag and drop nodes to define your logic, connect them to create a flow, and deploy them as a standalone Express.js server.

## Getting Started

### 1. Installation
Synapse is a desktop application. Ensure you have it installed and running on your machine.

### 2. Creating a Workflow
1.  Open Synapse.
3.  You will see a canvas where you can add nodes, with some nodes already pre-defined.

### 3. Adding Nodes
*   Drag and drop nodes from the left sidebar to the canvas.

### 4. Connecting Nodes
*   Click and drag from the **source handle** (bottom) of one node to the **target handle** (top) of another node.
*   This defines the execution flow. Data flows from top to bottom.

### 5. Configuring Nodes
*   Click on a node to select it.
*   Use the node's internal UI to configure its properties (e.g., SQL query, Script code, API endpoint).

### 6. Environment Variables & Secrets
*   Click on the **Environment** button in the sidebar.
*   **Globals**: Define global variables accessible in all nodes.
*   **Secrets**: Store sensitive information like API keys and database passwords. These are injected securely at runtime.
*   **Server**: Configure your database connection and AI service providers (Gemini, OpenAI).

### 7. Running Your Workflow
*   Synapse generates a standard Node.js/Express application.
*   You can preview the generated code to understand exactly what will be executed.
*   Click the **Run** or **Deploy** button (depending on your specific UI version) to start the server.

## Core Concepts

### The `req` Object
Every node has access to the initial HTTP request that triggered the workflow.
*   `req.body`: The JSON body of the request.
*   `req.query`: URL query parameters.
*   `req.headers`: HTTP headers.
*   `req.method`: HTTP method (GET, POST, etc.).
*   `req.endpoint`: The endpoint path.

**Example**:
```javascript
// Accessing a user ID from the request body
const userId = req.body.userId;

// Accessing a query parameter (e.g., ?sort=desc)
const sortOrder = req.query.sort;
```

### The `args` Object
Data is passed between nodes via the `args` object.
*   When a node executes, it returns a value.
*   This return value becomes the `args` for the next node.

**Example**:
1.  **Node A** returns `{ count: 10 }`.
2.  **Node B** receives `{ count: 10 }` as `args`.
```javascript
// In Node B
const newCount = args.count + 1;
return { count: newCount };
```

### Execution Flow
1.  **Request Node**: Receives the HTTP request.
2.  **Processing**: Execution follows the connections. Nodes execute asynchronously.
3.  **Response**: The final result of the workflow is sent back as the HTTP response.
