/**
 * Created by semianchuk on 18.10.16.
 */
angular.module('main')
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