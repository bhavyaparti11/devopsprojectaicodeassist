# 📐 System Design Document

## Architecture Overview
The AI Code Assist application utilizes a standard **Client-Server Architecture** to ensure separation of concerns between the user interface and the AI processing logic.

### 1. Client Tier (Frontend)
* **Technology:** HTML, CSS, JavaScript.
* **Role:** Captures user input (code snippets) and sends asynchronous HTTP POST requests to the backend. It utilizes `marked.js` to parse the markdown responses from the AI into formatted HTML for optimal readability.

### 2. Application Tier (Backend)
* **Technology:** Node.js with Express.
* **Role:** Acts as a secure middleware. It receives requests from the client, structures the prompt specifically for code review or explanation, and handles the secure authentication with the external AI API. It prevents the API key from being exposed to the client browser.

### 3. AI/Data Tier (External API)
* **Technology:** Groq Cloud API (Model: `llama-3.1-8b-instant`).
* **Role:** Processes the prompt and returns a generated text response detailing bugs, improvements, or beginner-friendly explanations.

## Data Flow
1. User pastes code and clicks an action button.
2. Frontend `fetch()` sends JSON payload `{"code": "..."}` to `/review` or `/explain`.
3. Express server receives payload, attaches the `GROQ_API_KEY`, and forwards it to Groq.
4. Groq returns the markdown response.
5. Express sends the string back to the client.
6. Frontend parses the markdown and updates the DOM.