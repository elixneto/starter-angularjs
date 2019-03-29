angular
    .module('app')
    .controller('redefinirSenhaCtrl', ['$scope', '$window', '$stateParams', 'mensagemFactory', 'usuarioService',
        function ($scope, $window, $stateParams, mensagemFactory, usuarioService) {
            var token = $stateParams.token;
            $scope.novaSenha = '';
            $scope.novaSenhaRepetir = '';

            $scope.Salvar = function () {
                if (!$scope.novaSenha) {
                    mensagemFactory.aviso('Informe a <b>nova senha</b>!');
                    return;
                }
                if (!$scope.novaSenhaRepetir) {
                    mensagemFactory.aviso('Confirme a <b>nova senha</b>!');
                    return;
                }
                if ($scope.novaSenha.length < 6) {
                    mensagemFactory.aviso('A senha deve conter no mínimo <b>6</b> caracteres!');
                    return;
                }
                if ($scope.novaSenha != $scope.novaSenhaRepetir) {
                    mensagemFactory.aviso('As senhas informadas não são iguais!');
                    return;
                }

                var dto = {
                    novaSenha: $scope.novaSenha,
                    novaSenhaRepetir: $scope.novaSenhaRepetir,
                    token: token
                };

                usuarioService.RedefinirSenha(dto).then(function () {
                    mensagemFactory.sucesso("Senha alterada com sucesso!");
                    $window.location.href = "#/login";
                }, function () /* ERROR */ {
                    $window.location.href = "#/login";
                });
            }

            function Init() {
                usuarioService.UtilizarURLTokenRedefinirSenha(token).then(function (response) { },
                    function () /* ERROR */ {
                        $window.location.href = "#/login";
                    });
            }
            Init();
        }]);