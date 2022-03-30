const mongoose = require("mongoose");
const passport = require("passport")
const InitializeSocket = require("../configurations/socket");
const CONFIG = require("../config");

module.exports = async function(app, server) {
    const services = {};
    // Implement database connectivity
    try {
        services['DB_CONNECTION'] = await mongoose.connect(CONFIG.DB_URI, {
            useNewUrlParser: true,
        });
    } catch(error) {
        console.error(error.message);
    }
    // Initialize Sockets
    InitializeSocket(server);

    if(process.env.MODE == "prod") {
        // Run tests
    }
    return services;
}
