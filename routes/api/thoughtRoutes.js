const router = require("express").Router();

const { Thought } = require("../../models");

// GET all thoughts from /api/thoughts
router.get("/", async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    res.json(thoughts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET a single thought from /api/thoughts/:id
router.get("/api/thoughts/:id", async (req, res) => {});

// POST a new thought to /api/thoughts
router.post("/", async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    res.json(thought);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// PUT an updated thought into /api/thoughts/:id
router.put("/:id", async (req, res) => {});

// DELETE a new thought from /api/thoughts/:id
router.delete("/:id", async (req, res) => {});

module.exports = router;
