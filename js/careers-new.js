
$(document).on('css_ready', function() {    
    $(document).ready(function() {
        $('.careers-popup-anchor').on('click', function(e) {
            e.preventDefault();
            $('#careers-popup, .overlay').fadeIn('slow');
        });

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
                $('.s3n .slide').addClass('next-slide').removeClass('current-slide prev-slide');
                $('.s3n .slide:last-child').addClass('prev-slide').removeClass('current-slide next-slide');
                $('.s3n .slide:first-child').addClass('current-slide');
            } else if (i === $('.s3n .slide').length - 1) {
                $('.s3n .slide').addClass('prev-slide').removeClass('current-slide next-slide');
                $('.s3n .slide:first-child').addClass('next-slide').removeClass('prev-slide current-slide');
                $('.s3n .slide:last-child').addClass('current-slide')
            } else {
                $('.s3n .slide').each(function(index){ 
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
        })
    });
});