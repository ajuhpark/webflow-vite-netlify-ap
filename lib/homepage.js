import '../src/styles/home.css'
import '../src/styles/fade.css'

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

// getting access to the body color and applying it to the body
// each page has a data-background attribute that = a hex value.
const body = document.querySelector('body')

//


//barba.init from course
barba.init({
  transitions: [
    {
      //setting transition name to home.
      name: 'home',

      // creating a hook
      beforeOnce(){
        console.log('running hook beforeOnce')
      },

      // this is a hook that's called once. It happens once on the page load.
      once(){
        // with css plugin, this won't work.
        console.log('running hook once')

      },

      // another hook
      afterOnce(){
        console.log('running hook afterOnce')
      },

      name: 'fade',
      // we're going to the 'fade' namespace, the one that's the 
      // namespace for the container in homepage.
      to:{
        namespace: ['fade']
      },
      // when you leave the page, the fade class will be added to 
      // the container of current page
      leave() {},
      // when it enters next page, we're going to call the namespace 
      // for the container which is in this case fade
      enter() {}
    }
  ]
})


 export default homepage
