$(function(){
    
    var swiper = new Swiper(".bannerSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000,
        },
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        // centeredSlides: true,
        breakpoints: {
            600: {
            slidesPerView: 3, 
            spaceBetween: 20,
            },
            
            768: {
            slidesPerView: 4, 
            spaceBetween: 20,
            },
            1024: {
            slidesPerView: 5,
            spaceBetween: 20,
            },
        },
      });

    $(".main_swiper .swiper_button .swiper-button-stop").on("click", function(){
        swiper.autoplay.stop();
    });

    $(".main_swiper")
});