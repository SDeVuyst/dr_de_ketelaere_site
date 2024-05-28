$(document).ready(function() {
    $addCorrectClassesForAfspraakButton();
    $addbpoints();
    $resizeMap();
});

$(window).on('resize', function() {
    $addCorrectClassesForAfspraakButton();
    $addbpoints();
    $resizeMap();
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

$addbpoints = function() {
    if ($(window).width() > 992) {
        $(".bpoint").each(function() {
            $(this).removeClass("w-100");
        })
    } else {
        $(".bpoint").each(function() {
            $(this).addClass("w-100");
        })
    }   
}

$resizeMap = function() {
    if ($(window).width() > 992) {
        $("#map").removeClass("full-width");
    } else {
        $("#map").addClass("full-width");
    }   
}

const buttonWrapper = document.querySelector('.button-container');

buttonWrapper.addEventListener('mouseenter', function() {
    buttonWrapper.classList.remove('reset-transition');
    buttonWrapper.classList.add('hovered');
});

buttonWrapper.addEventListener('mouseleave', function() {
    buttonWrapper.classList.remove('hovered');
    buttonWrapper.classList.add('reset-transition');
});
