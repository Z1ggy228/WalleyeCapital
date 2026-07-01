$(document).ready(function() {
    let triggered = false;
    let h = $(window).height();
    
    $(window).resize(function(){
        h = $(window).height();
    })

    $('.s4 .nav > p, .icon').mouseenter(function(e) {
        var dataID = $(this).data('id');
        $('.s4 .nav > p, .s4 .content > div').removeClass('sel');

        $('.s4 .nav > p[data-id="' + dataID + '"]').addClass('sel');
        $('.s4 .content > div[data-id="' + dataID + '"]').addClass('sel');

        $('.icon').attr("class", "icon");
        $('.icon[data-id="' + dataID + '"]').attr("class", "icon sel");
    });

    window.addEventListener('scroll', function() {
        const st = $(window).scrollTop();
        const offset = $('.numbers-wrapper').offset().top;
        const secHeight = $('.numbers-wrapper').outerHeight(true);
        const secBottom = secHeight + offset;
        
        if (st + h >= secBottom && triggered == false) {
            triggered = true;
            
            $('.count').each(function() {
                let $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                {
                    duration: 2500,
                    easing: 'swing',
                    step: function() {
                        if (countTo % 1 == 0) {
                            $this.text(Math.floor(this.countNum));
                        } else {
                            $this.text(Math.round(this.countNum * 10)/10);
                        }
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    });
});

// Carousel
$(document).on("css_ready",function(a) {
    $(document).ready(function() {
        $('.insights-slider').slick({
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 1,
            // variableWidth: true,
            speed: 1000,
            arrows: true,
            prevArrow: $('.arrow-prev'),
            nextArrow: $('.arrow-next'),
            responsive: [
                {
                  breakpoint: 1100,
                  settings: {
                    slidesToShow: 1,
                    variableWidth: false
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    variableWidth: false
                  }
                }
            ]
        });

        var flkty = new Flickity('.publications-wrapper', {
            cellAlign: 'left',
            contain: true,
            draggable: false,
            groupCells: true,
            prevNextButtons: false,
            pageDots: false
        });

        if ($(window).width() <= 768 ){
            flkty.destroy();
        } else {
            flkty.reloadCells();
        }

        $('.slider-btn.--next-btn').on('click', function(){
            flkty.next();
        })

        $('.slider-btn.--prev-btn').on('click', function(){
            flkty.previous();
        })
    });
});
