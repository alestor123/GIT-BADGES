var mongoose = require('mongoose')
module.exports = mongoose.model('View', new mongoose.Schema({
	key: String,
	counter: Number
}))
