'use strict';

angular
    .module('app')
    .config(['$httpProvider', '$locationProvider', function ($httpProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

        $httpProvider.interceptors.push('httpInterceptorFactory');
    }]);