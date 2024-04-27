import '../src/styles/style.css'

import { gsap } from 'gsap'

// import feature from './features/feature'

// function case_study() {
console.log('cs_website_builder_tools.js is working')
// console.log(gsap)

// alert('Local')


// Home - Load Animation - Case Studies
var cs_website_builder_tools_tl = gsap.timeline({ defaults: { ease: 'power1.inOut'} })

function init(){
  cs_website_builder_tools_tl
    //#f7f7f2 is light beige. #f7dcdc is light pink.
    .from("html", {duration: 0.1, autoAlpha: 0}, 'cs_website_builder_tools_tl')
    //.from('.proj', {duration: 0, autoAlpha: 0}, 'cs_website_builder_tools_tl')
    .from('.proj', { backgroundColor: '#f7f7f2', opacity: 0, duration: 1}, '<')
    .from('.project_title', { yPercent: 60, duration: .9 }, 'cs_website_builder_tools_tl+=.4')
    .from('.project_title', { opacity: 0, duration: .7 }, 'cs_website_builder_tools_tl+=.4')
    .from('.project_hero_image', { yPercent: 20, duration: .8 }, 'cs_website_builder_tools_tl+=.5')
    .from('.project_hero_image', { opacity: 0, duration: .9 }, 'cs_website_builder_tools_tl+=.6')
    .from('.project_body_section', { opacity: 0, duration: 1.2 }, 'cs_website_builder_tools_tl+=.6')
}

// addressing the Flash of unstyled content issue.
//window.addEventListener("load", function(event) { 
  init(); //do stuff
  // GSDevTools.create({animation:tl})
//  });

// }


export default cs_website_builder_tools
