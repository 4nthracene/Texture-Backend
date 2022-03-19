const UserModel = require("../models/user.model");

module.exports = async (req, res, next) => {
    const { user } = req;
    const users = await UserModel.findOne({ id: user.id });
    if(users.admin) { return next() }
    return res.json({
        msg: "sorry you are not an admin :/"
    });
}