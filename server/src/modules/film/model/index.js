const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const filmSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  poster: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    required: true,
  },
  genres: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

filmSchema.statics.getFilms = function (filterParams) {
  return this.find(filterParams);
};

module.exports = mongoose.model("Film", filmSchema);
