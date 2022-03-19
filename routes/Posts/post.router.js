// Import statements
const { Router } = require("express");
const { getAll, createNew } = require("./post.controller");
const postRouter = Router();

postRouter.get("/all", getAll);
postRouter.post("/", createNew);

module.exports = postRouter;
