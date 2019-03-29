angular
    .module('app')
    .service('homeService', ['$http', '$rootScope', function ($http, $rootScope) {
        return {
            Home: function () {
                return $http.get($rootScope.globals.urlApi + 'home/home').then(function (response) { return response.data; });
            }
        }
    }]);