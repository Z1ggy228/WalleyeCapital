$(document).ready(function () {
    // Form
    $("#contactForm_new1").on("submit", function (e) {
        e.preventDefault();
        var that = $(this);
        var data = $(this).serialize();

        var recaptcha = $("#contactForm_new1 #g-recaptcha-response").val();
        if (recaptcha === "") {
            e.preventDefault();
            alert("Please check the recaptcha");
            return;
        }
        
        $.post("", data).done(function (r) {
            that.trigger("reset");
            $(".response").html(r);
            $('.response').delay(9000).fadeOut(300);
        });
    });

    $("#contactForm_new2").on("submit", function (e) {
        e.preventDefault();
        var that = $(this);
        var data = $(this).serialize();

        var recaptcha = $("#contactForm_new2 #g-recaptcha-response").val();
        if (recaptcha === "") {
            e.preventDefault();
            alert("Please check the recaptcha");
            return;
        }
        
        $.post("", data).done(function (r) {
            that.trigger("reset");
            $(".response").html(r);
            $('.response').delay(9000).fadeOut(300);
        });
    });

    window.addEventListener('scroll', function() {
        const st = $(window).scrollTop();
        const offset = $('.locations-anchor').offset().top;
        const halfWindowHeight = $(window).height() * .5;

        if (st + $(window).height() >= offset && $(window).width() > 1100) {
            $('.locations-anchor > div').each(function(){
                const itemBegin = $(this).offset().top;
                const itemHeight = $(this).outerHeight(true);
                const itemEnd = itemBegin + itemHeight;
                const labelOffset = itemHeight * .5;
    
                if (
                    (st + halfWindowHeight - labelOffset >= itemBegin) && 
                    (st + halfWindowHeight - labelOffset < itemEnd)
                ) {
                    $(this).addClass('active').siblings().removeClass('active');
                    updateLocationClass();
                }
            })
        }
    });
});

var lastActiveClass = "";

function updateLocationClass() {
    var activeDiv = $("#locations > .container > div.active");
    var classList = activeDiv.attr("class").split(" ");
    var currentClass = "";
    for (var i = 0; i < classList.length; i++) {
        if (classList[i] !== "active") {
            currentClass = classList[i];
            break; 
        }
    }
    if (currentClass !== "") {
        $("#locations").removeClass(lastActiveClass).addClass(currentClass);
        lastActiveClass = currentClass;
    }
}


$(document).on('css_ready', function() {    
    $(document).ready(function() {
        
		if($(".s4nb").length)
		{
        var flkty = new Flickity('.careers-slider', {
            cellAlign: 'center',
            initialIndex: 1,
            draggable: false,
            pageDots: true,
            wrapAround: true,
            prevNextButtons: false
        });

        flkty.on('change', function(i) {
            if (i === 0) {
                $('.s4nb .slide').addClass('next-slide').removeClass('current-slide prev-slide');
                $('.s4nb .slide:last-child').addClass('prev-slide').removeClass('current-slide next-slide');
                $('.s4nb .slide:first-child').addClass('current-slide');
            } else if (i === $('.s4nb .slide').length - 1) {
                $('.s4nb .slide').addClass('prev-slide').removeClass('current-slide next-slide');
                $('.s4nb .slide:first-child').addClass('next-slide').removeClass('prev-slide current-slide');
                $('.s4nb .slide:last-child').addClass('current-slide')
            } else {
                $('.s4nb .slide').each(function(index){ 
                    if (i > index) {
                        $(this).addClass('prev-slide').removeClass('next-slide current-slide')
                    } else if (i < index) {
                        $(this).addClass('next-slide').removeClass('prev-slide current-slide');
                    } else if (i === index) {
                        $(this).addClass('current-slide');
                    }
                })
            }
        })

        flkty.select(0);

        $('.slider-btn.--next-btn').on('click', function(){
            flkty.next();
        })

        $('.slider-btn.--prev-btn').on('click', function(){
            flkty.previous();
        });

        // FIX: Flickity locks in the viewport height at init — before the slide
        // images have loaded — leaving this block collapsed (height 0). It only
        // self-corrects on a resize event (e.g. when DevTools opens). Recalculate
        // as soon as the images are actually loaded.
        (function () {
            var $imgs = $('.careers-slider img');
            var pending = $imgs.length;
            function done() { if (--pending <= 0) flkty.resize(); }
            if (!pending) { flkty.resize(); }
            else {
                $imgs.each(function () {
                    if (this.complete) { done(); }
                    else { $(this).on('load error', done); }
                });
            }
            $(window).on('load', function () { flkty.resize(); }); // safety net
        })();
     }
    });
    
});