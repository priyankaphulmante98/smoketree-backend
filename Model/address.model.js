const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // user_id: mongoose.Types.ObjectId,
  city: String,
  state: String,
  country: String,
});

module.exports = mongoose.model("Address", addressSchema);
