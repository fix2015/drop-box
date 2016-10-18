/**
 * Created by semianchuk on 18.10.16.
 */
angular.module('main')
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