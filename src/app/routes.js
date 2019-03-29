app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "src/pages/home/home.html",
            controller: "homeCtrl",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app', cache: false, insertBefore: '#linkControllers',
                        files: [
                            // Services
                            'src/services/homeService.js',
                            // Controller
                            'src/pages/home/home.js'
                        ]
                    });
                }]
            }
        })
        .state('login', {
            url: "/login",
            templateUrl: "src/pages/login/login.html",
            controller: "loginCtrl",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app', cache: false, insertBefore: '#linkControllers',
                        files: [
                            // Services
                            'src/services/usuarioService.js',
                            'src/services/loginService.js',
                            // Controller
                            'src/pages/login/login.js'
                        ]
                    });
                }]
            }
        })
        .state('redefinir-senha', {
            url: "/redefinir-senha/{token}",
            templateUrl: "src/pages/redefinir-senha/redefinir-senha.html",
            controller: "redefinirSenhaCtrl",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app', cache: false, insertBefore: '#linkControllers',
                        files: [
                            // Services
                            'src/services/usuarioService.js',
                            // Controller
                            'src/pages/redefinir-senha/redefinir-senha.js'
                        ]
                    });
                }]
            }
        })
        .state('cadastros', {
            url: "/cadastros",
            templateUrl: "src/pages/cadastros/cadastros.html",
            controller: "cadastrosCtrl",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app', cache: false, insertBefore: '#linkControllers',
                        files: [
                            // Services
                            // Controller
                            'src/pages/cadastros/cadastros.js'
                        ]
                    });
                }]
            }
        })
        .state('cadastros-usuarios', {
            url: "/cadastros/usuarios",
            templateUrl: "src/pages/cadastros/usuarios/lista.html",
            controller: "usuariosCtrl",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app', cache: false, insertBefore: '#linkControllers',
                        files: [
                            // Services
                            'src/services/usuarioService.js',
                            // Controller
                            'src/pages/cadastros/usuarios/editar.js',
                            'src/pages/cadastros/usuarios/lista.js'
                        ]
                    });
                }]
            }
        })
        .state('cadastros-usuarios-criar', {
            url: "/cadastros/usuarios/criar",
            templateUrl: "src/pages/cadastros/usuarios/criar.html",
            controller: "usuariosCriarCtrl",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app', cache: false, insertBefore: '#linkControllers',
                        files: [
                            // Services
                            'src/services/usuarioService.js',
                            // Controller
                            'src/pages/cadastros/usuarios/criar.js'
                        ]
                    });
                }]
            }
        })
        .state('permissoes', {
            url: "/cadastros/permissoes",
            templateUrl: "src/pages/cadastros/permissoes/perfil-lista.html",
            controller: "perfilListaCtrl",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app', cache: false, insertBefore: '#linkControllers',
                        files: [
                            // Components
                            // Services
                            'src/services/usuarioService.js',
                            'src/services/funcionalidadeService.js',
                            'src/services/perfilService.js',
                            // Controller
                            'src/pages/cadastros/permissoes/perfil-editar.js',
                            'src/pages/cadastros/permissoes/perfil-usuarios.js',
                            'src/pages/cadastros/permissoes/perfil-lista.js'
                        ]
                    });
                }]
            }
        })
        .state('permissoes-criar', {
            url: "/cadastros/permissoes/criar",
            templateUrl: "src/pages/cadastros/permissoes/perfil-criar.html",
            controller: "perfilCriarCtrl",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app', cache: false, insertBefore: '#linkControllers',
                        files: [
                            // Components
                            // Services
                            'src/services/funcionalidadeService.js',
                            'src/services/perfilService.js',
                            // Controller
                            'src/pages/cadastros/permissoes/perfil-criar.js'
                        ]
                    });
                }]
            }
        })
        .state('sessoes', {
            url: "/sessoes",
            templateUrl: "src/pages/sessoes/sessoes.html",
            controller: "sessoesCtrl",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app', cache: false, insertBefore: '#linkControllers',
                        files: [
                            // Services
                            'src/services/sessaoService.js',
                            // Controller
                            'src/pages/sessoes/sessoes.js'
                        ]
                    });
                }]
            }
        })
}]);