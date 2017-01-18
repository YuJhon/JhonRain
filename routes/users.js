var express = require('express');
var path = require('path');
var userDao = require(path.resolve(appPath ,'dao/userDao'));
var $baseDao = require(path.resolve(appPath ,'dao/baseDao'));
var router = express.Router();

/**查询所有用户 **/
router.get('/', function(req, res, next) {
    userDao.queryAll().then(function(result){
        console.info(result);
        res.end(JSON.stringify(result));
    });
});

/**
 * 新增用户
 */
router.post('/add',function(req,res,next){
  userDao.add(req,res,next);
});


/**
 * 根据id查询用户
 */
router.get('/query',function(req,res,next){
  userDao.queryById(req,res,next);
});

/**
 * 删除用户
 */
router.get('/delete',function(req,res,next){
  userDao.delete(req,res,next);
});

/**
 * 更新用户信息
 */
router.post('/update',function(req,res,next){
  userDao.update(req,res,next);
});

router.post('/queryByNameAndPassport',function(req,res,next){
    var params = req.body;
    if (params.name == null || params.password == null) {
        $baseDao.jsonWrite(res, undefined);
        return;
    }
    var username = params.name;
    var password = params.password;
    
    userDao.queryByNameAndPassportPromise(username,password).then(function(result){
        console.info(result);
        res.end(JSON.stringify(result));
    });
    
    
});


module.exports = router;
