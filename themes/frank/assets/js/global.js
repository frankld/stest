
$(document).ready(function(){

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