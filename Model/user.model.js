const mongoose = require("mongoose");

// Create a Mongoose model for the user collection using this schema.
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("UserDeatail", userSchema);
