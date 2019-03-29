angular
    .module('app')
    .controller('perfilUsuariosCtrl', ['$scope', 'mensagemFactory', 'usuarioService', 'perfilService',
        function ($scope, mensagemFactory, usuarioService, perfilService) {
            $scope.perfilUsuarioID = 0;
            $scope.perfil = {};

            $scope.usuarioCombo = {
                selecionado: null,
                lista: []
            };


            $scope.IncluirUsuario = function () {
                var usuarios = [];
                usuarios.push($scope.usuarioCombo.selecionado.id);

                perfilService.IncluirUsuarios($scope.perfilUsuarioID, usuarios).then(function () {
                    $scope.usuarioCombo.selecionado = null;
                    ObterInfoPerfil();
                    mensagemFactory.sucesso("Usuário adicionado com sucesso!");
                });
            };

            $scope.ExcluirUsuario = function (usuarioID) {
                var usuarios = [];
                usuarios.push(usuarioID);

                perfilService.ExcluirUsuarios($scope.perfilUsuarioID, usuarios).then(function () {
                    $scope.usuarioCombo.selecionado = null;
                    ObterInfoPerfil();
                    mensagemFactory.sucesso("Usuário removido com sucesso!");
                });
            };



            function ObterInfoPerfil() {
                perfilService.Obter($scope.perfilUsuarioID).then(function (perfil) {
                    $scope.perfil = perfil;

                    usuarioService.ObterCombo().then(function (usuarios) {
                        $scope.usuarioCombo.lista = [];
                        
                        usuarios.forEach(function (u) {
                            var achou = false;
                            $scope.perfil.usuarios.forEach(function (perfilUsuario) {
                                if (perfilUsuario.id == u.id) {
                                    achou = true;
                                    return false;
                                }
                            });
                            if (!achou)
                                $scope.usuarioCombo.lista.push(u);
                        });
                    });
                });
            }

            $scope.InitPerfil = function () {
                ObterInfoPerfil();
            };
            $scope.InitPerfil();
        }]);