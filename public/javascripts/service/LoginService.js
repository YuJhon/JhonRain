/**
 * <p></p>
 *
 * @className LoginService
 * @author jiangyu
 * @create 2017-01-16 23:08
 * @version v1.0
 */
jhonApp.service('LoginService', ['$http', function (http) {
    this.login = function (name, password) {
        if (name == 'jiangyu' && password == '123') {
            return true;
        }
        return false;
    }
}]);