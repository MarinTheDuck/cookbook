const Notebook = require("../models/Notebook");

// Create a new notebook
const createNotebook = async (req, res) => {
  try {
    const { title, picture } = req.body;
    const userId = req.userId;

    const notebook = new Notebook({
      title,
      picture,
      userId,
    });

    await notebook.save();

    res.status(201).json(notebook);
  } catch (error) {
    console.error("Error creating notebook:", error);
    res.status(500).json({ error: "Failed to create notebook" });
  }
};

// Get all notebooks for a user
const getNotebooks = async (req, res) => {
  try {
    const userId = req.userId;

    const notebooks = await Notebook.find({ userId });

    res.json(notebooks);
  } catch (error) {
    console.error("Error retrieving notebooks:", error);
    res.status(500).json({ error: "Failed to retrieve notebooks" });
  }
};

// Update a notebook
const updateNotebook = async (req, res) => {
  try {
    const { title, picture } = req.body;
    const notebookId = req.params.id;

    const notebook = await Notebook.findById(notebookId);

    if (!notebook) {
      return res.status(404).json({ error: "Notebook not found" });
    }

    if (title !== null) {
      notebook.title = title;
    }

    if (picture !== null) {
      notebook.picture = picture;
    }

    await notebook.save();

    res.json(notebook);
  } catch (error) {
    console.error("Error updating notebook:", error);
    res.status(500).json({ error: "Failed to update notebook" });
  }
};

// Delete a notebook
const deleteNotebook = async (req, res) => {
  try {
    const notebookId = req.params.id;

    const notebook = await Notebook.findById(notebookId);

    if (!notebook) {
      return res.status(404).json({ error: "Notebook not found" });
    }

    await notebook.remove();

    res.json({ message: "Notebook deleted" });
  } catch (error) {
    console.error("Error deleting notebook:", error);
    res.status(500).json({ error: "Failed to delete notebook" });
  }
};

module.exports = {
  createNotebook,
  getNotebooks,
  updateNotebook,
  deleteNotebook,
};
