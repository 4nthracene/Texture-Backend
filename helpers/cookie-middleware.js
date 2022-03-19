const { COOKIE_KEYS, COOKIE_NAME } = require("../config");
const CookieSession = require("cookie-session");

module.exports = CookieSession({
    name: COOKIE_NAME,
    keys: COOKIE_KEYS,
})
