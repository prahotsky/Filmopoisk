const Genre = require("../model");

const initialData = require("./initialData");

const initGenres = async () => {
  await Genre.insertMany(initialData);
};

module.exports = initGenres;
