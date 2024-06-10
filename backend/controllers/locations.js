const db = require("../db/locations");

module.exports = {
    list: (req, res) => {
        db.list((err, items) => {
            return res.status(200).send(items);
        });
    },
};