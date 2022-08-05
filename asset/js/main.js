export function categoryMobileMenu() {
    const buttons = document.querySelectorAll('.category-btn-toggle'),
        buttonClose = document.querySelector('#navigation-close'),
        menu = document.querySelector('#page-wrapper-main-header-container-left'),
        menuContent = document.querySelector('.page-wrapper-main-header-container-left-content');

    if (buttons.length && buttonClose) {
        for (let i = 0; i < buttons.length; i++) {
            buttons.item(i).addEventListener('click', function (e) {
                e.stopPropagation();
                menu.classList.add('open');
                menu.classList.remove('close');
            });
        }
        buttonClose.addEventListener('click', function () {
            menu.classList.add('close');
            menu.classList.remove('open');
        });
        menu.addEventListener('click', function () {
            menu.classList.add('close');
            menu.classList.remove('open');
        });
        menuContent.addEventListener('click', event => event.stopPropagation());
    }
}

export function categoryMobileToggle() {
    const sub_menus = document.querySelectorAll('.navigation-sub-menu,.navigation-sub-menu_');

    for (let i = 0; i < sub_menus.length; i++) {
        const __sub_menu = sub_menus.item(i),
            __sub_menu_btn = __sub_menu.previousElementSibling,
            add_icon = __sub_menu_btn.querySelector('.icon-add'),
            sub_icon = __sub_menu_btn.querySelector('.icon-sub'),
            query = matchMedia('(max-width:992px)');

        if (__sub_menu_btn) {
            __sub_menu_btn.addEventListener('click', function (e) {
                if (query.matches) {
                    e.preventDefault();
                    if (__sub_menu.style.display === "" || __sub_menu.style.display === "none") {
                        __sub_menu.style.display = "block";
                        add_icon.style.display = "none";
                        sub_icon.style.display = "block";
                    } else {
                        __sub_menu.style.display = "none";
                        add_icon.style.display = "block";
                        sub_icon.style.display = "none";
                    }
                }
            });
        }

    }

}

export function authFixedNavBar() {
    const nav = document.getElementById('page-wrapper-header'),
        query = matchMedia('(max-width:992px)');
    fixedNavBarAction();
    window.onscroll = () => {
        fixedNavBarAction();
    }

    function fixedNavBarAction() {
        if (!query.matches) {
            if (document.documentElement.scrollTop < 116) {
                if (nav.classList.contains('fixed')) nav.classList.remove('fixed');
            } else {
                if (!nav.classList.contains('fixed')) nav.classList.add('fixed');
            }
        }
    }
}

categoryMobileMenu();
categoryMobileToggle();
authFixedNavBar();