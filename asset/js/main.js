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

categoryMobileMenu();