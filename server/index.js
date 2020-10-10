const { join } = require("path");
require("dotenv").config({ path: join(__dirname, "../../.env") });
const express = require("express");
const bodyParser = require("body-parser");
const filmsRouter = require("./src/modules/film/routes").router;
const genresRouter = require("./src/modules/genre/routes").router;
const { createDbConnection } = require("./src/services");

const app = express();

app.use(function (_, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(bodyParser.json());
app.use("/films", filmsRouter);
app.use("/genres", genresRouter);

createDbConnection().then(() => {
  app.listen(process.env.APP_PORT, () => {
    console.log(
      `SUCCESSFULLY STARTED: ${process.env.APP_HOST}:${process.env.APP_PORT}`
    );
  });
});
