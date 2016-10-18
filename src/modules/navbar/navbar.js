angular.module('navbar',[])
    .directive('navbar',['navFactory', 'domain', 'mainFactory',  function(navFactory, domain, mainFactory) {
        return {
            restrict: 'E',
            scope:{},
            templateUrl: 'src/modules/navbar/navbar.html',
            link: function (scope, element, attrs) {
                scope.size = 0;
                var fullSize = 10000;
                mainFactory.getData().then(function (data) {
                    var tempSize =0;
                    angular.forEach(data, function (val, ind){
                        tempSize +=val.size;
                    })
                    scope.size = tempSize;
                    scope.sizePersent = Math.ceil(tempSize/fullSize * 100);
                    scope.progres ={
                        'width':scope.sizePersent+'%'
                    }
                })
                scope.domain = domain;
                scope.navbar = navFactory.getNav();

            }
        }
    }]);
