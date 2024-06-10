const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const qs = require('qs');

const app = express();
const corsOptions = {
    origin: "http://localhost:8081",
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('query parser', function (str) {
    return qs.parse(str);
})

app.get("/", (req, res) => {
    res.json({msg: "we've done it"});
});

require("../backend/routes/items")(app);
require("../backend/routes/users")(app);
require("../backend/routes/locations")(app);
require("../backend/routes/auth")(app);

const PORT = process.env.PORT || 8080;
app.set("port", PORT);
app.listen(PORT, () => {
    console.log("API running on localhost: " + PORT);
});