import './styles/style.css'

import { gsap } from 'gsap'

import feature from './features/feature'

console.log('Welcome to Vite + JS + Webflow!')
console.log(gsap)

feature()

/** 
var tl = gsap.timeline({ defaults: { ease: 'power1.inOut', opacity: 0 } })
// autoAlpha below is for the Flash of Unstyled Content issue.
tl.from('#demo', { opacity: 0, duration: 0.8, autoAlpha: 0 })
  .from('home_bodyText', { x: 80, duration: 1.1 })
  .from('h2', { x: 80, duration: 1.1 }, '<.25')
  .from('p', { x: 80, duration: 1.1 }, '<.25')
  .from('button', { x: 80, duration: 1.1 }, '<.25')
  .add('test')
  .from('#items > g', {
    transformOrigin: '50% 50%',
    scale: 0,
    opacity: 0,
    stagger: 0.1,
    ease: 'power1.Out',
  })
  */
var tl = gsap.timeline({ defaults: { ease: 'power1.inOut', opacity: 0 } })
// autoAlpha below is for the Flash of Unstyled Content issue.
tl.from('.home_bodytext', { x: -80, duration: 1 })

//addressing the Flash of unstyled content issue.
// window.addEventListener('load', function (event) {
//   init() //do stuff
//   GSDevTools.create({ animation: tl })
// })

/*this plays it starting from test*/
//tl.play("test");

//Getting GSDevTools working. GS Devtools was loaded already.
// GSDevTools.create()
