const { Server } = require("socket.io");

let io = null;
const clients = {}

function initialize(httpServer) {
    io = new Server(httpServer);
    io.on("connection", (socket) => {
        console.log(socket.id);
        clients[socket.id] = socket;
    });
}
