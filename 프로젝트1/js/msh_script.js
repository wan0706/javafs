// 캐러셀 옵션
$(function () {
    const carousel_slider = $('.bxSlider').bxSlider({
        pager: false,
        controls: false,
        slideWidth: 220,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 20,
        touchEnabled: false,
        infiniteLoop: true
    });

    // 이전 버튼
    $('.carousel_prev').click(function (e) {
        e.preventDefault();
        carousel_slider.goToPrevSlide();
        return false;
    });
    // 이후 버튼
    $('.carousel_next').click(function (e) {
        e.preventDefault();
        carousel_slider.goToNextSlide();
        return false;
    });
});