import '../src/styles/style.css'

import { gsap } from 'gsap'

// import case_study from './case_study'

// import feature from './features/feature'



console.log('homepage.js is working')
// console.log(gsap)

// alert('Local')


// case_study.js test
// Home - Load Animation - Case Studies
var case_study_tl = gsap.timeline({ defaults: { ease: 'power1.inOut'} })

function init(){
  case_study_tl
    //#f7f7f2 is light beige. #f7dcdc is light pink.
    .from("html", {opacity:0, duration: 0, autoAlpha: 0}, 'case_study_tl')
    .from('.proj', { backgroundColor: '#f7f7f2', opacity: 0, duration: 1}, '<')
    .from('.project_title', { yPercent: 60, duration: .9 }, 'case_study_tl+=.4')
    .from('.project_title', { opacity: 0, duration: .7 }, 'case_study_tl+=.4')
    .from('.project_hero_image', { yPercent: 20, duration: .8 }, 'case_study_tl+=.5')
    .from('.project_hero_image', { opacity: 0, duration: .9 }, 'case_study_tl+=.6')
    .from('.project_body_section', { opacity: 0, duration: 1.2 }, 'case_study_tl+=.6')
}

//addressing the Flash of unstyled content issue.
window.addEventListener("load", function(event) { 
  init(); //do stuff
  // GSDevTools.create({animation:tl})
  });


/*
//removing as test
var home_tl = gsap.timeline({ defaults: { ease: 'power1.inOut'} })
//autoAlpha below is for the Flash of Unstyled Content issue.

function init(){
  home_tl
    .from("html", {opacity:0, duration: 0, autoAlpha:0}, 'home_start')
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
  
*/

  export default homepage
