$(document).ready(function () {
    // Contact forms -> POST to the local mail backend (server.py),
    // which emails the submission to support@wallevegroup.co via SMTP.
    function submitContact(e) {
        e.preventDefault();
        var $form = $(this);
        var $resp = $form.siblings('.response');
        var $btn = $form.find('button[type="submit"]');
        $btn.prop('disabled', true);
        $.post("/api/contact", $form.serialize())
            .done(function (r) {
                $form.trigger("reset");
                var msg = (r && r.message) ? r.message : "Thank you — your message has been sent.";
                $resp.css('color', '#1351BC').html(msg).stop(true, true).show();
            })
            .fail(function (xhr) {
                var msg = (xhr.responseJSON && xhr.responseJSON.message) ||
                          "Sorry, we couldn't send your message. Please email support@wallevegroup.co directly.";
                $resp.css('color', '#c0392b').html(msg).stop(true, true).show();
            })
            .always(function () {
                $btn.prop('disabled', false);
                $resp.delay(9000).fadeOut(300);
            });
    }
    $("#contactForm_new1").on("submit", submitContact);
    $("#contactForm_new2").on("submit", submitContact);

    window.addEventListener('scroll', function() {
        const st = $(window).scrollTop();
        const anchor = $('.locations-anchor');
        if (!anchor.length) return;
        const offset = anchor.offset().top;
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
    if (!activeDiv.length) return;
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
        if ($(".s4nb").length) {
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

            $('.slider-btn.--next-btn').on('click', function(){ flkty.next(); })
            $('.slider-btn.--prev-btn').on('click', function(){ flkty.previous(); });
        }
    });
});
