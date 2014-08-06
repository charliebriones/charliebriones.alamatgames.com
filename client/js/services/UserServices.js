charlieSiteApp.factory('UsersFactory', function ($resource) {
    return $resource('/users');
});
