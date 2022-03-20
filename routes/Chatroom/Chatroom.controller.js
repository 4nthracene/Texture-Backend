const Chatroom = require("../../models/chatroom.model");

const getAll = async (req, res) => {
    try {
        const chatrooms = await Chatroom.find({});
        return res.json({ chatrooms });
    } catch(error) {
        // 500 Status
        return res.json({ error: error.message });
    }
};

const getOne = async (req, res) => {
    try {
        const chatroom = await Chatroom.findById(req.params.id)
        return res.json({ chatroom });
    } catch(error) {
        // 500 Status
        return res.json({
            err: error.message
        });
    }
}

const create = async (req, res) => {
    try {
        const { name } = req.body;
        const newRoom = new Chatroom({
            name, messages: []
        });
        const createdRoom = await newRoom.save();
        return res.json({ createdRoom })
    } catch(error) {
        // 500 Status
        return res.json({ err: error.message })
    }
}

module.exports = {
    getAll,
    getOne,
    create
};
