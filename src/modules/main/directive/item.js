/**
 * Created by semianchuk on 18.10.16.
 */
angular.module('main')
.directive('item', function () {
    return {
        restrict: 'E',
        scope: {
            item: '=data'
        },
        templateUrl: 'src/modules/main/item.html',
        link: function (scope, element, attrs, $rootScope) {

        }
    }
})