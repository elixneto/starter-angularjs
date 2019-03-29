angular
    .module('app')
    .controller('loginCtrl', ['$scope', '$rootScope', '$window', 'userLoginFactory', 'mensagemFactory', 'loginService', 'usuarioService',
        function ($scope, $rootScope, $window, userLoginFactory, mensagemFactory, loginService, usuarioService) {
            $scope.usuario = '';
            $scope.senha = '';

            $scope.Entrar = function () {
                if (!ValidarFormLogin())
                    return;

                var dto = {
                    user: $scope.usuario,
                    pass: $scope.senha
                };

                loginService.Token(dto).then(function (dados) {
                    userLoginFactory.SetToken(dados.token);

                    loginService.Permissoes(dados.id).then(function (permissoes) {
                        userLoginFactory.SetPermissoes(permissoes);
                        userLoginFactory.SetUsuarioLogado(dados);
                        $window.location.href = "#/home";
                    });
                }, function (httpError) {
                    if (httpError.status == 400)
                        mensagemFactory.erro(httpError.data);
                    else
                        mensagemFactory.erro('Credenciais inválidas!');
                });
            }

            $scope.EsqueciSenha = function () {
                if (!$scope.usuario) {
                    mensagemFactory.aviso('Informe o <b>Usuário</b> para prosseguir!');
                    return;
                }

                usuarioService.ObterPorLogin($scope.usuario).then(function (dados) {
                    if (dados.id == 0) {
                        mensagemFactory.aviso('O usuário <b>' + $scope.usuario + '</b> não foi encontrado!');
                        return;
                    }
                    if (!dados.email) {
                        mensagemFactory.aviso('O usuário <b>' + $scope.usuario + '</b> não possui email cadastrado! Contacte a administração do sistema');
                        return;
                    }

                    usuarioService.EnviarEmailEsqueciSenha(dados.id, $rootScope.globals.urlAmbiente).then(function () {
                        mensagemFactory.sucesso('Email enviado com sucesso para <b>' + dados.email + '</b>!');
                    });
                });
            }

            function ValidarFormLogin() {
                if ($scope.usuario.trim() == '' || $scope.senha.trim() == '') {
                    mensagemFactory.aviso('Informe o usuário e a senha!');
                    return false;
                } else
                    return true;
            }
        }]);