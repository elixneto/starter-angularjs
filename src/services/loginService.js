angular
    .module('app')
    .service('loginService', ['$http', '$rootScope', function ($http, $rootScope) {
        return {
            Token: function (dto) {
                return $http.post($rootScope.globals.urlApiToken, dto).then(function (response) { return response.data; });
            },
            Permissoes: function (usuarioID) {
                return $http.get($rootScope.globals.urlApi + 'auth/permissoes?usuarioID=' + usuarioID).then(function (response) { return response.data; });
            }
        }
    }]);