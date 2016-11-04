var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Location = mongoose.model('Location');
var Login = mongoose.model('Login');
var User = mongoose.model('User');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/user/:name/:password', function(req, res, next){
	
	console.log("At a user");
});

module.exports = router;
