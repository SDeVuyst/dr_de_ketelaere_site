const animationDuration = 2000; // in milliseconds

function snailRoute() {
    var image = document.querySelector('.slak-image');
    var snail = document.querySelector('.slak');
    
    var imageRect = image.getBoundingClientRect();
    var snailRect = snail.getBoundingClientRect();

    function crawlLeftToRight() {

        snail.style.transitionDuration = animationDuration + "ms";
        snail.style.transform = "translateX(" + imageRect.width + "px)";
        
        snail.addEventListener('transitionend', async function(event) {
            // Check if the transition property that ended is the one you're interested in
            if (event.propertyName === 'transform') {
                snail.style.transitionDuration = animationDuration/4 + "ms";
                snail.style.transform = "translateX(" + imageRect.width + "px) rotate(90deg)";
                setTimeout(crawlTopToBottom, animationDuration/4 + 20)
            }   

        });
   
    }

    function crawlRightToLeft() {

        snail.style.transform = "translateX(" + -snailRect.width +"px) translateY(" + (imageRect.height + snailRect.width) + "px) rotate(180deg)"

        snail.addEventListener('transitionend', async function(event) {
            // Check if the transition property that ended is the one you're interested in
            if (event.propertyName === 'transform') {
                snail.style.transitionDuration = animationDuration/4 + "ms";
                snail.style.transform = "translateX(" + -snailRect.width +"px) translateY(" + (imageRect.height + snailRect.width) + "px) rotate(270deg)"                // setTimeout(crawlTopToBottom, animationDuration/4 + 20)
                setTimeout(crawlBottomToTop, animationDuration/4 + 20)
            }   

        });
   
    }

    function crawlTopToBottom() {
        snail.style.transitionDuration = animationDuration + "ms";

        snail.style.transform = "translateY(" + (imageRect.width + snailRect.width) + "px) translateX(" + imageRect.height + "px) rotate(90deg)"
        snail.addEventListener('transitionend', function(event) {
            // Check if the transition property that ended is the one you're interested in
            if (event.propertyName === 'transform') {
                snail.style.transitionDuration = animationDuration/4 + "ms";
                snail.style.transform = "translateY(" + (imageRect.width + snailRect.width) + "px) translateX(" + imageRect.height + "px) rotate(180deg)"
                setTimeout(crawlRightToLeft, animationDuration/4 + 20)
            }
        });
    }

    function crawlBottomToTop() {
        snail.style.transitionDuration = animationDuration + "ms";

        snail.style.transform = "translateX(" + -snailRect.width +"px) rotate(270deg)"
        snail.addEventListener('transitionend', function(event) {
            // Check if the transition property that ended is the one you're interested in
            if (event.propertyName === 'transform') {
                snail.style.transitionDuration = animationDuration/4 + "ms";
                snail.style.transform = "translateX(" + -snailRect.width +"px) rotate(360deg)"
                setTimeout(resetCycle, animationDuration/4 + 20)
            }
        });
    }

    function resetCycle() {
        snail.style.transitionDuration = "0ms";
        snail.style.transform = "translateX(" + -snailRect.width +"px)"
        
        setTimeout(crawlLeftToRight, animationDuration/4);

    }

    console.log("called")
    crawlLeftToRight();
};


document.addEventListener("DOMContentLoaded", function(event) {
    snailRoute()
});

window.addEventListener('resize', function(event) {
    snail.style.transitionDuration = "0ms";
    snail.style.transform = "";

    snailRoute();
})


function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleep(fn, ...args) {
    await timeout(3000);
    return fn(...args);
}