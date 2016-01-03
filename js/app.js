/// <reference path="../typings/tsd.d.ts" />
'use strict';
var PMC;
(function (PMC) {
    PMC.appModule = angular.module('pmcApp', ['ngMaterial']);
})(PMC || (PMC = {}));
/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
'use strict';
var PMC;
(function (PMC) {
    var AppController = (function () {
        function AppController($q, $http, $scope, $window) {
            var _this = this;
            this.$q = $q;
            this.$http = $http;
            this.$scope = $scope;
            this.$window = $window;
            this.profileUrl = 'https://api.github.com/users/pmcoltrane';
            this.reposUrl = 'https://api.github.com/users/pmcoltrane/repos';
            this.loadProfile = function () {
                var promises = [];
                promises.push(_this.$http.get(_this.profileUrl)
                    .then(function (result) {
                    _this.$scope['profileData'] = result.data;
                    console.log('loaded profile');
                }));
                promises.push(_this.$http.get(_this.reposUrl)
                    .then(function (result) {
                    _this.$scope['reposData'] = result.data;
                    console.log('loaded repos');
                }));
                return _this.$q.all(promises);
            };
            this.loadProfile();
            $scope['navigateTo'] = function (url) {
                _this.$window.location.href = url;
            };
        }
        return AppController;
    })();
    PMC.AppController = AppController;
    PMC.appModule.controller('pmcCtrl', ['$q', '$http', '$scope', '$window', AppController]);
})(PMC || (PMC = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvYXBwLnRzIiwiLi4vdHMvY29udHJvbGxlcnMvYXBwLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiUE1DIiwiUE1DLkFwcENvbnRyb2xsZXIiLCJQTUMuQXBwQ29udHJvbGxlci5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDO0FBQzVDLFlBQVksQ0FBQztBQUViLElBQU8sR0FBRyxDQUdUO0FBSEQsV0FBTyxHQUFHLEVBQUEsQ0FBQztJQUVJQSxhQUFTQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUNwRUEsQ0FBQ0EsRUFITSxHQUFHLEtBQUgsR0FBRyxRQUdUO0FDTkQsK0NBQStDO0FBQy9DLGtDQUFrQztBQUVsQyxZQUFZLENBQUM7QUFFYixJQUFPLEdBQUcsQ0FtQ1Q7QUFuQ0QsV0FBTyxHQUFHLEVBQUMsQ0FBQztJQUVSQTtRQUtJQyx1QkFBMkJBLEVBQXFCQSxFQUFVQSxLQUEyQkEsRUFBVUEsTUFBc0JBLEVBQVVBLE9BQStCQTtZQUxsS0MsaUJBOEJDQTtZQXpCOEJBLE9BQUVBLEdBQUZBLEVBQUVBLENBQW1CQTtZQUFVQSxVQUFLQSxHQUFMQSxLQUFLQSxDQUFzQkE7WUFBVUEsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBZ0JBO1lBQVVBLFlBQU9BLEdBQVBBLE9BQU9BLENBQXdCQTtZQUh0SkEsZUFBVUEsR0FBR0EseUNBQXlDQSxDQUFDQTtZQUN2REEsYUFBUUEsR0FBR0EsK0NBQStDQSxDQUFDQTtZQVMzREEsZ0JBQVdBLEdBQUdBO2dCQUNsQkEsSUFBSUEsUUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0E7Z0JBRWxCQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFJQSxDQUFDQSxVQUFVQSxDQUFDQTtxQkFDeENBLElBQUlBLENBQUNBLFVBQUFBLE1BQU1BO29CQUNSQSxLQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxHQUFHQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtvQkFDekNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFFUkEsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7cUJBQ3RDQSxJQUFJQSxDQUFDQSxVQUFBQSxNQUFNQTtvQkFDUkEsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBQ3ZDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQTtnQkFDaENBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUVSQSxNQUFNQSxDQUFDQSxLQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtZQUNqQ0EsQ0FBQ0EsQ0FBQUE7WUF0QkdBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1lBQ25CQSxNQUFNQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFHQSxVQUFDQSxHQUFHQTtnQkFDdkJBLEtBQUlBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLEdBQUdBLEdBQUdBLENBQUNBO1lBQ3JDQSxDQUFDQSxDQUFBQTtRQUNMQSxDQUFDQTtRQW9CTEQsb0JBQUNBO0lBQURBLENBQUNBLEFBOUJERCxJQThCQ0E7SUE5QllBLGlCQUFhQSxnQkE4QnpCQSxDQUFBQTtJQUVEQSxHQUFHQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFVQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQSxJQUFJQSxFQUFFQSxPQUFPQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUM3RkEsQ0FBQ0EsRUFuQ00sR0FBRyxLQUFILEdBQUcsUUFtQ1QifQ==