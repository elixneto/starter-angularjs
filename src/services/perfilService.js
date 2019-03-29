angular
    .module('app')
    .service('perfilService', ['$http', '$rootScope', function ($http, $rootScope) {
        return {
            ObterTodos: function (pagina, quantidade, filtro) {
                if (filtro.id == null)
                    filtro.id = 0;
                return $http.post($rootScope.globals.urlApi + 'perfil/lista?pagina=' + pagina + '&quantidade=' + quantidade, filtro).then(function (response) { return response.data; });
            },
            Obter: function (id) {
                return $http.get($rootScope.globals.urlApi + 'perfil/obter?id=' + id).then(function (response) { return response.data; });
            },
            Criar: function (dto) {
                return $http.post($rootScope.globals.urlApi + 'perfil/criar', dto).then(function (response) { return response.data; });
            },
            Editar: function (dto) {
                return $http.post($rootScope.globals.urlApi + 'perfil/editar', dto).then(function (response) { return response.data; });
            },
            IncluirUsuarios: function (perfilID, listaUsuarios) {
                return $http.post($rootScope.globals.urlApi + 'perfil/incluirusuarios?perfilID=' + perfilID, listaUsuarios).then(function (response) { return response.data; });
            },
            ExcluirUsuarios: function (perfilID, listaUsuarios) {
                return $http.post($rootScope.globals.urlApi + 'perfil/excluirusuarios?perfilID=' + perfilID, listaUsuarios).then(function (response) { return response.data; });
            }
        }
    }]);