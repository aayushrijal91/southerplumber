// AOS.init({ duration: 1500 });

document.querySelectorAll('a[href="#form"], a[href="#todays-offer"], a[href="#services"], a[href="#about-us"], a[href="#how-it-works"], a[href="#why-us"], a[href="#faqs"]').forEach(function (anchor) {
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
    responsive: [
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: false,
            }
        }
    ]
});

if($(window).width() < 540) {
    $('#serviceSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        autoplay: true,
    })
}

$('.accordion-head').on('click', function(e) {
    e.preventDefault();

    $('.accordion-card').removeClass('active');
    $(this).parents('.accordion-card').addClass('active');
    $('.accordion-body').slideUp();
    $(this).parents('.accordion-card').find('.accordion-body').slideToggle();
});

function validateForm() {
    let phoneInput = $('#phoneNumber').val();
    let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if(!re.test(phoneInput)) {
        $('#phoneError').fadeIn();

        return false;
    } else {
        $('#phoneError').fadeOut();
    }

    return true;
}

$("#mainForm").on('submit', function () {
    return validateForm();
});