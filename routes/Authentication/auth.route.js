const { Router } = require("express");
const passport = require("passport");
const useSignin  = require("../../helpers/useSignin");
const { google, googleCb, logout, verify } = require("./auth.controller")
const AuthRouter = Router();

AuthRouter.get("/google", google);
AuthRouter.get("/data", verify);
AuthRouter.get("/google/callback", googleCb, (req, res) => {
    console.log("user: ", req.user);
    res.send("Thanks");
});
AuthRouter.get("/logout", useSignin, logout);
AuthRouter.get("/test", useSignin, (req, res) => {
    return res.json({ user: req.user });
})

module.exports = AuthRouter;
