const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;


// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const recipeRoutes = require("./routes/recipeRoutes");

// Register routes
app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);

// Serve the public folder
app.use("/", express.static("../frontend/dist"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
