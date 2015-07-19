function IndexController($scope, $rootScope) {
    $scope.message = 'Web Admin System';
    $rootScope.loginStatus = false;
}

webAdminApp.controller('IndexController', IndexController);
