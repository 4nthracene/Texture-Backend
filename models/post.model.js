const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'No description provided for this post, But I\'m sure it bangs ;)'
    },
    content: {
        type: String,
        required: true,
    },
    tags: [
        {
            type: String
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    imageUrl: {
        type: String,
    }
});

module.exports = mongoose.model("Post", PostSchema);
