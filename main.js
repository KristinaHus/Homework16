$(document).ready(function() {
    $('#onClick').click(function() {
        $('#clickMe').toggle('slow');
    });

    $('#onHover').hover(function() {
        $('#hoverMe').toggle('slow');
    });

    $('#modalWindowBtn').click(function(event) {
        event.stopPropagation();
        $('body').addClass('bg-grey');
        $('#modalWindow').css('display', 'block');
    });

    $('#modalWindow').on('click', function(event) {
        event.stopPropagation();
    });

    $('body, .fa-times').on('click', function() {
        if ($('body.bg-grey')) {
            $('body').removeClass('bg-grey');
            $('#modalWindow').css('display', 'none');
        }
    });
});