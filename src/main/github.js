const fs = require("fs");
const axios = require("axios");
require("dotenv").config();

async function run() {
    const code = fs.readFileSync("sample.js", "utf-8");

    const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
            model: "gpt-4.1-mini",
            messages: [
                {
                    role: "user",
                    content: `Review this code:\n\n${code}`
                }
            ]
        },
        {
            headers: {
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            }
        }
    );

    console.log("AI Review Result:\n");
    console.log(res.data.choices[0].message.content);
}

run();