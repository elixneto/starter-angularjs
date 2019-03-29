'use strict';

angular
    .module('app')
    .factory('mensagemFactory', ['swangular', function (swangular) {
        return {
            sucesso: function (mensagem) {
                //toastr.success(mensagem);
                swangular.swal({ html: mensagem, type: 'success' });
            },
            info: function (mensagem) {
                //toastr.info(mensagem);
                swangular.swal({ html: mensagem, type: 'info' });
            },
            aviso: function (mensagem) {
                //toastr.warning(mensagem);
                swangular.swal({ html: mensagem, type: 'warning' });
            },
            erro: function (mensagem) {
                //toastr.error(mensagem);
                swangular.swal({ html: mensagem, type: 'error' });
            },
            modal: function (mensagem, callbackOk, callbackCancelar) {
                swangular.swal({
                    html: mensagem,
                    showCancelButton: true,
                    confirmButtonText: 'Sim',
                    cancelButtonText: 'Cancelar'
                }).then(result => {
                    if (result.value) {
                        if (callbackOk != null)
                            callbackOk();
                    }
                    else
                        if (callbackCancelar != null)
                            callbackCancelar();
                });
            }
        }
    }]);