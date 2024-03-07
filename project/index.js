const express = require("express");
const app = express();
const PORT = 8002;
const { connectMongoDb } = require("./connection");
const { logRequest } = require("./middlewares");

connectMongoDb('mongodb://127.0.0.1:27017/nodejs');

const UserRouter = require("./routes/user");

app.use(express.urlencoded({extended: false})); // middlewares

app.use(logRequest("log.txt"));

app.use('/api/users', UserRouter)

app.listen(PORT, () => console.log("Server Start"));
