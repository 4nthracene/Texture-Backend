// Import statements
const { Router } = require("express");
const { getAll, createNew } = require("./post.controller");
const useAdmin = require("../../helpers/useAdmin");
const useSignin = require("../../helpers/useSignin")
const postRouter = Router();

postRouter.get("/all", useSignin, getAll);
postRouter.post("/", useAdmin, createNew);

module.exports = postRouter;
