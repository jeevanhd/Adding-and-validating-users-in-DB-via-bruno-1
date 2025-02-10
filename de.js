const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/userdb";

const connectDb = async () => {
  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log(err);
    });
};


module.exports = connectDb;