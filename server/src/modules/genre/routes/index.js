const router = require("express").Router();
const { getGenres } = require("../controllers/");

router.route("/").get(getGenres);

exports.router = router;
