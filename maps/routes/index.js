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

router.get('/login', function(req, res, next){
	res.redirect('/partials/login.html');
});

router.get('/user/:name/:password', function(req, res, next){
	
	console.log("At a user");
});

router.get('/testMap', function(req, res, next){
	console.log("In test");
	res.redirect('/partials/user.html');
});

module.exports = router;
