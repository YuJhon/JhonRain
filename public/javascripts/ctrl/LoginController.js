/**
 * <p></p>
 *
 * @className LoginController
 * @author jiangyu
 * @create 2017-01-16 23:08
 * @version v1.0
 */

jhonApp.controller('LoginController',['$scope','$location','LoginService',function(scope,location,LoginService){
    scope.submit = function(){
        var username = scope.user.name;
        var password = scope.user.password;
        LoginService.login(username,password).then(function(result){
            if (result){
                console.info("Controller获取数据",result);
                location.path('/users/');
                location.search({});
                scope.user = {};
            }else{
                location.path("/login/");
                location.search({});
                scope.user = {};
            }
        });

    }
}]);