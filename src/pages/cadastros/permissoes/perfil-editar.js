angular
    .module('app')
    .controller('perfilEditarCtrl', ['$scope', '$window', 'mensagemFactory', 'perfilService', 'funcionalidadeService', 'ivhTreeviewBfs', 'ivhTreeviewMgr',
        function ($scope, $window, mensagemFactory, perfilService, funcionalidadeService, ivhTreeviewBfs, ivhTreeviewMgr) {
            $scope.perfilEditarID = 0;
            $scope.editar = {
                nome: '',
                descricao: '',
                funcionalidades: []
            };
            $scope.bagFuncionalidades = [];



            $scope.Salvar = function () {
                if (!$scope.editar.nome) {
                    mensagemFactory.aviso('Informe o <b>Nome</b> do Perfil');
                    return;
                }
                if (!$scope.editar.descricao) {
                    mensagemFactory.aviso('Informe a <b>Descrição</b> do Perfil');
                    return;
                }

                // Obtendo permissões selecionadas...
                $scope.editar.funcionalidades = [];
                ivhTreeviewBfs($scope.bagFuncionalidades, function (node) {
                    if (node.children.length > 0) {
                        node.children.forEach(function (f) {
                            if (f.selected)
                                $scope.editar.funcionalidades.push(f.value);
                        });
                    }
                });

                if ($scope.editar.funcionalidades.length == 0) {
                    mensagemFactory.aviso('Informe as <b>Funcionalidades</b> do Perfil');
                    return;
                }

                perfilService.Editar($scope.editar).then(function () {
                    mensagemFactory.sucesso('Perfil editado com sucesso!');
                });
            }



            $scope.Init = function () {
                perfilService.Obter($scope.perfilEditarID).then(function (perfil) {
                    $scope.editar = perfil;

                    // Funcionalidades...
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

                        ivhTreeviewBfs($scope.bagFuncionalidades, function (node) {
                            $scope.editar.funcionalidades.forEach(function (f) {
                                if (f == node.value)
                                    node.selected = true;
                            });
                        });
                        ivhTreeviewMgr.validate($scope.bagFuncionalidades, false);
                    });
                });
            };
            $scope.Init();
        }]);