/**
 * <p></p>
 *
 * @className LoginService
 * @author jiangyu
 * @create 2017-01-16 23:08
 * @version v1.0
 */
jhonApp.service('LoginService', ['$http','$q', function (http,q) {
    this.login = function (name, password) {
        var deferred = q.defer();
        this.result = {};
        var user = {
            name:name,
            password:password
        }
        /** 异步请求数据 **/
        http.post("/users/queryByNameAndPassport", user)
        .success(function (data, status, headers, config) {
            if (data){
                deferred.resolve(data);
            }
        }).error(function (err, status, headers, config) {
            if(status === 405){
                deferred.reject('internal error');
            } else if(status === -1){
                deferred.reject('timeout');
            } else {
                deferred.reject('other error');
            }
        });
        return deferred.promise;
    }
}]);