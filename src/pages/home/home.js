angular
    .module('app')
    .controller('homeCtrl', ['$scope', 'homeService',
        function ($scope, homeService) {
            homeService.Home().then(function () {
                
            });
        }]);