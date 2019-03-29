angular
    .module('app')
    .controller('usuariosEditarCtrl', ['$rootScope', '$scope', 'mensagemFactory', 'usuarioService',
        function ($rootScope, $scope, mensagemFactory, usuarioService) {
            $scope.usuarioID = 0;
            $scope.editar = {};

            $scope.cidadeCombo = {
                selecionado: null,
                lista: [{ id: 1, nome: 'Campo Grande' }]
            };

            // $scope.imgProfile = $rootScope.globals.urlImages + 'camera_profile.jpg';
            $scope.imgProfileUpload = null;

            $scope.EscolherFotoPerfil = function (files) {
                if (files && files.length) {
                    $scope.imgProfileUpload = files[0];
                    PreviewImage(document.getElementById('imgProfile'), files);
                }
            }



            $scope.Salvar = function () {
                // CIDADE...
                if ($scope.cidadeCombo.selecionado != null)
                    $scope.editar.cidadeID = angular.copy($scope.cidadeCombo.selecionado.id);
                else
                    $scope.editar.cidadeID = null;

                usuarioService.Editar($scope.editar).then(function () {
                    if ($scope.imgProfileUpload != null) {
                        usuarioService.UploadImagemPerfil($scope.editar.id, $scope.imgProfileUpload).then(function (res) {
                            $scope.FecharModalEditarUsuario();
                            mensagemFactory.sucesso('Usuário alterado com sucesso!');
                        });
                    }
                    else {
                        $scope.FecharModalEditarUsuario();
                        mensagemFactory.sucesso('Usuário alterado com sucesso!');
                    }
                });
            }

            $scope.Init = function () {
                $scope.cidadeCombo.selecionado = angular.copy($scope.cidadeCombo.lista[0]);
                
                usuarioService.Obter($scope.usuarioID).then(function (dados) {
                    $scope.editar = dados;

                    // Foto do Perfil...
                    if ($scope.editar.fotoPerfil == null)
                        $scope.editar.fotoPerfil = $rootScope.globals.urlImages + 'camera_profile.jpg';
                    else
                        $scope.editar.fotoPerfil = $rootScope.globals.urlImages + dados.fotoPerfil;

                    // Cidade...
                    if ($scope.editar.cidadeID != null)
                        $scope.cidadeCombo.lista.forEach(element => {
                            if (element.id == $scope.editar.cidadeID) {
                                $scope.cidadeCombo.selecionado = element;
                                return false;
                            }
                        });
                });
            };
            $scope.Init();
        }]);