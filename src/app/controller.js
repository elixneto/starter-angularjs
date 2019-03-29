angular
    .module('app')
    .controller('appCtrl', ['$rootScope', '$scope', 'userLoginFactory',
        function ($rootScope, $scope, userLoginFactory) {
            $scope.Logout = function () {
                userLoginFactory.Logout();
            }
        }]);