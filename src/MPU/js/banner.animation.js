'use strict';




/**
 * Run the animation functions.
 */
Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = [
    'images/logo.svg'
  ];

  var _this = this;
  this.preloadImages(this.images, function () {
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
  });
};

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function () {
  TweenLite.to('.preloader', 0.5, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function () {

  var backgroundScale = new TimelineMax()
  backgroundScale.to(".background", 7, {
    scale: 1.2,
    transformOrigin:"50% 50%",
    ease: Power1.easeOut
  })

  var copyTl = new TimelineMax()
  copyTl.from(".copy1a", 0.8, {
    opacity: 0,
    ease: Power4.easeOut
  })
  copyTl.from(".copy1b", 0.8, {
    opacity: 0,
    ease: Power4.easeOut
  })
  copyTl.from(".copy1c", 0.8, {
    opacity: 0,
    ease: Power4.easeOut
  })
  copyTl.to(".copyone", 0.8, {
    opacity: 0,
    delay: 1,
  })
  copyTl.from(".copy2a", 1.2, {
    opacity: 0,
    x: -3,
    delay: 0,
    ease: Expo.easeOut
  })
  copyTl.from(".subheading", 0.8, {
    opacity: 0,
    x: -3,
    delay: -0.8,
    ease: Expo.easeOut
  })

  copyTl.to(".copy2a", 0.8, {
    opacity: 0,
    delay: 1,
    x: 3,
    ease: Expo.easeOut
  })
  copyTl.from(".copy2b", 0.8, {
    opacity: 0,
    delay: -0.3,
    ease: Power4.easeOut
  })
  copyTl.to(".copy2b", 0.8, {
    opacity: 0,
    delay: 1,
    x: 3,
    ease: Expo.easeOut
  })
  copyTl.from(".copy2c", 0.8, {
    opacity: 0,
    delay: -0.3,
    ease: Power4.easeOut
  })
  copyTl.to(".copy2c", 0.8, {
    opacity: 0,
    delay: 1,
    x: 3,
    ease: Expo.easeOut
  })
  copyTl.to(".subheading", 0.8, {
    opacity: 0,
    delay: -0.8,
    ease: Expo.easeOut
  })
  copyTl.from(".copy3", 2, {
    opacity: 0,
    ease:Expo.easeOut
  })



  var cta = new TimelineMax()
  cta.from(".cta", 0.5, {
    opacity: 0,
  })

  var outro = new TimelineMax()
  outro.to(".outro", 2, {
    opacity:0,
    delay:0.8,
    ease:Expo.easeOut
  })
  outro.to(".background", 2, {
    delay:-2,
    scale: 1,
    transformOrigin:"50% 50%",
    ease:Expo.easeOut
  })

  var loops = 0;
  var maxLoops = 1;
  var masterTimeline = new TimelineMax({
    repeat: maxLoops
  });
  masterTimeline
   .add(backgroundScale, 0.5)
   .add(copyTl, 0.2 )
   .add(cta, 3)
  

.call(function () {
  if (loops === maxLoops) {
    masterTimeline.pause();
  }
  loops++;
})
.add(outro)



  var ctahov = document.querySelector(".banner");
  ctahov.onmouseover = function () {
    TweenLite.to(".cta", 0.77, {
      ease: Back.easeOut,
      scale:1.02,
      y: -2
    });
  };
  ctahov.onmouseout = function () {
    TweenLite.to(".cta", 0.77, {
      ease: Back.easeOut,
      scale:1,
      y: 0
    });
  };




// Replay code if needed 

  // var replayhov = document.querySelector(".replay");
  // replayhov.onmouseover = function () {
  //   TweenLite.to(".replay", 0.77, {
  //     rotation: -90,
  //     ease: Expo.easeOut
  //   });
  // };
  // replayhov.onmouseout = function () {
  //   TweenLite.to(".replay", 0.77, {
  //     ease: Back.easeOut,
  //     rotation: 0,
  //     ease: Expo.easeOut
  //   });
  // };

  // document.getElementById("replay").onclick = function() {
  //   masterTimeline.restart();
  // }

 

};