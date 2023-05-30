const express = require("express");
const router = express.Router();
const notebookController = require("../controllers/notebookController");
const authMiddleware = require("../middleware/authMiddleware");

// Protected route - example of accessing user's notebooks
router.get(
  "/",
  authMiddleware.authenticateToken,
  notebookController.getNotebooks,
  notebookController.createNotebook,
  notebookController.updateNotebook,
  notebookController.deleteNotebook
);

module.exports = router;
