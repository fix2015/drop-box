angular.module('main',[])
    .controller('mainController', [ '$scope',function ($scope) {
        

    }])
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
    .factory('mainFactory',['mainService','$q', function (mainService,$q) {
        function getData(){
            var deferred = $q.defer();
            mainService.getData().then(function (data) {
                deferred.resolve(data);
                console.log(data)
            })
            return deferred.promise;
        }

        return{
            getData: getData
        }
    }])
    .service('mainService',[ '$q','$http', function ($q,$http) {

        this.getData = function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: 'public/JSON/image.json'}).success(function(data, status) {
                console.log(data)
                deferred.resolve(data);
            })
            return deferred.promise;
        }
    }])
    .directive('main',['mainFactory', function(mainFactory) {
        return {
            restrict: 'E',
            templateUrl: 'src/modules/main/main.html',
            link: function (scope, element, attrs, $rootScope) {

                mainFactory.getData().then(function (data) {
                    scope.dataImage = data;
                })
                
                scope.sortBy ='name'
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
            }
        }
    }]);
