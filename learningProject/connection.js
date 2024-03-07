const mongoose = require("mongoose");

async function connectMongoDb(url) {
    return mongoose.connect(url)
                   .then(() => console.log("Mongo Db Connected"))
                   .catch((err) => console.log("Getting Error"));
}

module.exports = {
    connectMongoDb,
};