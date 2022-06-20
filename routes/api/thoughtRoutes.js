const router = require("express").Router();

const { Thought, User } = require("../../models");

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
router.get("/:id", async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    res.json(thought);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST a new thought to /api/thoughts
router.post("/", async (req, res) => {
  try {
    const { thought: thoughtObj, userId } = req.body;

    const thoughtData = await Thought.create(thoughtObj);

    const updateData = await User.findByIdAndUpdate(
      {
        _id: userId,
      },
      {
        $push: {
          thoughts: thoughtData._id,
        },
      },
      { new: true }
    );

    res.json(updateData);
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
