const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
module.exports = function () {
  mongoose
    .connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(console.log(`Connected to MongoDB `));
  // .catch((err) => {
  //   console.error(err.message);
  //   process.exit(1);
  // });
};
