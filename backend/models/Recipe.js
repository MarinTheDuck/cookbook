const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  text: String,
  picture: String,
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Recipe", recipeSchema, "recipes");
