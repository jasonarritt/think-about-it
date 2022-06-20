const router = require("express").Router();

const { User } = require("../../models/");

// GET all users from /api/users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET a single user from /api/users/:id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST a new user to /api/users
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// PUT an updated user into /api/users/:id
router.put("/:id", async (req, res) => {
  try {
    await User.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    }).then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with that ID." });
        return;
      }
      res.json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE a user from /api/users/:id
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST a new friend to /api/users/:id/friends/:friendId
router.post("/:id/friends/", async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { friends: req.body.id } },
      { new: true, runValidators: true }
    ).then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with that ID." });
        return;
      }
      res.json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE a friend from /api/users/:id/friends/:friendId
router.delete("/:id/friends/:friendId", async (req, res) => {
  try {
    await User.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { friends: { friendId: req.params.friendId } } },
      { new: true }
    ).then((dbUserData) => {
      if (!dbUserData) {
        res
          .status(404)
          .json({ message: "No User or friend found with that ID." });
        return;
      }
      res.json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
