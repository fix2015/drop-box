/**
 * Created by semianchuk on 18.10.16.
 */
angular.module('main')
    .controller('mainController', [ '$scope', 'mainFactory', function ($scope, mainFactory) {

        mainFactory.getData().then(function (data) {
            $scope.dataImage = data;
        })
    }])