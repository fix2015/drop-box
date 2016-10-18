angular.module('header',[])
    .directive('header', function() {
        return {
            restrict: 'E',
            templateUrl: 'src/modules/header/header.html',
            link: function (scope, element, attrs, $rootScope) {
               scope.name = 'Semianchuk Vitaliy'
            }
        }
    });
