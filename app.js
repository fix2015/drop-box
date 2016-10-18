angular.module('angularApp', ['ui.router','main', 'navbar', 'header'])
    .constant('domain', 'http://localhost:8080')
    .filter('convertsize', [function () {
        return function(input) {
            input = input || 0;
            return input/100;
        };
    }])