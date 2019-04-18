
$(document).ready(function(){

    $('.js-tilt').tilt({
        maxTilt:        10,
        perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        scale:          1.03,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          900,    // Speed of the enter/exit transition.
        transition:     true,   // Set a transition on enter/exit.
        disableAxis:    null,   // What axis should be disabled. Can be X or Y.
        reset:          false,   // If the tilt effect has to be reset on exit.
        glare:          false,  // Enables glare effect
        maxGlare:       1       // From 0 - 1.
    })
        
    $('.js-tilt-lg').tilt({
        maxTilt:        10,
        perspective:    3000,   // Transform perspective, the lower the more extreme the tilt gets.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        scale:          1.01,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          900,    // Speed of the enter/exit transition.
        transition:     true,   // Set a transition on enter/exit.
        disableAxis:    null,   // What axis should be disabled. Can be X or Y.
        reset:          false,   // If the tilt effect has to be reset on exit.
        glare:          false,  // Enables glare effect
        maxGlare:       1       // From 0 - 1.
    })


let toggler = document.querySelectorAll('.toggler');
let sidenav = document.getElementById('mySidenav');
let items = document.querySelectorAll('.nav-item');
let header = document.querySelectorAll('.menu-header');

    TweenMax.to( '.navitems' , 1, { x:'200px' } );
    toggler.forEach(function(t , k) {
        t.addEventListener("mousedown", function(){ 
            sidenav.classList.toggle('menu-active');
            if (k === 0) {
                TweenMax.staggerFrom( header  , .5, { x: -100 , opacity: 0 , delay: .4 }, 0.1);
                TweenMax.staggerFrom( items  , .5, { x: -100 , opacity: 0, delay: .5 }, 0.08);
            }
            else {
                TweenMax.staggerFrom( header  , .1, { x: -100 , opacity: 0 }, 0.1);
                TweenMax.staggerFrom( items  , .1, { x: -100 , opacity: 0 }, 0.08);
            }
         });
    });


    
});