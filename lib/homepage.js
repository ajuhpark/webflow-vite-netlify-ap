import '../src/styles/style.css'

import { gsap } from 'gsap'

import barba from '@barba/core';

import barbaCss from '@barba/css';
barba.use(barbaCss);


// import case_study from './case_study'
// import feature from './features/feature'
// import case_study from './cs_website_builder_tools'
// function homepage() {

console.log('homepage.js is working')
console.log(barba)

// console.log(gsap)
// alert('Local')



// this is to get the fade transitions to cover body bg color.
// getting access to the body color and applying it to the body
// each page has a data-background attribute that = a hex value.
const body = document.querySelector('body')

//this hook will run before any transition
barba.hooks.before((data) => {

  const background = data.current.container.dataset.background;
  // below is setting the --body-background variable in my webflow homepage
  // to the background color from the barba data site.
  // some color info
  // I put #45B565 - green as data-background for cs page to test
  // I put #4579B5 - blue as data-background for homepage to test
  // #f7f7f2 is light beige. #f7dcdc is light pink.
  body.style.setProperty('--body-background', background)

})
/*
barba.hooks.afterLeave((data) => {
  const js = data.next.container.querySelectorAll("script.reload-on-ajax");
  console.log(js);
  [].forEach.call(js, function (script) {
    console.log(script);
    window.eval(script.innerHTML);
  });
});
*/

barba.hooks.afterLeave(() => {
  const bottomDOM = document.getElementsByTagName("body")[0]
  const newScript = document.createElement("script")
  const oldScript = document.querySelector(".main-script")
  newScript.src = "./cs_website_builder_tools.js"
  newScript.className = "main-script"
  oldScript.remove()
  bottomDOM.appendChild(newScript)
})

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
      enter() {},
      after() {
      }

      // name: 'clip',
      // // if we want both containers in the dom at the same time for 
      // // clip-path animation, we have to put in sync: true.
      // sync: true, 
      // // we're going to the 'clip' namespace, the one that's the 
      // // namespace for the container in homepage.
      // to:{
      //   namespace: ['clip']
      // },
      // // when you leave the page, the clip class will be added to 
      // // the container of current page
      // leave() {},
      // // when it enters next page, we're going to call the namespace 
      // // for the container which is in this case clip
      // enter() {},
      // beroreEnter(){
      //   console.log('beforeEnter')
      // }

    }
  ]
})



 export default homepage
