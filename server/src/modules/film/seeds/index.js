const Film = require("../model");
const Genre = require("../../genre/model");

const initialData = require("./initialData");

const initFilms = async () => {
  const genres = await Genre.getGenres();
  const mappedInitialData = initialData.map((film) => {
    const filmGenreIds = film.genres.map((genre) =>
      genres.find((genreObj) => genreObj.title === genre)
    );
    return {
      ...film,
      genres: filmGenreIds,
    };
  });
  // parse genre ObjectIds to film
  // TODO: refactor it
  await Film.deleteMany({});
  await Film.insertMany(mappedInitialData);
};

module.exports = initFilms;
