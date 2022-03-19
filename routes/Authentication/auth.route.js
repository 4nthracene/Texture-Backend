const { Router } = require("express");
const useSignin  = require("../../helpers/useSignin");
const { google, googleCb, logout } = require("./auth.controller")
const AuthRouter = Router();

AuthRouter.get("/google", google);
AuthRouter.get("/google/callback", googleCb);
AuthRouter.get("/logout", useSignin, logout);

module.exports = AuthRouter;
