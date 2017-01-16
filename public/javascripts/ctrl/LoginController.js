/**
 * <p></p>
 *
 * @className LoginController
 * @author jiangyu
 * @create 2017-01-16 23:08
 * @version v1.0
 */

jhonApp.controller('myController',['$scope','LoginService',function(scope,LoginService){
    scope.submit = function(){
        var username = scope.user.name;
        var password = scope.user.password;
        var result = LoginService.login(username,password);
        alert(result);
    }
}]);