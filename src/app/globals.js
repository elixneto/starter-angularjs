app.run(['$rootScope', function ($rootScope) {
    $rootScope.globals.pathAtual = '';
    $rootScope.globals.hideMenu = false;

    $rootScope.usuarioLogado = {};
}]);