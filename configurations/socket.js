const { Server } = require("socket.io");

let io = null;
const clients = {}

module.exports = function initialize(httpServer) {
    console.log(`[SOCKET] Initializing Sockets`)
    io = new Server(httpServer, {
        cors: {
            origin: '*'
        }
    });
    io.on("connection", (socket) => {
        console.log(socket.id);
        clients[socket.id] = socket;
        socket.on("message", (msg) => {
            console.log(msg);
            io.emit("chat", msg);
        });
    });
}
