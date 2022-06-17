const router = require("express").Router();

const { Thought } = require("../../models");

// GET all thoughts from /api/thoughts
router.get("/", async (req, res) => {});

// GET a single thought from /api/thoughts/:id
router.get("/api/thoughts/:id", async (req, res) => {});

// POST a new thought to /api/thoughts
router.post("/", async (req, res) => {});

// PUT an updated thought into /api/thoughts/:id
router.put("/:id", async (req, res) => {});

// DELETE a new thought from /api/thoughts/:id
router.delete("/:id", async (req, res) => {});

module.exports = router;
