const express = require("express");
const controllers = require("../controllers/items");
const router = express.Router();

module.exports = (app) => {
    router.post("/", controllers.create);
    router.post("/:id", controllers.update);
    router.get("/", controllers.list);
    router.get("/:id", controllers.get);
    // router.put("/:id", );
    router.delete("/:id", controllers.delete);

    app.use("/api/items", router);
};