// Imports
const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const logger = require("./helpers/logger");
const Router = require("./routes/Router");
const app = express();

app.use(helmet());
app.use(logger);
app.use(express.static(path.resolve(__dirname, "public")));
app.use(Router);

module.exports = app;