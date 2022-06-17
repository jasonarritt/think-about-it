const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    // Schema
    thoughtText: {
      type: "string",
      required: true,
      trim: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: "date",
      default: Date.now,
      get: (createdAt) => dateFormat(createdAt),
    },
    username: {
      type: "string",
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    // Options
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Virtuals
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
