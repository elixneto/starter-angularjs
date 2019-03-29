angular
    .module('app')
    .service('funcionalidadeService', ['$http', '$rootScope', function ($http, $rootScope) {
        return {
            ObterHierarquia: function (moduloID) {
                return $http.get($rootScope.globals.urlApi + 'funcionalidade/obterhierarquiapormodulo?moduloID=' + moduloID).then(function (response) { return response.data; });
            }
        }
    }]);