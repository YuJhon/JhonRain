/**
 * <p></p>
 *
 * @className UserService
 * @author jiangyu
 * @create 2017-01-17 15:31
 * @version v1.0
 */
jhonApp.service('UserService', ['$http','$q', function (http,q) {
    this.queryAll = function () {
        var deferred = q.defer();
        this.result = {};
        /** 异步请求数据 **/
        http.post("/users/")
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