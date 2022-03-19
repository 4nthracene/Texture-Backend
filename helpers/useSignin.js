module.exports = async(req, res, next) => {
    !!req.user ? next() : res.json({
        msg: "You are not authenticated"
    })
}