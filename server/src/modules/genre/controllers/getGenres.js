const Genre = require("../model");

const getGenres = async (_, res) => {
  try {
    const filterParams = {};
    const genres = await Genre.getGenres(filterParams);
    res.status(200).send(genres);
  } catch (err) {
    res.status(500).send();
    console.log(err);
  }
};

module.exports = getGenres;
