const express = require("express");
const {connectMongoDb} = require("./connection");
const urlRoute = require("./routes/routes");

const app = express();
const PORT = 8001;

connectMongoDb('mongodb://127.0.0.1:27017/short-url');
app.use(express.json());
app.use('/url',urlRoute);

app.listen(PORT, () => console.log("server started"));