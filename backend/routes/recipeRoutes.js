const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const authMiddleware = require("../middleware/authMiddleware");

// Protected route - example of accessing user's recipes
router.get(
  "/",
  authMiddleware.authenticateToken,
  recipeController.getRecipes,
  recipeController.createRecipe,
  recipeController.updateRecipe,
  recipeController.deleteRecipe
);

module.exports = router;
