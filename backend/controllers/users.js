const db = require("../db/users");

module.exports = {
    create: (req, res) => {
        db.create(req.body, (err, user) => {
            return res.status(200).send(user[0]);
        });
    },

    list: (req, res) => {
        const session_key = req.query.session_key;
        db.getBySession(session_key, (err, user) => {
            if (user[0]?.email === "admin@admin.com") {
                return res.status(200).send({...user[0], isAdmin: true });
            }
            return res.status(200).send(user[0]);
        });
    },

    get: (req, res) => {
        const userId = req.params.id;
        db.getById(userId, (err, user) => {
            return res.status(200).send(user[0]);
        });
    },
};