const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema, "users");
