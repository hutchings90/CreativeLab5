var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
	latitude: String,
	longitude: String
});
var loginSchema = new mongoose.Schema({
	username: String,
	password: String
});
var userSchema = new mongoose.Schema({
	username: String,
	contacts: [],
	landmarks: [locationSchema]
});

mongoose.model('Location', locationSchema);
mongoose.model('Login', loginSchema);
mongoose.model('User', userSchema);
