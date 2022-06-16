const router = require("express").Router();

const db = require("../models");

// GET all users from /api/users
router.get("/", (req, res) => {});

// GET a single user from /api/users/:id
router.get("/:id", (req, res) => {});

// POST a new user to /api/users
router.post("/", (req, res) => {});

// PUT an updated user into /api/users/:id
router.put("/:id", (req, res) => {});

// DELETE a user from /api/users/:id
router.delete("/:id", (req, res) => {});

module.exports = router;
