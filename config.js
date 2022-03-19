require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 8000,
    MODE: process.env.MODE || "dev",
    URL: process.env.URL  || "http://localhost:8000",
    LOG_PATH: process.env.LOG_PATH || "access_logs.log",
    DB_URI: process.env.DB_URI,
    GOOGLE_CLIENT_ID: process.env.CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.CLIENT_SECRET,
    COOKIE_NAME: process.env.COOKIE_NAME || "test",
    COOKIE_KEYS: process.env.COOKIE_KEYS?.split(",") || ['test-1', 'test-2']
}
