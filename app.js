// Imports
const cors = require("cors");
const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const CONFIG = require("./config")
const helmet = require("helmet");
const logger = require("./helpers/logger");
const postRouter = require("./routes/Posts/post.router");
const chatroomRouter = require("./routes/Chatroom/Chatroom.route");
const AuthRouter = require("./routes/Authentication/auth.route");
const passport = require("passport");
const cookieMiddleware = require("./helpers/cookie-middleware");
const app = express();

// Configurations
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieMiddleware);
app.use(helmet());
app.use(logger);
app.use(express.static(path.resolve(__dirname, "public")));
app.use(passport.initialize());
app.use(passport.session());
app.use("/posts", postRouter);
app.use("/auth", AuthRouter);
app.use("/chat", chatroomRouter);

module.exports = app;
