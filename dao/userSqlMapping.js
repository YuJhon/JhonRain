/**
 * <p></p>
 * User表Crud 对应的SQL语句
 * @className useSqlMapping
 * @author jiangyu
 * @create 2017-01-11 10:09
 * @version v1.0
 */
var user = {
    insert:'INSERT INTO t_user(name, password) VALUES(?,?)',
    update:'update t_user set name=?, age=? where id=?',
    delete: 'delete from t_user where id=?',
    queryById: 'select * from t_user where id=?',
    queryAll: 'select * from t_user',
    queryByNameAndPassport:'select * from t_user where name=? and password=?'
};

module.exports = user;