const dbConfig = require("../config/config")
const mongoose = require("mongoose")
mongoose.Promise = global.Promise
const db = {}

db.mongoose = mongoose
db.mongogURL = dbConfig.mongoURI

db.banking = require("./banking-model")(mongoose)

module.exports = db
