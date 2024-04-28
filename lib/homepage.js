import '../src/styles/home.css'

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

      }

    }
  ]
})


// export default homepage
