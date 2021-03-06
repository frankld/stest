var toggler = document.querySelectorAll('.toggler');
var wh = document.documentElement.clientWidth;
var sidenav = document.getElementById('mySidenav');
var fixednav = document.querySelector('#fixed-nav');
var items = document.querySelectorAll('.nav-item');
var header = document.querySelectorAll('.menu-header');
var logo = document.getElementById('logo');
var letters = document.querySelectorAll('.logostagger');
var logotl = new TimelineMax({ paused: true });
var menutl = new TimelineMax({ paused: true });
var menuscrolltl = new TimelineMax({ paused: true });
var sidenav = document.getElementById('mySidenav');
var recentWrap = document.querySelectorAll('.recentWrap');
var rHeader = document.querySelectorAll('.pop');




mediumZoom('.single-image', {
    margin: 24,

});

mediumZoom('[data-zoomable]');

//MENU TIMELINE
// menutl.staggerFrom( header  , .4, { x: -100 , opacity: 0 , delay: .4 }, 0.1)
// .staggerFrom( items  , .4, { x: -100 , opacity: 0, delay: .4 }, 0.08 , .2);
// LOGO TIMELINE
logotl.staggerTo(letters, .3, { y: "-=5px" }, 0.05);
// TOGGLER
toggler.forEach(function (t, k) {
    t.addEventListener("mousedown", function () {
        if (k === 0) {
            menutl.restart();
            TweenMax.to(sidenav, .4, { autoAlpha: 1, ease: 'ease-in' });
            TweenMax.to(sidenav, .4, { x: '200', ease: Power2.easeOut });
        }
        else {
            menutl.reverse();
            TweenMax.to(sidenav, .5, { autoAlpha: 0, delay: .6 });
            TweenMax.to(sidenav, 1, { x: "-200", delay: .6, ease: Power4.easeIn });
        }
    });
});

$('#logo').hover(function () {
    logotl.play();
},
    function () {
        logotl.reverse();
    }
);

// IMAGE OVERLAY
recentWrap.forEach(function (t, k) {
    t.addEventListener('mouseover', function () {
        let image = this.querySelectorAll('.recentImage');
        TweenMax.to(this.lastElementChild, .6, { autoAlpha: 1, ease: 'ease-in' });
        TweenMax.to(this.firstElementChild, .6, { autoAlpha: 0.2, ease: 'ease-in' });
        TweenMax.to(image, .6, { scale: 1.1, ease: 'ease-in' });

    });
    t.addEventListener('mouseout', function () {
        let image = this.querySelectorAll('.recentImage');
        TweenMax.to(this.lastElementChild, .6, { autoAlpha: 0, ease: 'ease-in' });
        TweenMax.to(this.firstElementChild, .8, { autoAlpha: 1, ease: 'ease-out' });
        TweenMax.to(image, .6, { scale: 1, ease: 'ease-in' });
    });
});

// init controller
var controller = new ScrollMagic.Controller();

//tweens



// dot-grid



// intro scene



// FEATURED 1

var recent = document.querySelectorAll('.recent_section');


recent.forEach(function (value) {
    let rtl = new TimelineMax();
    rtl.from(value.querySelectorAll(".recent_text"), .5, { y: 30, autoAlpha: 0, ease: 'ease-in' })
        .from(value.querySelectorAll(".recent_img"), .5, { y: 30, autoAlpha: 0, ease: 'ease-in' }, -0.2);
    new ScrollMagic.Scene({
        triggerElement: value,
    })
        .setTween(rtl)
        .addTo(controller);
});


for (var i = 0; i < recent.length; i++) {


}






var menuScene = new ScrollMagic.Scene({
    offset: '200'
});



//MENU SCENE
menuScene.on('enter', function (event) {
    fixednav.classList.add("fixed-top", "bg-white");
    fixednav.classList.remove("py-4", "py-xl-5");
    TweenMax.fromTo(fixednav, .5, { opacity: 0 }, { opacity: 1 });
    TweenMax.to("#content", 0, { marginTop: "200px" });
    TweenMax.to(fixednav, 0, { boxShadow: "0px 0px 8px rgba(0,0,0,0.2)", height: "8vh" });
});
menuScene.on('leave', function (event) {
    fixednav.classList.remove("fixed-top", "bg-white");
    TweenMax.to("#content", 0, { marginTop: "0px" });
    TweenMax.to(fixednav, 0, { boxShadow: "0px 0px 0px rgba(0,0,0,0)", height: "20vh" });
});


controller.addScene(menuScene);

