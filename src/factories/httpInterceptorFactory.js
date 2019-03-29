angular
    .module('app')
    .factory('httpInterceptorFactory', ['$injector', '$q', '$rootScope', '$window', 'userLoginFactory', function ($injector, $q, $rootScope, $window, userLoginFactory) {
        let sessionInjector = {
            request: function (config) {
                if (config.url != $rootScope.globals.urlApiToken) {
                    // Setting token into headers...
                    config.headers['Authorization'] = userLoginFactory.GetToken();

                    //Removing cache from GET...
                    if (config.method == 'GET' && config.url.startsWith($rootScope.globals.urlApi)) {
                        var separator = config.url.indexOf('?') === -1 ? '?' : '&';
                        config.url = config.url + separator + 'noCache=' + new Date().getTime();
                    }
                }

                if (config.beforeSend) {
                    config.beforeSend();
                }

                return config;
            },
            response: function (response) {
                if (response.config.complete)
                    response.config.complete(response);
                return response;
            },
            responseError: function (response) {
                let mensagemFactory = $injector.get('mensagemFactory');
                if (response.status == -1 && !response.config.url.startsWith($rootScope.globals.urlApiToken)) {
                    mensagemFactory.erro('Servidor sem resposta!');
                } else
                    // Sessão expirada...
                    if (response.status == 401) {
                        //mensagemFactory.aviso('Sessão encerrada!');
                        userLoginFactory.Logout();
                        $window.location.href="#/login";
                    }

                // Bad Request
                if (response.status == 400) {
                    mensagemFactory.erro(response.data);
                }

                // Sem permissão...
                if (response.status == 403) {
                    mensagemFactory.erro('Não possui acesso!');
                }

                // Internal Server Error
                if (response.status == 500) {
                    mensagemFactory.erro(response.data.ExceptionMessage);
                }


                return $q.reject(response);
            }
        };
        return sessionInjector;
    }]);