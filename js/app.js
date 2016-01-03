(function (angular) {
    'use strict';

    var appModule = angular.module('myApp', []);
    var appController = appModule.controller('myCtrl', ['$scope', '$http', AppController]);

    function AppController($scope, $http) {
        console.log("loaded");
        var _this = this;

        _this.loadProfile = function () {
            $http.get('https://api.github.com/users/pmcoltrane')
                .then(function (result) { 
                    $scope.profileData = result.data;
                    console.log('profile loaded'); 
                });

            $http.get('https://api.github.com/users/pmcoltrane/repos')
                .then(function (result) { 
                    $scope.repos = result.data;
                    console.log('repos loaded'); 
                })
        }

        _this.loadProfile();
    }

})(window.angular);