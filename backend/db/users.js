const sql = require("../db");

module.exports = {
    create: function (userInfo, cb) {
        sql.query("INSERT INTO contacts SET ?", userInfo, cb);
    },

    update: function (userInfo, cb) {
        sql.query("UPDATE contacts SET session_key=? WHERE id=?", [userInfo.session_key, userInfo.id], cb);
    },

    getByCreds: function (userInfo, cb) {
        sql.query("SELECT id FROM contacts WHERE email=? AND pw=?", [userInfo.email, userInfo.pw], cb);
    },

    getBySession: function (session_key, cb) {
        sql.query("SELECT id, email FROM contacts WHERE session_key=?", [session_key], cb);
    },
}