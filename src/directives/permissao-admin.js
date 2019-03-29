angular.module('app')
    .directive('permissaoAdmin', ['$http', '$rootScope', function ($http, $rootScope) {
        return {
            restrict: 'A',
            link: function ($scope, elm, attr) {
                elm.hide();

                var isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };
                var atualizaObjeto = function (v) {
                    if (!v)
                        if ($rootScope.usuarioLogado.isAdmin == 1)
                            elm.show()
                        else
                            elm.hide();
                }

                $scope.$watch(isLoading, function (v) {
                    atualizaObjeto(v);
                });
            }
        }
    }]);
