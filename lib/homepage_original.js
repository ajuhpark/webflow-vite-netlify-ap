import '../src/styles/style.css'

import { gsap } from 'gsap'

import barba from '@barba/core';

import barbaCss from '@barba/css';
barba.use(barbaCss);




// import case_study from './case_study'
// import feature from './features/feature'

// function homepage() {

  console.log('homepage.js is working')
  console.log(barba)

  // console.log(gsap)
  // alert('Local')

  var home_tl = gsap.timeline({ defaults: { ease: 'power1.inOut'} })
  //autoAlpha below is for the Flash of Unstyled Content issue.

  function init(){
    home_tl
      .from("html", {duration: 0, autoAlpha:0}, 'home_start')
      //#f7f7f2 is light beige. #f7dcdc is light pink.
      .from('Body', { backgroundColor: '#f7dcdc', opacity: 0, duration: 0.4 }, '<')
      .from('.home_icon', { yPercent: 110, duration: 1 }, 'home_start+=.3')
      .from('.home_icon', { opacity: 0, duration: .8 }, 'home_start+=.6')
      .from('.home_icon_f1', { yPercent: 110, duration: 1 }, 'home_start+=.3')
      .from('.home_icon_f1', { opacity: 0, duration: .8 }, 'home_start+=.6')
      .from('.home_icon_f2', { yPercent: 110, duration: 1 }, 'home_start+=.3')
      .from('.home_icon_f2', { opacity: 0, duration: .8 }, 'home_start+=.6')
      .from('.home_name', { yPercent: 110, duration: .7 }, 'home_start+=.4' )
      .from('.home_name', { opacity: 0, duration: .9 }, 'home_start+=.4' )
      .from('.home_position', { yPercent: 110, duration: .7 }, 'home_start+=.4' )
      .from('.home_position', { opacity: 0, duration: .9 }, 'home_start+=.4' )
      .from('.cs_component_container_1', { yPercent: 10, duration: 1.2 }, 'home_start+=.2' )
      .from('.cs_component_container_1', { opacity: 0, duration: 1.7 }, 'home_start+=.1' )
  }

  //addressing the Flash of unstyled content issue.
  window.addEventListener("load", function(event) { 
    init(); //do stuff
    // GSDevTools.create({animation:tl})
    });

// }

//barba.init from course
barba.init({
  transitions: [
    {
      // it's a hook that's called once. It happens once on the page load.
      once(){

      }
    }
  ]
})

/* original barba from youtube tutorial

// Function to add and remove the page transition screen
function pageTransition() {

  var home_transition_tl = gsap.timeline();
  home_transition_tl
    .to('.transition_li', {duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2})
    .to('.transition_li', {duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1})
}


function contentAnimation() {
  var contentAnimation_tl = gsap.timeline();
  // contentAnimation_tl.from('.left', { duration: 1.5, translateY: 50, opacity: 0})
  contentAnimation_tl.to('.project_hero_image', { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}) //, "-=1.1"
}




barba.init({
  //sync is so we can use hooks to create leave animations and other animations.
  sync: true,

  transitions: [{
    async leave(data) {
      const done = this.async();
      
      pageTransition();
      await delay(1500);
      done();

    },

    async enter(data){
      contentAnimation();
    },

    async once(data){
      contentAnimation();
    }
  }]

});
*/

export default homepage
