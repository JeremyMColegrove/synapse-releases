# Synapse v1.0.0 - Initial Release

**Release Date:** November 22, 2025

We're thrilled to announce the first official release of **Synapse** - a powerful visual workflow editor that lets you build API workflows and automation through an intuitive node-based interface!

---

## 🌟 What is Synapse?

Synapse is a desktop application that enables developers to visually design, build, and deploy REST API workflows without writing boilerplate code. Design your API endpoints visually, write custom business logic in JavaScript, and export your workflows as Express.js servers — all from one beautiful interface.

<img width="2764" height="1964" alt="CleanShot 2025-11-22 at 21 42 07@2x" src="https://github.com/user-attachments/assets/a1a594f5-5250-4c6f-8a3a-b1299f9109ff" />

---

## ✨ Core Features

### 🎨 **Visual Workflow Editor**
- Intuitive drag-and-drop node-based interface powered by React Flow
- Create complex API workflows by connecting nodes visually

### 🔌 **REST API Endpoint Nodes**
- Built-in support for all HTTP methods: `GET`, `POST`, `PUT`, `DELETE`
- Run your server directly in the application so you can rapidly test using Postman or curl

### 🧩 **Powerful Node Types**
- **Request Nodes** - Define API endpoints for GET, POST, PUT, DELETE operations
- **Script Nodes** - Write custom JavaScript logic with full access to workflow context
- **If Nodes** - Conditional branching based on your business logic
- **Gemini Nodes** - AI-powered nodes for intelligent processing

### 🌍 **Global Variables & Environment Management**
- Define global variables accessible across all nodes in your workflow
- Define functions across your workflow to be used and shared in your nodes

### 📦 **Package Management**
- Install npm packages directly within the workflow editor
- Use globaly installed packages such as zod, lodash, axios, and many more.

### 🚀 **Code Export & Deployment**
- **One-click export** to Express.js server code
- Generates complete project structure with proper file organization
- Automatic `package.json` generation with all dependencies
- ZIP export with custom save location selection

### 🎯 **Workflow Execution**
- Run workflows as live Express servers
- Real-time execution logs in integrated console
- Test endpoints with custom input data via the Start Node editor
- View compiled server code before deployment
- Metadata tracking with `lastModified` timestamps

### 🖥️ **Cross-Platform Desktop App**
- Built with Electron for native desktop experience
- Custom application icon and branding
- Available for **macOS** (Apple Silicon & Intel), **Windows**, and **Linux**
- Native file dialogs and system integration

<img width="2764" height="1964" alt="CleanShot 2025-11-22 at 21 49 41@2x" src="https://github.com/user-attachments/assets/f0cfaf3e-4c17-414c-b781-9ce588c953ce" />
<img width="2764" height="1964" alt="CleanShot 2025-11-22 at 21 50 31@2x" src="https://github.com/user-attachments/assets/baa7577c-3129-4da5-81d5-edad461e31da" />
<img width="2764" height="1964" alt="CleanShot 2025-11-22 at 22 03 51@2x" src="https://github.com/user-attachments/assets/2c4912fb-8e45-4c63-923a-edd69358a54f" />

---

## 🎨 User Experience Highlights

### Modern Interface Design
- Clean, professional UI built with React and Tailwind CSS
- Resizable and collapsible sidebar (Ctrl+B to toggle)
- Smooth animations and transitions
- Lucide React icons throughout
- Light theme optimized for extended use

---

## 📋 Getting Started

### Quick Start

1. **Create a Workflow** - Start with a blank canvas
2. **Add Request Nodes** - Drag POST, GET, PUT, or DELETE nodes from the sidebar
3. **Configure Endpoints** - Click the pencil icon to define your endpoint path
4. **Add Business Logic** - Connect Script nodes to add custom JavaScript logic
5. **Install Packages** - Add npm packages as needed for your logic
6. **Test Locally** - Run your workflow as an Express server
7. **Export & Deploy** - Export to a Node.js project

## 🔄 Version History

### v1.0.0 (Initial Release)
- ✅ Visual workflow editor with node-based interface
- ✅ REST API endpoint nodes (GET, POST, PUT, DELETE)
- ✅ Monaco code editor with IntelliSense
- ✅ Global variables and environment management
- ✅ npm package management integration
- ✅ Express server code generation and export
- ✅ Cross-platform desktop application
- ✅ Resizable, collapsible UI components
- ✅ Intelligent autocomplete from installed packages
- ✅ Fullscreen code editing mode
- ✅ One-click ZIP export with custom save location
- ✅ Workflow metadata tracking
- ✅ Custom node handles and visual improvements

---

## 📞 Feedback & Support

We'd love to hear from you! Whether you've found a bug, have a feature request, or just want to share what you've built:

- **GitHub Issues**: [Report bugs or request features](https://github.com/JeremyMColegrove/synapse-releases/issues)

---

## 🙏 Acknowledgments

Built with ❤️ using amazing open-source technologies. Special thanks to the teams behind React Flow, Monaco Editor, Electron, and all the other incredible tools that make Synapse possible.
