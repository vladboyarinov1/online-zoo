const iconMenu = document.querySelector('.header__menu-burger');

if (iconMenu) {
    const menuBody = document.querySelector('.header__menu-body');

    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
//Modal

const modalTrigger  = document.querySelectorAll('.testimonials__slide'),
      modal = document.querySelector('.testimonials__modal'),
      modalCloseBtn = document.querySelector('.testimonials__modal__body__close'),
      bodyBlur = document.querySelector('body');
     
modalTrigger.forEach(click => {
    click.addEventListener('click', () => {
        modal.classList.add('show');
        modal.classList.remove('hide');
        bodyBlur.classList.add('_blur')
    });
});

    modalCloseBtn.addEventListener('click', () => {
        modal.classList.add('hide');
        modal.classList.remove('show');
        bodyBlur.classList.remove('_blur')
});

modal.addEventListener('click', (e) => {
    if(e.target == modal){
        modal.classList.add('hide');
        modal.classList.remove('show');
        bodyBlur.classList.remove('_blur');
    }
});


const swiper = new Swiper('.swiper-container', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable:true,
    },
    grabCursor:true,
    breakpoints:{
       
        1001:{
            slidesPerView:4,
        },
        1000:{
            slidesPerView:3,
        },
    },
    loop:true,

  });
