var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login/login', { title: 'Login' });
});

router.get('/login',function(req,res){
  res.render('login/login');
});

router.get('/home',function(req,res){
  res.render('index',{ title: 'Home' });
});

module.exports = router;
