const { join } = require("path");
require("dotenv").config({ path: join(__dirname, "../../.env") });

const dbConfig = require("./db");

module.exports = { dbConfig };
