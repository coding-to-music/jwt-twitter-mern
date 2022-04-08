const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");
// require('dotenv').config({path: './config/.env'});
// dotenv config
require("dotenv").config();

const REACT_APP_MONGODB_URI = process.env.MONGODB_URI;

// console.log("REACT_APP_MONGODB_URI", REACT_APP_MONGODB_URI);

require("./config/db");

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 5005;

const { checkUser, requireAuth } = require("./middleware/auth.middleware");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "../client/build/static/")));

// Answer API requests.
app.get("/api", function (req, res) {
  res.set("Content-Type", "application/json");
  res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
// app.get("*", function (request, response) {
//   response.sendFile(
//     path.resolve(__dirname, "../client/build/static/js/", "main.*.js")
//   );
// });

// routes
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

// server
app.listen(PORT, () => {
  // console.log(`Listening on port ${PORT}`);
  console.log(`💥 Application is listening on port http://localhost:${PORT}`);
});
