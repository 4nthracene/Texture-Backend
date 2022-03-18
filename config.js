module.exports = {
    PORT: process.env.PORT || 8000,
    MODE: process.env.MODE || "dev",
    URL: process.env.URL  || "http://localhost:8000",
    LOG_PATH: process.env.LOG_PATH || "access_logs.log"
}
