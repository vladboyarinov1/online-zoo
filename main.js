

//slider Pets
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


const SwiperPets = new Swiper('.pets__swiper-container', {
    navigation:{
        nextEl:'.pets__swiper-button-prev',
        prevEl:'.pets__swiper-button-next',
    },
    scrollbar: false,
    grabCursor:true,
    breakpoints:{
       
        1001:{
            slidesPerView:1,
        },
        1000:{
            slidesPerView:1,
        },
    },
    loop:true,
    speed: 2000,

});

//slider Testimonials

const swiper = new Swiper('.testimonials__container', {
    scrollbar: {
        el: '.testimonials__swiper-scrollbar',
        draggable:true,
    },
    navigation:false,
    grabCursor:true,
    breakpoints:{
       
        1001:{
            slidesPerView:4,
        },
        1000:{
            slidesPerView:3,
        },
    },
    loop:false,
    speed: 2000,

});







  
