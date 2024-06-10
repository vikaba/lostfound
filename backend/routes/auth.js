const express = require("express");
const controllers = require("../controllers/auth");
const router = express.Router();

module.exports = (app) => {
    router.post("/login", controllers.login);
    router.post("/register", controllers.register);
    router.post("/logout", controllers.logout);

    app.use("/api/auth", router);
};