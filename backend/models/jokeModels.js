const mongoose = require("mongoose");

const jokeSchema = mongoose.Schema({
  keyword: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const jokeModel = mongoose.model("Joke", jokeSchema);

module.exports = { jokeModel };
