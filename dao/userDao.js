/**
 * <p></p>
 * UserDao 数据库访问层
 * @className userDao.js
 * @author jiangyu
 * @create 2017-01-11 10:12
 * @version v1.0
 */
// dao/userDao.js
var $baseDao = require('./baseDao');
/** sql的映射文件 **/
var $sql = require('./userSqlMapping');

/** dao中的方法 **/
module.exports = {
    add: function (req, res, next) {
        $baseDao.pool().getConnection(function (err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;

            // 建立连接，向表中插入值
            // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
            connection.query($sql.insert, [param.name, param.age], function (err, result) {
                if (result) {
                    result = {
                        code: 200,
                        msg: '增加成功'
                    };
                }

                // 以json形式，把操作结果返回给前台页面
                $baseDao.jsonWrite(res, result);

                // 释放连接
                connection.release();
            });

        });
    },
    delete: function (req, res, next) {
        // delete by Id
        $baseDao.pool().getConnection(function (err, connection) {
            var id = +req.query.id;// 转换为数字
            connection.query($sql.delete, id, function (err, result) {
                if (result.affectedRows > 0) {
                    result = {
                        code: 200,
                        msg: '删除成功'
                    };
                } else {
                    result = void 0;
                }
                $baseDao.jsonWrite(res, result);
                connection.release();
            });
        });
    },
    update: function (req, res, next) {
        // update by id
        var params = req.body;
        if (params.name == null || params.age == null || params.id == null) {
            $baseDao.jsonWrite(res, undefined);
            return;
        }
        $baseDao.pool().getConnection(function (err, connection) {
            connection.query($sql.update, [params.name, params.age, +params.id], function (err, result) {
                // 使用页面提示信息
                if (result.affectedRows > 0) {
                    res.render('msg/succcess',
                        {
                            result: result
                        }
                    );
                    // 模板中可以直接使用
                } else {
                    res.render('msg/fail', {
                        result: result
                    });
                }
                console.log(result);

                connection.release();
            });
        });
    },
    queryAll: function (req, res, next) {
        $baseDao.pool().getConnection(function (err, connection) {
            connection.query($sql.queryAll, function (err, result) {
                if (result) {
                    res.render('user/list', {
                        list: result
                    });
                }
                connection.release();
            });
        });
    },
    queryById: function (req, res, next) {
        // 为了拼凑正确的sql语句，这里要转下整数
        var id = +req.query.id;
        $baseDao.pool().getConnection(function (err, connection) {
            connection.query($sql.queryById, id, function (err, result) {
                $baseDao.jsonWrite(res, result);
                connection.release();
            });
        });
    }
};