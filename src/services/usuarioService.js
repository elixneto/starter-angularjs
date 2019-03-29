angular
    .module('app')
    .service('usuarioService', ['$http', '$rootScope', function ($http, $rootScope) {
        return {
            Obter: function (id) {
                return $http.get($rootScope.globals.urlApi + 'usuario/obter?id=' + id).then(function (response) { return response.data; });
            },
            ObterPorLogin: function (login) {
                return $http.get($rootScope.globals.urlApi + 'auth/obterporlogin?login=' + login).then(function (response) { return response.data; });
            },
            ObterTodos: function (pagina, quantidade, filtro) {
                if (filtro.id == null)
                    filtro.id = 0;
                return $http.post($rootScope.globals.urlApi + 'usuario/lista?pagina=' + pagina + '&quantidade=' + quantidade, filtro).then(function (response) { return response.data; });
            },
            ObterCombo: function () {
                return $http.get($rootScope.globals.urlApi + 'usuario/obtercombo').then(function (response) { return response.data; });
            },
            Criar: function (dto) {
                return $http.post($rootScope.globals.urlApi + 'usuario/criar', dto).then(function (response) { return response.data; });
            },
            Editar: function (dto) {
                return $http.post($rootScope.globals.urlApi + 'usuario/editar', dto).then(function (response) { return response.data; });
            },
            Inativar: function (usuarioID) {
                return $http.post($rootScope.globals.urlApi + 'usuario/inativar', usuarioID).then(function (response) { return response.data; });
            },
            Ativar: function (usuarioID) {
                return $http.post($rootScope.globals.urlApi + 'usuario/ativar', usuarioID).then(function (response) { return response.data; });
            },
            UploadImagemPerfil: function (usuarioID, file) {
                var formData = new FormData();
                formData.append("", file);

                return $http({
                    method: 'POST',
                    url: $rootScope.globals.urlApi + 'usuario/UploadImagemPerfil?usuarioID=' + usuarioID,
                    headers: {
                        'Content-Type': undefined
                    },
                    data: formData
                }).then(function (response) { return response.data; });
            },
            EnviarEmailEsqueciSenha: function (usuarioID, ambiente) {
                return $http.get($rootScope.globals.urlApi + 'auth/enviaremailesquecisenha?usuarioID=' + usuarioID + "&ambiente=" + ambiente).then(function (response) { return response.data; });
            },
            UtilizarURLTokenRedefinirSenha: function (token) {
                return $http.get($rootScope.globals.urlApi + 'auth/UtilizarURLTokenRedefinirSenha?token=' + token).then(function (response) { return response.data; });
            },
            RedefinirSenha: function (dto) {
                return $http.post($rootScope.globals.urlApi + 'auth/redefinirsenha', dto).then(function (response) { return response.data; });
            }
        }
    }]);