const mongoose = require("mongoose");
const { constants } = require("../constants");

exports.connectDb = () => {
  return mongoose.connect(
    `mongodb+srv://ashutoshbksgold:ashutoshbksgold@cluster0.qejztmo.mongodb.net/blog-api`,
    {
      useNewUrlParser: true,
    }
  );
};
