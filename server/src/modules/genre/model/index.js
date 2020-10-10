const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const genreSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
});

genreSchema.statics.getGenres = function (filterParams) {
  return this.find(filterParams);
};

module.exports = mongoose.model("Genre", genreSchema);
