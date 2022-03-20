const mongoose = require("mongoose");

const ChatroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    messages: [{
        type: String,
    }]
});

module.exports = mongoose.model("chatroom", ChatroomSchema);
