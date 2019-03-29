app.run(["$rootScope", "$state", "$location", function ($rootScope, $state, $location) {
    $rootScope.$on('$stateChangeStart', function () {
        // LIMPA CONTROLLERS
        $('#linkControllers').html('');

        const path = $location.path().split('/')[1];
        $rootScope.globals.pathAtual = path;

        // ESCONDE E MOSTRA O MENU (Navbar e Sidebar)
        if (path == 'login' || path.startsWith('redefinir-senha'))
            $rootScope.globals.hideMenu = true;
        else
            $rootScope.globals.hideMenu = false;
    });
}]);