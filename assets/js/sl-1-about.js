var swiper = new Swiper('.sl-1-about-container', {
    loop:true,
    slidesPerView: 5,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.4,
            spaceBetween: 15
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        // when window width is >= 640px
        990: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 5,
            spaceBetween: 20
        }
    },
    navigation: {
        nextEl: '.sl-1-about-button-next',
        prevEl: '.sl-1-about-button-prev',
    },

});