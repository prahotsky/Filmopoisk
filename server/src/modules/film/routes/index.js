const router = require("express").Router();
const { getFilms } = require("../controllers/");

router.route("/").get(getFilms);

exports.router = router;
