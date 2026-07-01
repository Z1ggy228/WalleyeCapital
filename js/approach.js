$(document).ready(function() {
    $('.s3 .nav > div').mouseenter(function(e) {
        var dataID = $(this).data('id');
        $('.s3 .nav > div, .s3 .graph > img, .s4 > .container').removeClass('sel');

        $('.s3 .nav > div[data-id="' + dataID + '"]').addClass('sel');
        $('.s3 .graph > img[data-id="' + dataID + '"]').addClass('sel');
        $('.s4 > .container[data-id="' + dataID + '"]').addClass('sel');
    });
});
