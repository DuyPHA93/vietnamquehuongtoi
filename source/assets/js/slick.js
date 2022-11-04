var Slick = function () {
    return {
        init: function() {
            $('.banner-home').slick({
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
                autoplay: true,
                autoplaySpeed: 7000,
                prevArrow: '<span class="arrow arrow-left"><i class="fa-solid fa-angle-left"></i></span>',
                nextArrow: '<span class="arrow arrow-right"><i class="fa-solid fa-chevron-right"></i></span>'
            });
        }
    }
}()