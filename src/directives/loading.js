angular
    .module('app')
    .directive('loading', ['$http', '$timeout', function ($http, $timeout) {
        return {
            restrict: 'E',
            replace: true,
            template: '<div id="divPreloader" style="display: none; z-index: 10051; top: 0; position: fixed; left: 0; background: rgba(255, 255, 255, 0.7); width: 100%; height: 100%;"><div class="page-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>',
            link: function (scope, elm, attr) {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0 && $http.pendingRequests[0].url.indexOf('QHealthMonitor/ObterRecursoMaquina') == -1;
                };
                scope.$watch(scope.isLoading, function (v) {
                    if (v) {
                        elm.show();
                    } else {
                        elm.hide();
                    }
                });
            }
        }
    }]);