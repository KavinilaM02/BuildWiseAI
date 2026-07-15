const express = require("express");
const router = express.Router();

const {
  generateProjectController,
  generateReadmeController,
  generateBlueprintController,
} = require("../controllers/aiController");

router.post("/generate", generateProjectController);

router.post("/readme", generateReadmeController);

router.post("/blueprint", generateBlueprintController);

module.exports = router;