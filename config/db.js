// const mongoose = require("mongoose");

// mongoose
//   .connect(
//     "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.iuzir.mongodb.net/mern-project",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     }
//   )
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.log("Failed to connect to MongoDB", err));

//   const { MongoClient } = require("mongodb");
//   const Db = process.env.ATLAS_URI;
//   const client = new MongoClient(Db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

// dotenv config
require("dotenv").config();

const REACT_APP_MONGODB_URI = process.env.REACT_APP_MONGODB_URI;

// console.log(REACT_APP_MONGODB_URI);
// const REACT_APP_MONGODB_URI = require("../utils/consts");

// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose

const mongoose = require("mongoose");

mongoose
  .connect(REACT_APP_MONGODB_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
