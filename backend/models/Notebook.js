const mongoose = require("mongoose");

const notebookSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  picture: String,
});

module.exports = mongoose.model("Notebook", notebookSchema, "notebooks");
