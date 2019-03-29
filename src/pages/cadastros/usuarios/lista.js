angular
    .module('app')
    .controller('usuariosCtrl', ['$scope', 'mensagemFactory', 'usuarioService',
        function ($scope, mensagemFactory, usuarioService) {
            $scope.editarUsuarioID = 0;
            $scope.flagAbrirModalEditar = false;

            $scope.usuarios = [];
            $scope.total = 0;
            $scope._pag = {
                paginaAtual: 1,
                quantidade: 25
            };
            $scope.filtro = {
                id: null,
                login: '',
                nome: '',
                situacao: 0
            }

            $scope.PaginarDados = function () {
                $scope.usuarios = [];
                usuarioService.ObterTodos($scope._pag.paginaAtual, $scope._pag.quantidade, angular.copy($scope.filtro)).then(function (resp) {
                    $scope.usuarios = resp.dados;
                    $scope.total = resp.total;
                });
            }
            $scope.LimparFiltro = function () {
                $scope.filtro = {
                    id: null,
                    login: '',
                    nome: ''
                }
            }

            /* INATIVAR USUARIO */
            $scope.AbrirModalInativarUsuario = function (usuario) {
                $scope.inativarUsuario = usuario;
                $('#modalInativarUsuario').modal('show');
            }
            $scope.InativarUsuario = function () {
                usuarioService.Inativar($scope.inativarUsuario.id).then(function () {
                    $scope.PaginarDados();
                    $('#modalInativarUsuario').modal('hide');
                    mensagemFactory.sucesso('Usuário bloqueado com sucesso!');
                });
            }

            /* ATIVAR USUARIO */
            $scope.AbrirModalAtivarUsuario = function (usuario) {
                $scope.ativarUsuario = usuario;
                $('#modalAtivarUsuario').modal('show');
            }
            $scope.AtivarUsuario = function () {
                usuarioService.Ativar($scope.ativarUsuario.id).then(function () {
                    $scope.PaginarDados();
                    $('#modalAtivarUsuario').modal('hide');
                    mensagemFactory.sucesso('Usuário desbloqueado com sucesso!');
                });
            }

            /* EDITAR USUARIO */
            $scope.AbrirModalEditarUsuario = function (usuarioID) {
                $scope.editarUsuarioID = usuarioID;
                $scope.flagAbrirModalEditar = true;

                $('#modalEditarUsuario').modal('show');
            }
            $scope.FecharModalEditarUsuario = function () {
                $scope.PaginarDados();
                $scope.flagAbrirModalEditar = false;
                $('#modalEditarUsuario').modal('hide');
            }

            /* EXCLUIR USUARIO */



            function Init() {
                $scope.PaginarDados();
            };
            Init();
        }]);