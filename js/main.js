$(document).ready(function() {
    $addCorrectClassesForAfspraakButton();
});

$(window).on('resize', function() {
    $addCorrectClassesForAfspraakButton();
})

$addCorrectClassesForAfspraakButton = function() {
    if($(window).width() > 992) {
        $('#afspraakbutton').addClass('fill');
        $('#afspraaka').removeClass('underline');
        $('#afspraakbutton').removeClass('hide_button');
    } else{
        $('#afspraaka').addClass('underline');
        $('#afspraakbutton').addClass('hide_button');
        $('#afspraakbutton').removeClass('fill');
    }
}