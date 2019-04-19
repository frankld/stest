let toggler = document.querySelectorAll('.toggler');
let sidenav = document.getElementById('mySidenav');
let items = document.querySelectorAll('.nav-item');
let header = document.querySelectorAll('.menu-header');
let logo = document.getElementById('logo');
let letters = document.querySelectorAll('.logostagger');

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
    var logotl = new TimelineMax({paused: true});
    logotl.staggerTo( letters  , .3, { y: "-=5px" }, 0.05);

    $('#logo').hover(function(){
            logotl.play();
        },
        function(){
            logotl.reverse();
        }
    );
