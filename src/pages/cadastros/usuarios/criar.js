angular
    .module('app')
    .controller('usuariosCriarCtrl', ['$rootScope', '$scope', '$window', 'mensagemFactory', 'usuarioService',
        function ($rootScope, $scope, $window, mensagemFactory, usuarioService) {
            $scope.novo = {};

            $scope.cidadeCombo = {
                selecionado: null,
                lista: [{ id: 1, nome: 'Campo Grande' }]
            };

            $scope.imgProfile = $rootScope.globals.urlImages + 'camera_profile.jpg';
            $scope.imgProfileUpload = null;

            $scope.EscolherFotoPerfil = function (files) {
                if (files && files.length) {
                    $scope.imgProfileUpload = files[0];
                    PreviewImage(document.getElementById('imgProfile'), files);
                }
            }



            $scope.Salvar = function () {
                if ($scope.cidadeCombo.selecionado != null)
                    $scope.novo.cidadeID = angular.copy($scope.cidadeCombo.selecionado.id);

                usuarioService.Criar($scope.novo).then(function (novoUsuario) {
                    usuarioService.UploadImagemPerfil(novoUsuario.id, $scope.imgProfileUpload).then(function (res) {
                        $window.location.href = "#/cadastros/usuarios";
                        mensagemFactory.sucesso('Usuário cadastrado com sucesso!');
                    });
                });
            }

            function Init() {
                $scope.cidadeCombo.selecionado = angular.copy($scope.cidadeCombo.lista[0]);
            };
            Init();
        }]);