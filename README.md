# 🚀 AI Code Assist

An intelligent, real-time code analysis tool designed to act as a virtual senior developer. Built with a Node.js backend and a responsive, markdown-rendering frontend, this application leverages the blazing-fast Groq API (Llama 3.1) to provide instant code explanations, bug detection, and refactoring suggestions.

---

## ✨ Key Features
* **Instant Code Explanations:** Simplifies complex logic into beginner-friendly, readable summaries.
* **Automated Code Reviews:** Analyzes snippets for bugs, missing syntax, and logical errors, returning concise bulleted improvements.
* **Dynamic Markdown Parsing:** Utilizes `marked.js` to render AI responses with proper HTML formatting, including dark-mode syntax highlighting for code blocks.
* **Continuous Integration/Deployment (CI/CD):** Fully automated GitHub Actions pipeline that triggers on pushes and pull requests to the `main` branch.
* **Secure Architecture:** Backend proxy pattern prevents the exposure of sensitive API keys to the client browser.

---

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript, Marked.js
* **Backend:** Node.js, Express.js
* **AI Provider:** Groq Cloud API (`llama-3.1-8b-instant`)
* **DevOps:** Git, GitHub Actions (CI/CD)

---

## 📂 Repository Structure
```text
devopsprojectaicodeassist/
├── .github/
│   └── workflows/
│       └── cicd.yml         # Automated CI/CD pipeline configuration
├── docs/
│   ├── designdocument.md    # Architecture and system design
│   ├── projectplan.md       # Agile workflow and phase breakdowns
│   └── userguide.md         # End-user instruction manual
├── src/
│   └── main/
│       ├── ai.js            # Groq API integration and prompt engineering
│       └── server.js        # Express server and route handling
├── .env                     # Environment variables (Ignored by Git)
├── .gitignore               # Excluded files and directories
├── index.html               # Main frontend interface
├── package.json             # Node.js dependencies and scripts
└── README.md                # Project documentation