"use strict";

// Express
const express = require("express");
const app = express();
app.set("json spaces", 3);
app.use(express.json());

// Environmental variables
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
dotenvExpand(dotenv.config());

// CORS
const cors = require("cors");
app.use(cors());

// Body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Favicon
const serveFavicon = require("serve-favicon");
app.use(serveFavicon(__dirname + "/public/favicon.ico"));

// Logger
const morgan = require("morgan");
app.use(morgan(":method :url :response-time"));

// Cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Routes
app.use(`${process.env.APP_CONTEXT}/users`, require("./routes/user.routes"));
app.use(`${process.env.APP_CONTEXT}/boards`, require("./routes/board.routes"));

// Home endpoint
app.get("", (_, res) => {
  res.send(`${process.env.APP_NAME}!`);
});

// API endpoint
app.get(process.env.APP_CONTEXT, (_, res) => {
  res.send(`${process.env.APP_NAME} API!`);
});

// Error handler
const errorHandler = require("./config/error-handler.js");
app.use(errorHandler.handleError);

// Mongoose
const mongoose = require("./config/mongoose.js");

// Application startup
const startApplication = () => {
  mongoose.connectToDB(() => {
    app.listen(process.env.PORT, () =>
      console.log(
        `${process.env.APP_NAME} app listening on port ${process.env.PORT}!`
      )
    );
  });
};

startApplication();
