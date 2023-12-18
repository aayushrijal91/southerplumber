// AOS.init({ duration: 1500 });

document.querySelectorAll('a[href="#form"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(window).on('scroll', () => {
    if ($(this).scrollTop() >= 600) {
        $('#return-to-top').fadeIn(300);
    } else {
        $('#return-to-top').fadeOut(300);
    }
});

$('#return-to-top').on('click', () => {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});

$('.partnersSlider').slick({
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1,
    arrows: false,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    draggable: false,
});

$('.accordion-head').on('click', function(e) {
    e.preventDefault();

    $('.accordion-card').removeClass('active');
    $(this).parents('.accordion-card').addClass('active');
    $('.accordion-body').slideUp();
    $(this).parents('.accordion-card').find('.accordion-body').slideToggle();
})