'use strict';

var app = angular.module("app", [
    "ngAria",
    "ngAnimate",
    "ngSanitize",
    "ngMessages",
    "ui.router",
    "angular-chartist",
    "oc.lazyLoad",
    "swangular",
    "ui.bootstrap",
    "ui.select",
    "ngFileUpload",
    "ng-nestable",
    "ui.mask",
    "ngMaterial",
    "ui.utils.masks",
    "ngCountup",
    "ivh.treeview",
    "tooltips"
]);

app.config(['$mdDateLocaleProvider', 'ivhTreeviewOptionsProvider', function ($mdDateLocaleProvider, ivhTreeviewOptionsProvider) {
    ivhTreeviewOptionsProvider.set({
        defaultSelectedState: false,
        validate: true,
        // Twisties can be images, custom html, or plain text
        twistieCollapsedTpl: '&#9205;',
        twistieExpandedTpl: '&#9207',
        twistieLeafTpl: '&#8226;'
    });

    // Datepicker Properties...
    $mdDateLocaleProvider.months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outurbro', 'Novembro', 'Dezembro'];
    $mdDateLocaleProvider.shortMonths = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    $mdDateLocaleProvider.days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    $mdDateLocaleProvider.shortDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    $mdDateLocaleProvider.formatDate = function (date) { return date ? moment(date).format('DD/MM/YYYY') : ''; };
    $mdDateLocaleProvider.parseDate = function (dateString) {
        var m = moment(dateString, 'DD/MM/YYYY', true);
        return m.isValid() ? m.toDate() : new Date(NaN);
    };
}]);