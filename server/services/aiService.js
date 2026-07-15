const axios = require("axios");

const MODELS = [
  "openai/gpt-oss-20b:free",
  "qwen/qwen3-coder:free",
  "deepseek/deepseek-r1-0528:free",
];

// ===============================
// Helper Function
// ===============================
const callAI = async (prompt, temperature = 0.7, expectJson = false) => {
  let lastError = null;

  for (const model of MODELS) {
    try {
      console.log(`🤖 Trying model: ${model}`);

      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model,
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:5173",
            "X-Title": "BuildWise AI",
          },
        }
      );

      console.log(`✅ Success with ${model}`);

      const content = response.data.choices[0].message.content;

      return expectJson ? JSON.parse(content) : content;

    } catch (error) {

      console.log(`❌ ${model} failed`);

      if (error.response) {
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }

      lastError = error;
    }
  }

  throw lastError;
};

// ===============================
// Generate AI Project
// ===============================
const generateProject = async (skill, goal, interest) => {

  const prompt = `
You are an expert software architect and mentor.

Generate ONE unique software project.

Skill Level: ${skill}
Career Goal: ${goal}
Interests: ${interest}

Return ONLY valid JSON.

{
  "title": "",
  "description": "",
  "techStack": [
    "",
    "",
    ""
  ],
  "roadmap": [
    "",
    "",
    "",
    ""
  ],
  "recruiterFeedback": ""
}

Return JSON only.
`;

  return await callAI(prompt, 0.7, true);
};

// ===============================
// Generate GitHub README
// ===============================
const generateReadme = async (projectTitle, description) => {

  const prompt = `
Create a professional GitHub README.md.

Project Title:
${projectTitle}

Project Description:
${description}

Include:

# Project Title

## Overview

## Features

## Tech Stack

## Installation

## Folder Structure

## API Endpoints

## Future Improvements

Return Markdown only.
`;

  return await callAI(prompt, 0.5, false);
};

// ===============================
// Generate Project Blueprint
// ===============================
const generateBlueprint = async (project) => {

  const prompt = `
You are a senior software architect.

Based on this project:

Title:
${project.title}

Description:
${project.description}

Generate a complete software blueprint.

Return ONLY valid JSON.

{
  "folderStructure":[
    "client/",
    "server/",
    "README.md"
  ],
  "databaseSchema":[
    {
      "table":"Users",
      "fields":[
        "id",
        "name",
        "email"
      ]
    }
  ],
  "apiEndpoints":[
    "POST /register",
    "POST /login",
    "GET /projects"
  ],
  "architecture":[
    "React Frontend",
    "Axios",
    "Express Backend",
    "OpenRouter AI",
    "MongoDB"
  ],
  "timeline":[
    "Week 1 - UI",
    "Week 2 - Backend",
    "Week 3 - AI Integration",
    "Week 4 - Deployment"
  ],
  "gitCommits":[
    "Initialize Project",
    "Create UI",
    "Setup Backend",
    "Integrate AI",
    "Deploy Application"
  ],
  "testing":[
    "Authentication Test",
    "API Test",
    "UI Test",
    "Deployment Test"
  ]
}

Return JSON only.
`;

  return await callAI(prompt, 0.5, true);
};

module.exports = {
  generateProject,
  generateReadme,
  generateBlueprint,
};