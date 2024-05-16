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

// Update ico on dark mode / light mode
lightSchemeIcon = document.querySelector('link#light-scheme-icon');
darkSchemeIcon = document.querySelector('link#dark-scheme-icon');

function onUpdate() {
    if (matcher.matches) {
      lightSchemeIcon.remove();
      document.head.append(darkSchemeIcon);
    } else {
      document.head.append(lightSchemeIcon);
      darkSchemeIcon.remove();
    }
  }
  
  matcher = window.matchMedia('(prefers-color-scheme: dark)');
  matcher.addListener(onUpdate);
  onUpdate();


const buttonWrapper = document.querySelector('.button-container');

buttonWrapper.addEventListener('mouseenter', function() {
    buttonWrapper.classList.remove('reset-transition');
    buttonWrapper.classList.add('hovered');
});

buttonWrapper.addEventListener('mouseleave', function() {
    buttonWrapper.classList.remove('hovered');
    buttonWrapper.classList.add('reset-transition');
});


// Get reference to the HR element and SVG
const hrLine = document.getElementById('hr-line');
const movingSVG = document.getElementById('moving-svg');

// Set the SVG's top position to match the HR's top position
movingSVG.style.top = hrLine.offsetTop + 'px';

// Update SVG's position when the window is resized
window.addEventListener('resize', function() {
    movingSVG.style.top = hrLine.offsetTop + 'px';
});