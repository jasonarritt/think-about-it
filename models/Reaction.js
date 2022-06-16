const { Schema, model } = require("mongoose");

const reactionSchema = new Schema(
  {
    // Schema
  },
  {
    // Options
  }
);

const Reaction = model("Reaction", reactionSchema);

module.exports = Reaction;
