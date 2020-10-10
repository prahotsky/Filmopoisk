const Film = require("../model");
var mongoose = require("mongoose");

const getFilms = async (req, res) => {
  try {
    const { title, featured, genre } = req.query;
    const filterParams = {};

    if (title) {
      filterParams.title = { $regex: title, $options: "i" };
    }

    if (featured) {
      filterParams.featured = featured;
    }

    if (genre) {
      filterParams.genres = mongoose.Types.ObjectId(genre);
    }

    const films = await Film.getFilms(filterParams);
    res.status(200).send(films);
  } catch (err) {
    res.status(500).send();
    console.log(err);
  }
};

module.exports = getFilms;
