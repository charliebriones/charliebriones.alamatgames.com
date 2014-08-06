charlieSiteApp.controller('HomeController', ['$scope', 'UsersFactory', function ($scope, UsersFactory) {
    $scope.isLoading = true;

    UsersFactory.query(function (users) {
        $scope.users = users;
        $scope.isLoading = false;
    });
}]);