const Chatroom = require("../../models/chatroom.model");
const useSignin = require("../../helpers/useSignin");
const useAdmin = require("../../helpers/useAdmin");
const { Router } = require("express");
const { getAll, getOne } = require("./Chatroom.controller");
const ChatroomRouter = Router();

ChatroomRouter.get("/all", getAll);
ChatroomRouter.get("/room/:id", useSignin, getOne);
ChatroomRouter.post("/", useSignin, useAdmin, getOne);

module.exports = ChatroomRouter;
