var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',function(req,res){
  res.render('login');
});

router.get('/home',function(req,res){
  res.render('home');
});

module.exports = router;
