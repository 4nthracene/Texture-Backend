const mongoose = require("mongoose");
const passport = require("passport")
const CONFIG = require("../config");

module.exports = async function(app) {
    const services = {};
    // Implement database connectivity
    try {
        services['DB_CONNECTION'] = await mongoose.connect(CONFIG.DB_URI, {
            useNewUrlParser: true,
        });
    } catch(error) {
        console.error(error.message);
    }
    // Check External API Status

    if(process.env.MODE == "prod") {
        // Run tests
    }
    return services;
}
