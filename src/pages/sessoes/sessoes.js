angular
    .module('app')
    .controller('sessoesCtrl', ['$scope', 'mensagemFactory', 'sessaoService',
        function ($scope, mensagemFactory, sessaoService) {
            $scope.sessoes = [];


            $scope.EncerrarSessao = function (u) {
                mensagemFactory.modal("Deseja realmente excluir a sessão do usuário <br/><b>" + u.nome + "</b>?", function () {
                    sessaoService.EncerrarSessao(u.id).then(function () {
                        mensagemFactory.sucesso('Sessão removida com sucesso!');
                        CarregarSessoes();
                    });
                })
            }

            function CarregarSessoes() {
                sessaoService.ObterUsuariosLogados().then(function (sessoes) {
                    $scope.sessoes = sessoes;
                });
            }
            function Init() {
                CarregarSessoes();
            }
            Init();
        }]);