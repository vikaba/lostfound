const db = require("../db/users");
const uuid = require("uuid");

module.exports = {
    login: (req, res) => {
        db.getByCreds(req.body, (err, user) => {
            if (!user[0]) {
                return res.status(400).send({});
            }
            const { id } = user[0];
            const isAdmin = req.body.email === "admin@admin.com";
            if (!err && user) {
                const newSessionKey = uuid.v1();
                db.update({ id, session_key: newSessionKey }, (err, user) => {
                    res.cookie('sessionKey', newSessionKey);
                    return res.status(200).send({id, isAdmin});
                });
            }
        });
    },

    register: (req, res) => {
        db.create(req.body, (err, user) => {
            return res.status(200).send({name: req.body.name, id: user.insertId });
        });
    },

    logout: (req, res) => {
        const sessionKey = req.cookies?.sessionKey;
        if (!sessionKey) {
            return res.status(204).send({});
        }
        db.getBySession(sessionKey, (err, user) => {
            if (user[0]) {
                db.update({ id: user[0].id, session_key: '' }, (err, user) => {
                    return res.status(204).send({});
                });
            } else {
                return res.status(204).send({});
            }
        });
    },
};