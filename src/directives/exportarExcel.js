angular
    .module('app')
    .directive('exportarExcel', [function () {
        return {
            restrict: 'A',
            link: function (scope, elm, attr) {
                elm.on('click', function(){
                    var blob = new Blob(['<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">' + document.getElementById('export').innerHTML], {
                        type: "data:application/vnd.ms-excel;charset=UTF-8"
                    });
                    saveAs(blob, attr["exportarExcel"]+".xls");
                });
            }
        }
    }]);