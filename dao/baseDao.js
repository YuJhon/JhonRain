/**
 * <p></p>
 *
 * @className baseDao
 * @author jiangyu
 * @create 2017-01-11 17:18
 * @version v1.0
 */
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');

module.exports = {
    /** 使用连接池，提升性能 **/
    pool: function (){
        return mysql.createPool($util.extend({}, $conf.mysql));
    },
    jsonWrite: function (res, ret) {
        if (typeof ret === 'undefined') {
            res.json({
                code: 999999,
                msg: '系统繁忙，请稍后再试'
            });
        } else {
            res.json(ret);
        }
    }
};


