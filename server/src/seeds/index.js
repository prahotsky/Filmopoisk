const mongoose = require("mongoose");
const { createDbConnection } = require("../services");
const initGenres = require("../modules/genre/seeds");
const initFilms = require("../modules/film/seeds");

async function initData() {
  await createDbConnection();
  await initGenres();
  await initFilms();
  mongoose.disconnect();
}

initData();
