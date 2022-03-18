const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const CONFIG = require("../config");

const LOG_STREAM = fs.createWriteStream(path.resolve(__dirname, "..", CONFIG.LOG_PATH), { flags: 'a' });

if(CONFIG.MODE == "prod") {
    module.exports = morgan("dev", {
        stream: LOG_STREAM
    });
} else {
    module.exports = morgan("dev");
}
