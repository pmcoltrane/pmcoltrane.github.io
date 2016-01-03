/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />

'use strict';

module PMC {

    export class AppController {

        private profileUrl = 'https://api.github.com/users/pmcoltrane';
        private reposUrl = 'https://api.github.com/users/pmcoltrane/repos';

        public constructor(private $q: angular.IQService, private $http: angular.IHttpService, private $scope: angular.IScope, private $window: angular.IWindowService) {
            this.loadProfile();
            $scope['navigateTo'] = (url) => {
                this.$window.location.href = url;
            }
        }

        private loadProfile = () => {
            var promises = [];

            promises.push(this.$http.get(this.profileUrl)
                .then(result => {
                    this.$scope['profileData'] = result.data;
                    console.log('loaded profile');
                }));

            promises.push(this.$http.get(this.reposUrl)
                .then(result => {
                    this.$scope['reposData'] = result.data;
                    console.log('loaded repos');
                }));
            
            return this.$q.all(promises);
        }

    }

    PMC.appModule.controller('pmcCtrl', ['$q', '$http', '$scope', '$window', AppController]);
}