'use strict';

angular
    .module('app')
    .factory('userLoginFactory', ['$window', '$rootScope', '$injector', '$location', function ($window, $rootScope, $injector) {
        return {
            GetToken: function () {
                return $window.localStorage.getItem('token');
            },
            GetUsuarioLogado() {
                var dto = {
                    ID: $window.localStorage.getItem('uID'),
                    isAdmin: $window.localStorage.getItem('uIsAdmin'),
                    nome: $window.localStorage.getItem('uNome'),
                    login: $window.localStorage.getItem('uLogin'),
                    fotoPerfil: $window.localStorage.getItem('uFotoPerfil'),
                    permissoes: $window.localStorage.getItem('uPermis') != null ? $window.localStorage.getItem('uPermis').split(',') : null
                }
                return dto;
            },
            SetToken: function (_token) {
                $window.localStorage.setItem('token', 'bearer ' + _token);
            },
            SetUsuarioLogado(dto) {
                $window.localStorage.setItem('uID', dto.id);
                $window.localStorage.setItem('uIsAdmin', dto.isAdmin);
                $window.localStorage.setItem('uNome', dto.nome);
                $window.localStorage.setItem('uLogin', dto.login);
                $window.localStorage.setItem('uFotoPerfil', dto.fotoPerfil);

                $rootScope.usuarioLogado = this.GetUsuarioLogado();
            },
            SetPermissoes(permissoes) {
                $window.localStorage.setItem('uPermis', permissoes);
            },
            Logout: function () {
                $window.localStorage.removeItem('token');
                $window.localStorage.removeItem('uID');
                $window.localStorage.removeItem('uIsAdmin');
                $window.localStorage.removeItem('uNome');
                $window.localStorage.removeItem('uLogin');
                $window.localStorage.removeItem('uFotoPerfil');
                $window.localStorage.removeItem('uPermis');
            }
        }
    }]);