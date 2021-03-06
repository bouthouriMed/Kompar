const mongoose = require("mongoose");
const config = require("config");

const mongoURI = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Mongo successfully connected");
  } catch (err) {
    console.log(err.message);
    // Exit with failure
    process.exit(1);
  }
};

module.exports = connectDB;
