const fs = require("fs");
const axios = require("axios");
require("dotenv").config();

async function run() {
    // 1. Read the local file you want to review
    // (Make sure you actually have a file named 'sample.js' in this folder!)
    const code = fs.readFileSync("sample.js", "utf-8");

    try {
        // 2. Send it to Groq instead of OpenAI
        const res = await axios.post(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                model: "llama-3.1-8b-instant",
                messages: [
                    {
                        role: "user",
                        content: `Review this code for bugs and bad practices:\n\n${code}`
                    }
                ]
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        // 3. Print the result to the terminal
        console.log("🚀 Automated AI Review Result:\n");
        console.log(res.data.choices[0].message.content);
        
    } catch (error) {
        console.error("Pipeline Error:", error.response ? error.response.data : error.message);
    }
}

run();