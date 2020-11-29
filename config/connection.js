const mongoose = require("mongoose");
require("dotenv").config();
// const keys = require("./keys");

module.exports = {
  connection: () => {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected`);
  },
};

// keys.mongoURI
