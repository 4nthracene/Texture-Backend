const { Router } = require("express");
const routes = Router();

routes.get("/", (req, res) => {
    return res.json({
        message: 'API Working, Go edit them files ��'
    });
});

module.exports = routes;
