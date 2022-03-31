// Import statements
const { Router } = require("express");
const { getAll, createNew, getPost } = require("./post.controller");
const useAdmin = require("../../helpers/useAdmin");
const useSignin = require("../../helpers/useSignin")
const postRouter = Router();

postRouter.get("/all", getAll);
postRouter.post("/", useAdmin, createNew);
postRouter.get("/", useSignin, getPost);

module.exports = postRouter;
