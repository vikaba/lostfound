const sql = require("../db");

module.exports = {
    list: function (cb) {
        sql.query("SELECT * FROM locations", cb);
    }
}