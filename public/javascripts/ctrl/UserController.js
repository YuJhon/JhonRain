/**
 * <p></p>
 *
 * @className UserController
 * @author jiangyu
 * @create 2017-01-17 15:01
 * @version v1.0
 */

jhonApp.controller('UserController',['$scope','UserService',function(scope,UserService){
    var table = scope.table = {};
    UserService.queryAll().then(function(result){
        if (result){
            console.info("UserController获取数据",result);
            scope.table.list = result;
            scope.table.size = result.length;
        }
    });
}]);