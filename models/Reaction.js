const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reactionSchema = new Schema(
  {
    // Schema
    reactionId: {
      type: Schema.Types.ObjectId,
      default: function () {
        return new Types.ObjectId();
      },
    },
    reactionBody: {
      type: "string",
      required: true,
      trim: true,
      minLength: 1,
      maxLength: 280,
    },
    username: {
      type: "string",
      required: true,
    },
    createdAt: {
      type: "date",
      default: Date.now,
      get: (createdAt) => dateFormat(createdAt),
    },
  },
  {
    // Options
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Reaction = model("Reaction", reactionSchema);

module.exports = Reaction;
