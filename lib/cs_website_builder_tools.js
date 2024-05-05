import '../src/styles/style.css'

import { gsap } from 'gsap'

import barba from '@barba/core';

import case_study from './case_study'


// import feature from './features/feature'

function cs_website_builder_tools() {
  console.log('cs_website_builder_tools.js is working')
  // console.log(gsap)
  
  // Home - Load Animation - Case Studies
  var cs_website_builder_tools_tl = gsap.timeline({ defaults: { ease: 'power1.inOut'} })
  
  function init(){
    cs_website_builder_tools_tl
      //#f7f7f2 is light beige. #f7dcdc is light pink.
      .from("html", {duration: 0, autoAlpha: 0}, 'cs_website_builder_tools_tl')
      //.from('.proj', {duration: 0, autoAlpha: 0}, 'cs_website_builder_tools_tl')
      .from('.proj', { backgroundColor: '#f7f7f2', opacity: 0, duration: 1}, '<')
      .from('.project_title', { yPercent: 60, duration: .9 }, 'cs_website_builder_tools_tl+=.4')
      .from('.project_title', { opacity: 0, duration: .7 }, 'cs_website_builder_tools_tl+=.4')
      .from('.project_hero_image', { yPercent: 20, duration: .8 }, 'cs_website_builder_tools_tl+=.7')
      .from('.project_hero_image', { opacity: 0, duration: 1 }, 'cs_website_builder_tools_tl+=.9')
      .from('.project_body_section', { opacity: 0, duration: 1.2 }, 'cs_website_builder_tools_tl+=.9')
  }
  
  // addressing the Flash of unstyled content issue.
  //window.addEventListener("load", function(event) { 
    init(); //do stuff
    // GSDevTools.create({animation:tl})
  //  });
  
}

// barba.init({
//   transitions: [
//     {name: 'clip',
//     // if we want both containers in the dom at the same time for 
//     // clip-path animation, we have to put in sync: true.
//       sync: true, 
//     // we're going to the 'clip' namespace, the one that's the 
//     // namespace for the container in homepage.
//     to:{
//       namespace: ['clip']
//     },
//     // when you leave the page, the clip class will be added to 
//     // the container of current page
//     leave() {
//       console.log('running leave')
//     },
//     beforeEnter(){
//       console.log('running beforeEnter')
//     },
//     // when it enters next page, we're going to call the namespace 
//     // for the container which is in this case clip
//     enter() {
//       console.log('running enter')
//       case_study;
//     }
//     }
//   ]
// }
// )


cs_website_builder_tools()

export default cs_website_builder_tools
