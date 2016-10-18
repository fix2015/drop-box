/**
 * Created by semianchuk on 08.10.16.
 */
angular.module('angularApp')
    .config(['$locationProvider','$stateProvider', function($locationProvider,$stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url         : '/',
                templateUrl : 'public/templates/home.html',
                controller  : 'mainController'
            })
            .state('photos', {
                url         : '/photos',
                templateUrl : 'public/templates/photos.html',
                controller  : 'mainController'
            })
            .state('sharing', {
                url         : '/sharing',
                templateUrl : 'public/templates/sharing.html',
                controller  : 'mainController'
            })
            .state('link', {
                url         : '/link',
                templateUrl : 'public/templates/link.html',
                controller  : 'mainController'
            })
            .state('events', {
                url         : '/events',
                templateUrl : 'public/templates/events.html',
                controller  : 'mainController'
            })
            .state('getstarted', {
                url         : '/getstarted',
                templateUrl : 'public/templates/getstarted.html',
                controller  : 'mainController'
            })

    }]);