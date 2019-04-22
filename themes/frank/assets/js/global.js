var toggler = document.querySelectorAll('.toggler');
var sidenav = document.getElementById('mySidenav');
var items = document.querySelectorAll('.nav-item');
var header = document.querySelectorAll('.menu-header');
var logo = document.getElementById('logo');
var letters = document.querySelectorAll('.logostagger');
var logotl = new TimelineMax({paused: true});
var menutl = new TimelineMax({paused: true});
var sidenav = document.getElementById('mySidenav');
var rWork = document.querySelectorAll('.recentWork');
var rLink = document.querySelectorAll('.recentLink');
var rImage = document.querySelectorAll('.recentImage');
//MENU TIMELINE
menutl.staggerFrom( header  , .4, { x: -100 , opacity: 0 , delay: .4 }, 0.1)
.staggerFrom( items  , .4, { x: -100 , opacity: 0, delay: .4 }, 0.08 , .2);
// LOGO TIMELINE
logotl.staggerTo( letters  , .3, { y: "-=5px" }, 0.05);
// TOGGLER
toggler.forEach(function(t , k) {
t.addEventListener("mousedown", function(){ 
        if (k === 0) {
            menutl.restart();
            TweenMax.to( sidenav , .4 , { autoAlpha: 1 , ease: 'ease-in' } );
            TweenMax.to( sidenav , .4 , { x: '200' , ease: Power2.easeOut  } );
        }
        else {
            menutl.reverse();
            TweenMax.to( sidenav , .5 , {autoAlpha: 0, delay: .6 } );
            TweenMax.to( sidenav , 1 , { x: "-200", delay: .6, ease: Power4.easeIn } );
        }
     });
});

$('#logo').hover(function(){
        logotl.play();
    },
    function(){
        logotl.reverse();
    }
);


rImage.forEach(function(t , k) {
    t.addEventListener('mouseover',function(){
        let nodes = [].slice.apply(rLink);
        nodes.splice(k , 1 );
        console.dir(nodes);
            TweenMax.to( nodes , .6 , { autoAlpha: 0.2 , ease: 'ease-in' } );
    });
    t.addEventListener('mouseout',function(){
        let nodes = [].slice.apply(rLink);
        nodes.splice(k , 1 );
        console.dir(nodes);
        TweenMax.to( nodes , .8 , { autoAlpha: 1 , ease: 'ease-out' } );
    });
});


