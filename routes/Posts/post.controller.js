const Post = require("../../models/post.model");

async function getAll(req, res) {
    const posts = await Post.find({});
    return res.json(posts);
}

async function createNew(req, res) {
    const { title, description, content, tags } = req.body;
    const newPost = new Post({ title, description, content,  tags, createdAt: new Date()});
    try {
        await newPost.save();
    } catch(error) {
        return res.json({
            msg: error.message
        });
    };
};

module.exports = {
    getAll,
    createNew
}