$(document).ready(function() {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open_f')) {
            $(this).removeClass('open_f');
            $(this).next().fadeOut(1000);
        } else {
            $('.select__head').removeClass('open_f');
            $('.select__list').fadeOut();
            $(this).addClass('open_f');
            $(this).next().fadeIn(1000);
        }
    });
    $(document).ready(function(){
        $("#links").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
            top = $(id).offset().top;

            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open_f');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
    $('.title_btn').click(function () {
        $('.popup').addClass('show').hide().fadeIn(1000);
        $('.popup_close').click(function () {
            $('.popup').fadeOut(1000)
        })
    })

    if(window.screen.width <= 425 ){
        $('.autopark_arrow').click(function(e) {
            e.preventDefault()
            $('.autopark_cars').slideToggle(5000)
            if ($('.autopark_arrow').hasClass('open')) {
                $('.autopark_arrow').removeClass('open')
                
            } else {
                $('.autopark_arrow').addClass('open')
            }
        })
    }
    else {
        $('.autopark_second').hide()
        $('.autopark_arrow').click(function(e) {
            e.preventDefault()
            $('.autopark_second').slideToggle(2000)
            if ($('.autopark_arrow').hasClass('open')) {
                $('.autopark_arrow').removeClass('open')
            } else {
                $('.autopark_arrow').addClass('open')
            }
    })
    }
    $('.autopark_btn').click(function () { 
            $('.car_card:hover .front').css('transform', 'rotateY(180deg)')
            $('.car_card:hover .back').css('transform', 'rotateY(360deg)')
    });
    $('.back').click(function () { 
        $('.car_card:hover .front').css('transform', 'rotateY(360deg)')
        $('.car_card:hover .back').css('transform', 'rotateY(180deg)')
    })
    if(window.screen.width <= 991 ){
        $('.autopark_arrow_two').click(function(e) {
            e.preventDefault()
            $('.license_block').slideToggle(5000)
            if ($('.autopark_arrow_two').hasClass('open')) {
                $('.autopark_arrow_two').removeClass('open')
                
            } else {
                $('.autopark_arrow_two').addClass('open')
            }
        })
    }
})