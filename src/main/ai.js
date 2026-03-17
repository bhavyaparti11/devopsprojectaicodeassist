require("dotenv").config();
const axios = require("axios");

const API_URL = "https://api.openai.com/v1/chat/completions";

async function askAI(prompt) {
    const res = await axios.post(
        API_URL,
        {
            model: "gpt-4.1-mini",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ]
        },
        {
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            }
        }
    );

    return res.data.choices[0].message.content;
}

async function reviewCode(code) {
    return await askAI(`
You are a senior software engineer.

Review this code and provide:
- Bugs
- Improvements
- Code quality issues

Code:
${code}
`);
}

async function explainCode(code) {
    return await askAI(`
Explain this code in simple terms for a beginner:

${code}
`);
}

module.exports = { reviewCode, explainCode };