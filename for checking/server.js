const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

const genAI = new GoogleGenerativeAI("AIzaSyAAxQK5xxFilFJK2aGzZ80V5l3qR6JtX_I");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function generateAIResponse() {
  try {
    const prompt = "you are bad";
    const result = await model.generateContent(prompt)
    console.log(result.response.text());
  } catch (error) {
    console.error("Error generating AI response:", error);
  }
}

app.listen(3000, () => {
  console.log("Server running on port 3000");
  generateAIResponse();
});

module.exports = app;