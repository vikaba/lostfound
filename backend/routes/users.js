const express = require("express");
const controllers = require("../controllers/users");
const router = express.Router();

module.exports = (app) => {
    router.post("/", controllers.create);
    router.get("/", controllers.list);
    router.get("/:user_id", controllers.get);
    // router.put("/:id", );
    // router.delete("/:id", );

    app.use("/api/users", router);
};