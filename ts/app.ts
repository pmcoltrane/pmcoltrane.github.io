/// <reference path="../typings/tsd.d.ts" />
'use strict';

module PMC {

    export var appModule = angular
        .module('pmcApp', ['ngMaterial'])
        .config(function($mdThemingProvider) {
            $mdThemingProvider
            .theme('default')
            .primaryPalette('green')
            .accentPalette('blue');
        });
}