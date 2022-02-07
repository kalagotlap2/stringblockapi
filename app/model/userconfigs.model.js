const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  theme: String,
  user: String
});

module.exports = mongoose.model("UserConfigs", AppSchema);
