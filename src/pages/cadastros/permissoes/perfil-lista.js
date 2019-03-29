angular
    .module('app')
    .controller('perfilListaCtrl', ['$scope', 'perfilService', function ($scope, perfilService) {
        $scope.perfis = [];

        $scope.editarUsuariosPerfilID = 0;
        $scope.editarPerfilID = 0;
        $scope.flagAbrirModalEditarUsuarios = false;
        $scope.flagAbrirModalEditarPerfil = false;

        $scope.total = 0;
        $scope._pag = {
            paginaAtual: 1,
            quantidade: 25
        };
        $scope.filtro = {
            id: null,
            nome: '',
            descricao: ''
        };


        /* EDITAR PERFIL */
        $scope.AbrirModalEditarPerfil = function (perfilID) {
            $scope.editarPerfilID = perfilID;

            $('#modalEditarPerfil').modal('show');
            $scope.flagAbrirModalEditarPerfil = true;
        }
        $scope.FecharModalEditarPerfil = function () {
            $scope.flagAbrirModalEditarPerfil = false;
            $('#modalEditarPerfil').modal('hide');
            $scope.PaginarDados();
        }


        /* EDITAR USUARIOS */
        $scope.AbrirModalEditarUsuarios = function (perfilID) {
            $scope.editarUsuariosPerfilID = perfilID;

            $('#modalEditarUsuarios').modal('show');
            $scope.flagAbrirModalEditarUsuarios = true;
        }
        $scope.FecharModalEditarUsuarios = function () {
            $scope.flagAbrirModalEditarUsuarios = false;
            $('#modalEditarUsuarios').modal('hide');
            $scope.PaginarDados();
        }



        $scope.PaginarDados = function () {
            $scope.perrfis = [];
            perfilService.ObterTodos($scope._pag.paginaAtual, $scope._pag.quantidade, angular.copy($scope.filtro)).then(function (resp) {
                $scope.perfis = resp.dados;
                $scope.total = resp.total;
            });
        }
        $scope.LimparFiltro = function () {
            $scope.filtro = {
                id: null,
                nome: '',
                descricao: ''
            };
        }



        function Init() {
            $scope.PaginarDados();
        }
        Init();
    }]);