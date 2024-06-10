const db = require("../db/items");
const moment = require("moment");
const usersDb = require("../db/users");

module.exports = {
    create: (req, res) => {
        const sessionKey = req.cookies?.sessionKey;
        if (!sessionKey) {
            return res.status(400).send({});
        }
        
        usersDb.getBySession(sessionKey, (err, user) => {
            if (!user[0]) {
                return res.status(400).send({});
            }

            const { id } = user[0];
            const { name, description, locationId } = req.body;
            db.create({
                name,
                description,
                location_id: locationId,
                contact_id: id,
                date: moment().format('YYYY-MM-DD HH:mm:ss')
            }, (err, item) => {
                return res.status(200).send(item[0]);
            });
        });
    },

    update: (req, res) => {
        const itemId = req.params.id;
        const { name, description } = req.body;
        db.update(itemId, { 
            name,
            description
        }, (err, item) => {
            return res.status(200).send(item[0]);
        });
    },

    get: (req, res) => {
        const itemId = req.params.id;
        db.get(itemId, (err, item) => {
            return res.status(200).send(item[0]);
        });
    },

    list: (req, res) => {
        db.list((err, items) => {
            return res.status(200).send(items);
        });
    },

    delete: (req, res) => {
        const itemId = req.params.id;
        db.delete(itemId, (err, item) => {
            return res.status(200).send({});
        });
    },
};