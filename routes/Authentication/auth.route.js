const { Router } = require("express");
const { google, googleCb, logout } = require("./auth.controller")
const AuthRouter = Router();

AuthRouter.get("/google", google);
AuthRouter.get("/google/callback", googleCb);
AuthRouter.get("/logout", logout);

module.exports = AuthRouter;
