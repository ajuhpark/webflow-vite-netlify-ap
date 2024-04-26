import '../src/styles/style.css'

import { gsap } from 'gsap'

// import feature from './features/feature'

// function case_study() {
console.log('case_study.js is working')
// console.log(gsap)
// alert('Local')


// Home - Load Animation - Case Studies
var case_study_tl = gsap.timeline({ defaults: { ease: 'power1.inOut'} })

function init(){
  case_study_tl
    //#f7f7f2 is light beige. #f7dcdc is light pink.
    // .from("html", {opacity:0, duration: 0, autoAlpha: 0}, 'case_study_tl')
    .from('.proj', { backgroundColor: '#f7f7f2', opacity: 0, duration: 1}, 'case_study_tl')
    .from('.project_title', { yPercent: 60, duration: .9 }, 'case_study_tl+=.4')
    .from('.project_title', { opacity: 0, duration: .7 }, 'case_study_tl+=.4')
    .from('.project_hero_image', { yPercent: 20, duration: .8 }, 'case_study_tl+=.5')
    .from('.project_hero_image', { opacity: 0, duration: .9 }, 'case_study_tl+=.6')
    .from('.project_body_section', { opacity: 0, duration: 1.2 }, 'case_study_tl+=.6')
}

init(); //do stuff

// }


export default case_study
