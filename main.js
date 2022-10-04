const iconMenu = document.querySelector('.header__menu-burger');

if (iconMenu) {
    const menuBody = document.querySelector('.header__menu-body');

    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}



