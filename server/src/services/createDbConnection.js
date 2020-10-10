const mongoose = require("mongoose");
const { dbConfig } = require("../config");
const { host, port, dbName } = dbConfig;

createDbConnection = async () => {
  await mongoose.connect(
    `mongodb://${host}:${port}/${dbName}`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
};

module.exports = createDbConnection;
