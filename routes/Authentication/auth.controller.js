const passport = require("passport");
const passportSetup = require("./passport.setup");

(async () => {
    await passportSetup()
})();

const google = passport.authenticate("google", { scope: ['profile'] });
const googleCb = passport.authenticate("google", {
    failureRedirect: '/',
    successRedirect: '/posts/all',
});
const logout = (req, res) => {
    console.log(req.user);
    req.session = null;
    req.logout();
    return res.json({
        msg: 'logged out',
    })
}


module.exports = {
    google,
    googleCb,
    logout
}
