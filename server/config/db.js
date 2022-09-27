const mongoose = require("mongoose");
const colors = require("colors");

const connect = () => {
  mongoose
    .connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(colors.blue.bold("MongoDB Connected...")))
    .catch((err) => console.log(err));
};

module.exports = connect;
