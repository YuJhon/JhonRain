/**
 * <p></p>
 *
 * @className connect
 * @author jiangyu
 * @create 2017-01-11 9:51
 * @version v1.0
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});
connection.end();