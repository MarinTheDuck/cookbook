const Recipe = require("../models/Recipe");

// Create a new recipe
const createRecipe = async (req, res) => {
  try {
    const { title, picture } = req.body;
    const userId = req.userId;

    const recipe = new Recipe({
      title,
      picture,
      text,
      userId,
    });

    await recipe.save();

    res.status(201).json(recipe);
  } catch (error) {
    console.error("Error creating recipe:", error);
    res.status(500).json({ error: "Failed to create recipe" });
  }
};

// Get all recipes for a user
const getRecipes = async (req, res) => {
  try {
    const userId = req.userId;

    const recipes = await Recipe.find({ userId });

    res.json(recipes);
  } catch (error) {
    console.error("Error retrieving recipes:", error);
    res.status(500).json({ error: "Failed to retrieve recipes" });
  }
};

// Update a recipe
const updateRecipe = async (req, res) => {
  try {
    const { title, picture, text } = req.body;
    const recipeId = req.params.id;

    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    if (title !== null) {
      recipe.title = title;
    }

    if (picture !== null) {
      recipe.picture = picture;
    }

    if (text !== null) {
      recipe.text = text;
    }

    await recipe.save();

    res.json(recipe);
  } catch (error) {
    console.error("Error updating recipe:", error);
    res.status(500).json({ error: "Failed to update recipe" });
  }
};

// Delete a recipe
const deleteRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;

    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    await recipe.remove();

    res.json({ message: "Recipe deleted" });
  } catch (error) {
    console.error("Error deleting recipe:", error);
    res.status(500).json({ error: "Failed to delete recipe" });
  }
};

module.exports = {
  createRecipe,
  getRecipes,
  updateRecipe,
  deleteRecipe,
};
