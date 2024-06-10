const express = require("express");
const controllers = require("../controllers/locations");
const router = express.Router();

module.exports = (app) => {
    router.get("/", controllers.list);

    app.use("/api/locations", router);
};