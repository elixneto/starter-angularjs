var sidebarVisible = false;

function sidebarOpen() {
    var toggleButton = document.getElementsByClassName('navbar-toggler')[0];
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function () {
        toggleButton.classList.add('toggled');
    }, 500);

    body.classList.add('nav-open');

    sidebarVisible = true;
};
function sidebarClose() {
    var toggleButton = document.getElementsByClassName('navbar-toggler')[0];
    const body = document.getElementsByTagName('body')[0];
    toggleButton.classList.remove('toggled');

    body.classList.remove('nav-open');

    sidebarVisible = false;
    var overlay = document.getElementsByClassName('close-layer')[0];
    overlay.classList.remove('visible');
};
function sidebarToggle() {
    var $toggle = document.getElementsByClassName('navbar-toggler')[0];

    if (sidebarVisible === false) {
        this.sidebarOpen();
    } else {
        this.sidebarClose();
    }
    const body = document.getElementsByTagName('body')[0];

    if (this.mobile_menu_visible == 1) {
        // $('html').removeClass('nav-open');
        body.classList.remove('nav-open');
        if ($layer) {
            $layer.remove();
        }
        setTimeout(function () {
            $toggle.classList.remove('toggled');
        }, 400);

        this.mobile_menu_visible = 0;
    } else {
        setTimeout(function () {
            $toggle.classList.add('toggled');
        }, 430);

        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');


        if (body.querySelectorAll('.main-panel')) {
            document.getElementsByClassName('main-panel')[0].appendChild($layer);
        } else if (body.classList.contains('off-canvas-sidebar')) {
            document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
        }

        setTimeout(function () {
            $layer.classList.add('visible');
        }, 100);

        $layer.onclick = function () { //asign a function
            body.classList.remove('nav-open');
            this.mobile_menu_visible = 0;
            $layer.classList.remove('visible');
            setTimeout(function () {
                $layer.remove();
                $toggle.classList.remove('toggled');
            }, 400);
        }.bind(this);

        body.classList.add('nav-open');
        this.mobile_menu_visible = 1;
    }
};