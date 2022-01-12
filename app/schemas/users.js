const mongoose = require ('mongoose');

var schema = new mongoose.Schema({
 username: String,
 email: String,
 role: String,
 password: String,
});

module.exports = mongoose.model('user', schema);