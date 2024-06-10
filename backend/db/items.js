const sql = require("../db");

module.exports = {
    create: function (foundItemDetails, cb) {
        sql.query("INSERT INTO found_items SET ?", foundItemDetails, cb);
    },

    delete: function (foundItemId, cb) {
        sql.query("DELETE FROM found_items WHERE id=?", [foundItemId], cb);
    },

    update: function (foundItemId, foundItemDetails, cb) {
        sql.query(
            "UPDATE found_items SET name=?, description=? WHERE id=?", 
            [foundItemDetails.name, foundItemDetails.description, foundItemId],
            cb
        );
    },

    get: function (foundItemId, cb) {
        sql.query("SELECT * FROM found_items WHERE id=?", [foundItemId], cb);
    },

    list: function (cb) {
        sql.query("SELECT found_items.*, locations.name AS loc_name, contacts.email FROM found_items \
        LEFT JOIN locations \
        ON found_items.location_id = locations.id \
        LEFT JOIN contacts \
        ON found_items.contact_id = contacts.id", cb);
    }
}

