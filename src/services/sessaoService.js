angular
    .module('app')
    .service('sessaoService', ['$http', '$rootScope', function ($http, $rootScope) {
        return {
            ObterUsuariosLogados: function () {
                return $http.get($rootScope.globals.urlApi + 'sessao/usuarioslogados').then(function (response) { return response.data; });
            },
            EncerrarSessao: function (usuarioID) {
                return $http.post($rootScope.globals.urlApi + 'sessao/encerrarsessao?usuarioID=' + usuarioID).then(function (response) { return response.data; });
            }
        }
    }]);