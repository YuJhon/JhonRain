var express = require('express');
var userDao = require('../dao/userDao');
var router = express.Router();

/**查询所有用户 **/
router.get('/', function(req, res, next) {
    userDao.queryAll(req,res,next);
});

/**
 * 新增用户
 */
router.get('/add',function(req,res,next){
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

module.exports = router;
