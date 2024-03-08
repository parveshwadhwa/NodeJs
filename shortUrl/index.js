const express = require("express");
const path = require("path");
const {connectMongoDb} = require("./connection");
const urlRoute = require("./routes/routes");
const staticRoute = require("./routes/staticRouter");

const app = express();
const PORT = 8001;

connectMongoDb('mongodb://127.0.0.1:27017/short-url');

app.set("view engine","ejs");
app.set("views", path.resolve("./views"));


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/url',urlRoute);
app.use('/',staticRoute);

app.listen(PORT, () => console.log("server started"));