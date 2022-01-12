const mongoose = require ('mongoose');

var schema = new mongoose.Schema({
 word: String,
 class: String,
 definition: String,
 example: String,
});

module.exports = mongoose.model('words', schema);