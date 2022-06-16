const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    // Schema
  },
  {
    // Options
  }
);

const User = model("User", userSchema);

module.exports = User;
