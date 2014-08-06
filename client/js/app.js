var charlieSiteApp = angular.module('charlieSiteApp', ['ngRoute' , 'ngResource']);

charlieSiteApp.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            controller:'HomeController',
            templateUrl:'/partials/home.html'
        })
        .when('/about', {
            controller:'AboutController',
            templateUrl:'/partials/about.html'
        })
        .when('/portfolio', {
            controller:'PortfolioController',
            templateUrl:'/partials/portfolio.html'
        })
        .when('/website', {
            controller:'PortfolioController',
            templateUrl:'/partials/website.html'
        })
        .when('/flash', {
            controller:'PortfolioController',
            templateUrl:'/partials/flash.html'
        })
        .when('/design', {
            controller:'PortfolioController',
            templateUrl:'/partials/design.html'
        })
        .when('/3d', {
            controller:'PortfolioController',
            templateUrl:'/partials/3d.html'
        })
        .when('/android', {
            controller:'PortfolioController',
            templateUrl:'/partials/android.html'
        })
        .when('/cashreceiptjournal', {
            controller:'CashReceiptJournalController',
            templateUrl:'/partials/cashreceiptjournal.html'
        })

        .otherwise({redirectTo:'/home'});
});

