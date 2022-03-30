const passport = require("passport");
const passportSetup = require("./passport.setup");

(async () => {
    await passportSetup()
})();

const google = passport.authenticate("google", { scope: ['profile'] });
const googleCb = passport.authenticate("google", {
    failureRedirect: '/',
    successRedirect: 'https://texture-prod-2.vercel.app/sso/',
});

const logout = (req, res) => {
    console.log(req.user);
    req.session = null;
    req.logout();
    return res.json({
        msg: 'logged out',
    })
}

const verify = (req, res) => {
    console.log("user", req.user);
    return res.json({ user: req.user });
}

module.exports = {
    google,
    googleCb,
    logout,
    verify
}
