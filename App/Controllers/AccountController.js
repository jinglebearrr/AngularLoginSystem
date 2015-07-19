function AccountController($scope, $rootScope, $location) {
    $scope.users = [{ userId: 1, username: 'admin', password: 'admin', email: 'admin@marlabs.com', gender: 'Male', mobile: '43343' }];

    $scope.validateUser = function () {
        for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].username == $scope.loginModel.username && $scope.users[i].password == $scope.loginModel.password) {
                $scope.loginStatus = true;
                break;
            }
        }
        if ($scope.loginStatus) {
            sessionStorage.username = $scope.loginModel.username;
            $scope.loggedUsername = $scope.loginModel.username;
            $location.path('/userhome');
        } else {
            $location.path('/login');
        }
    }
    $scope.register = function () {
        $scope.users.push($scope.newUser);
        localStorage["users"] = JSON.stringify($scope.users);
        $location.path('/login');
    }
    $scope.logout = function () {
        
        if (confirm("Are you sure want to Logout? ")) {
            sessionStorage.username = "";
            $scope.loggedUsername = "";
            $rootScope.loginStatus = false;
            $rootScope.loggedUsername = "";
            $location.path('/login');
        } else {
            $location.path('/userhome');
        }
    }
    function init() {
        if (sessionStorage.username != "" && sessionStorage.username != undefined) {
            $rootScope.loginStatus = true;
            $rootScope.loggedUsername = sessionStorage.username;
        }
        else {
            $rootScope.loginStatus = false;
        }

        if (localStorage["users"] != null) {
            $scope.users =JSON.parse( localStorage["users"]);
        }
        
    }
    init();
}

webAdminApp.controller('AccountController', AccountController);


