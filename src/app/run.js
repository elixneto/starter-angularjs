app.run(['$rootScope', 'userLoginFactory', function ($rootScope, userLoginFactory) {
    $rootScope.usuarioLogado = userLoginFactory.GetUsuarioLogado();
}]);

// Global Functions...
function PreviewImage(elementHTML, files) {
    if (files && files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) { elementHTML.src = e.target.result; }
        reader.readAsDataURL(files[0]);
    }
}