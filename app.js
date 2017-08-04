angular.module('docs', [
    'ngRoute'
])
.config(function($routeProvider) {
    $routeProvider
        .when('/stockwise', {
            templateUrl: 'pages/stockwise.html'
        })
        .when('/epicklist', {
            templateUrl: 'pages/epicklist.html'
        })
        .when('/currencytracker', {
            templateUrl: 'pages/currencytracker.html'
        })
        .otherwise({
            redirectTo: '/stockwise'
        });
});

$('.uk-offcanvas li a').click(function(e) {
    UIkit.offcanvas($('#offcanvas')).hide([force = false]);
});