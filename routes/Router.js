const { Router } = require("express");
const postRouter = require("./Posts/post.router");
const routes = Router();

routes.get("/", postRouter);

module.exports = routes;
