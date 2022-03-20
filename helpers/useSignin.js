module.exports = async(req, res, next) => {
    console.log(req.user);
    !!req.user ? next() : res.json({
        msg: "You are not authenticated"
    })
}