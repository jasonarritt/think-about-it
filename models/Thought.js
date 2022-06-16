const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    // Schema
  },
  {
    // Options
  }
);

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
