angular
    .module('app')
    .controller('perfilCriarCtrl', ['$scope', '$window', 'mensagemFactory', 'perfilService', 'funcionalidadeService', 'ivhTreeviewBfs',
        function ($scope, $window, mensagemFactory, perfilService, funcionalidadeService, ivhTreeviewBfs ) {
            $scope.novo = {
                nome: '',
                descricao: '',
                funcionalidades: []
            };
            $scope.bagFuncionalidades = [];



            $scope.Salvar = function () {
                if (!$scope.novo.nome) {
                    mensagemFactory.aviso('Informe o <b>Nome</b> do Perfil');
                    return;
                }
                if (!$scope.novo.descricao) {
                    mensagemFactory.aviso('Informe a <b>Descrição</b> do Perfil');
                    return;
                }

                // Obtendo permissões selecionadas...
                $scope.novo.funcionalidades = [];
                ivhTreeviewBfs($scope.bagFuncionalidades, function (node) {
                    if (node.children.length > 0) {
                        node.children.forEach(function(f){
                            if(f.selected)
                                $scope.novo.funcionalidades.push(f.value);
                        });
                    }
                });

                if ($scope.novo.funcionalidades.length == 0) {
                    mensagemFactory.aviso('Informe as <b>Funcionalidades</b> do Perfil');
                    return;
                }

                perfilService.Criar($scope.novo).then(function (novoPerfil) {
                    $window.location.href = "#/cadastros/permissoes";
                    mensagemFactory.sucesso('Perfil cadastrado com sucesso!');
                });
            }



            function Init() {
                funcionalidadeService.ObterHierarquia(1).then(function (funcionalidades) {
                    $scope.bagFuncionalidades = [];
                    funcionalidades.forEach(function (f) {
                        var funcPai = {
                            label: f.nomeWeb,
                            value: f.id,
                            children: []
                        };
                        f.filhos.forEach(function (f2) {
                            var funcFilho = {
                                label: f2.nomeWeb,
                                value: f2.id,
                                children: []
                            };
                            funcPai.children.push(funcFilho);
                        });
                        $scope.bagFuncionalidades.push(funcPai);
                    });
                });
            };
            Init();
        }]);