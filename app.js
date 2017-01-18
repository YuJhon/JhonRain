var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var glob = require("glob");
var app = express();
/** 设置全局路径 **/
global.appPath = __dirname;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 输出日志到目录
var fs = require('fs');
/** 先建好目录 **/
var accessLogStream = fs.createWriteStream(__dirname+ '/log/access.log',{flags: 'a',encoding:'utf8'});
app.use(logger('combined',{stream:accessLogStream}));


// 批量装载route
glob.sync(path.resolve(__dirname , 'routes/*.js')).forEach(function(item){
  var name = path.parse(item).name;
  if(name=='index'){
    name = '';
  }
  app.use('/' + name, require(item));
});

// var index = require('./routes/index');
// var users = require('./routes/users');

// app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
