//burger

const iconMenu = document.querySelector('.header__menu-burger');
const closeBurger = document.querySelector('.header__menu-body');

if (iconMenu) {
    const menuBody = document.querySelector('.header__menu-body');

    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
    closeBurger.addEventListener('click', (e) => {
        if(e.target == closeBurger){
            menuBody.classList.toggle('_active');
            iconMenu.classList.toggle('_active');
        }
    });
}