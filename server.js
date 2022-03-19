const http = require("http");
const CONFIG = require("./config");
const app = require("./app");
const server = http.createServer(app);
const prerun = require("./helpers/prerun");

async function main() {
    await prerun(app);
    server.listen(CONFIG.PORT, () => {
        console.log(`[SERVER] Running on URL: ${CONFIG.URL}`);
    });
};

main();
