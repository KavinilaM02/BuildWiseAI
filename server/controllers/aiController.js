const aiService = require("../services/aiService");

console.log("aiService:", aiService);

const {
  generateProject,
  generateReadme,
  generateBlueprint,
} = aiService;

console.log("generateProject type:", typeof generateProject);
console.log("generateReadme type:", typeof generateReadme);
console.log("generateBlueprint type:", typeof generateBlueprint);

// ===============================
// Generate AI Project
// ===============================
const generateProjectController = async (req, res) => {
  try {
    const { skill, goal, interest } = req.body;

    if (!skill || !goal || !interest) {
      return res.status(400).json({
        success: false,
        message: "Skill, goal and interest are required",
      });
    }

    const project = await generateProject(
      skill,
      goal,
      interest
    );

    return res.status(200).json({
      success: true,
      data: project,
    });

  } catch (error) {

    console.error("AI Error:", error.message);

    if (error.response) {
      console.error(error.response.data);

      return res.status(error.response.status).json({
        success: false,
        message: error.response.data,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ===============================
// Generate GitHub README
// ===============================
const generateReadmeController = async (req, res) => {
  try {

    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });
    }

    const readme = await generateReadme(
      title,
      description
    );

    return res.status(200).json({
      success: true,
      readme,
    });

  } catch (error) {

    console.error("README Error:", error.message);

    if (error.response) {
      console.error(error.response.data);

      return res.status(error.response.status).json({
        success: false,
        message: error.response.data,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ===============================
// Generate Project Blueprint
// ===============================
const generateBlueprintController = async (req, res) => {
  try {

    const project = req.body;

    if (!project.title || !project.description) {
      return res.status(400).json({
        success: false,
        message: "Project title and description are required",
      });
    }

    const blueprint = await generateBlueprint(project);

    return res.status(200).json({
      success: true,
      blueprint,
    });

  } catch (error) {

    console.error("Blueprint Error:", error.message);

    if (error.response) {
      console.error(error.response.data);

      return res.status(error.response.status).json({
        success: false,
        message: error.response.data,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  generateProjectController,
  generateReadmeController,
  generateBlueprintController,
};