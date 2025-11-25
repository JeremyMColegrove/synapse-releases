# Server Initialization Script

The Server Initialization Script allows you to inject custom JavaScript code directly into the main server file (`server.js`) before the application starts. This is powerful for setting up middleware, initializing third-party libraries, or configuring global error handling.

## Configuration
1.  Click the **Environment** button.
2.  Navigate to the **Server** tab.
3.  Locate the **Server Initialization Script** editor.

## Context
The code you write here is inserted at the top level of the generated server file.
*   You have access to the `app` object (Express application instance).
*   You can `require` packages (ensure they are available in your environment).

## Common Use Cases

### 1. Custom Middleware
Add custom logging, authentication, or request processing middleware.

```javascript
// Add a custom logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
```

### 2. Rate Limiting
Protect your API endpoints using `express-rate-limit`.

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);
```

### 3. Body Parser Configuration
Adjust the default body parser settings (e.g., increase payload size limit).

```javascript
// Increase JSON body limit to 50MB
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
```

### 4. CORS Configuration
Configure Cross-Origin Resource Sharing to allow requests from specific domains.

```javascript
const cors = require('cors');

app.use(cors({
  origin: 'https://myapp.com',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

### 5. Global Error Handling
Define a custom error handler.

```javascript
app.use((err, req, res, next) => {
  console.error('Global Error:', err.stack);
  res.status(500).send('Something broke!');
});
```

## Important Notes
*   **Syntax Errors**: Errors in this script will prevent the server from starting.
*   **Dependencies**: If you use external packages (like `express-rate-limit`), you must ensure they are installed in your project (`npm install express-rate-limit`).
