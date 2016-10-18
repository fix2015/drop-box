/**
 * Created by semianchuk on 18.10.16.
 */
angular.module('main')
.directive('main',[function() {
    return {
        restrict: 'E',
        templateUrl: 'src/modules/main/main.html',
        link: function (scope, element, attrs) {
            scope.sortBy ='name'

            scope.sortButton=[
                {
                    id: 1,
                    name: 'name',
                    active: true
                },
                {
                    id: 2,
                    name: 'size',
                    active: false
                },
                {
                    id: 3,
                    name: 'modified',
                    active: false
                }
            ]

            scope.changeSort = function (id) {
                angular.forEach(scope.sortButton, function (val, ind) {
                    if(val.id==id){
                        val.active = true;
                        scope.sortBy = val.name
                    }else{
                        val.active = false;
                    }
                })
            }
        }
    }
}])