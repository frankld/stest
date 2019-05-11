var toggler = document.querySelectorAll('.toggler');
var wh = document.documentElement.clientWidth;
var sidenav = document.getElementById('mySidenav');
var fixednav = document.querySelector('#fixed-nav');
var items = document.querySelectorAll('.nav-item');
var header = document.querySelectorAll('.menu-header');
var logo = document.getElementById('logo');
var letters = document.querySelectorAll('.logostagger');
var logotl = new TimelineMax({paused: true});
var menutl = new TimelineMax({paused: true});
var menuscrolltl = new TimelineMax({paused: true});
var sidenav = document.getElementById('mySidenav');
var rWork = document.querySelectorAll('.recentWork');
var rLink = document.querySelectorAll('.recentLink');
var rImage = document.querySelectorAll('.recentImage');
var rHeader = document.querySelectorAll('.pop');




mediumZoom('.single-image', {
    margin: 24,
    
});

mediumZoom('[data-zoomable]');

//MENU TIMELINE
// menutl.staggerFrom( header  , .4, { x: -100 , opacity: 0 , delay: .4 }, 0.1)
// .staggerFrom( items  , .4, { x: -100 , opacity: 0, delay: .4 }, 0.08 , .2);
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

// IMAGE OVERLAY
rImage.forEach(function(t , k) {
    t.addEventListener('mouseover',function(){
            TweenMax.to( this , .6 , { autoAlpha: 0.2 , ease: 'ease-in' } );
    });
    t.addEventListener('mouseout',function(){
        TweenMax.to( this , .8 , { autoAlpha: 1 , ease: 'ease-out' } );
    });
});

	// init controller
    var controller = new ScrollMagic.Controller();
    
    //tweens
    var hTween1 = new TweenMax.to('.sm-h-1', 1, {
        y:100
    });
    var hTween2 = new TweenMax.to('.sm-h-2', 1, {
        y:100
    });

    var hTween3 = new TweenMax.to('.dot-grid', 1, {
        x: 50
    });

    // dot-grid

    // intro scene
    var introScene = new ScrollMagic.Scene({
        duration: wh * 2
    }).setTween([hTween1, hTween3]);
    
    
    var recentScene = new ScrollMagic.Scene({
        triggerHook: "onEnter",
        offset: -350,
        duration: wh
    }).setTween(hTween2);
    
    
    

    var menuScene = new ScrollMagic.Scene({
        offset: 200
    });
    

    //MENU SCENE
    menuScene.on('enter', function(event){
        fixednav.classList.add("fixed-top" , "bg-white");
        fixednav.classList.remove("py-4" , "py-xl-5");
        TweenMax.fromTo( fixednav , .5 , {opacity:0}, {opacity:1});
        TweenMax.to( fixednav , .5, {boxShadow:"0px 0px 8px rgba(0,0,0,0.2)"});
        TweenMax.to("#content" , 0, {marginTop:"162px"});
    });
    menuScene.on('leave', function(event){
        fixednav.classList.remove("fixed-top" , "bg-white");
        fixednav.classList.add("py-4" , "py-xl-5");
        TweenMax.to("#content" , 0, {marginTop:"0px"});
        TweenMax.to( fixednav , .5, {boxShadow:"0px 0px 0px rgba(0,0,0,0)"});
    });

    
    controller.addScene([introScene,menuScene,recentScene ]);
