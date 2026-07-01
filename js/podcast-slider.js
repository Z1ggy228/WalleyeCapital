
$(document).on('css_ready', function() {    
    $(document).ready(function() {
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