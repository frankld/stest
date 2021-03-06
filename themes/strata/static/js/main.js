$(document).ready(function(){

    let options = {
        elements: ['#swup']
    };
    const swup = new Swup(options);
    
    mediumZoom('.single-image', {
        margin: 24
    })
    
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


    swup.on('contentReplaced', function () {

        mediumZoom('.single-image', {
            margin: 24
        })
        
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

    });

});