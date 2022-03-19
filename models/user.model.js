const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    profile: {
        type: Object,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
});

const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;
