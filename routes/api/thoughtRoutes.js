const router = require("express").Router();

const db = require("../models");

// GET all thoughts from /api/thoughts
router.get("/", (req, res) => {});

// GET a single thought from /api/thoughts/:id
router.get("/api/thoughts/:id", (req, res) => {});

// POST a new thought to /api/thoughts
router.post("/", (req, res) => {});

// PUT an updated thought into /api/thoughts/:id
router.put("/:id", (req, res) => {});

// DELETE a new thought from /api/thoughts/:id
router.delete("/:id", (req, res) => {});

module.exports = router;
