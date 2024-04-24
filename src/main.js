import './styles/style.css'

import { gsap } from 'gsap'

import feature from './features/feature'

console.log('Welcome to Vite + JS + Webflow!')
// console.log(gsap)

// alert('Local')

feature()

var home_tl = gsap.timeline({ defaults: { ease: 'power1.inOut'} })
/*autoAlpha below is for the Flash of Unstyled Content issue.*/
home_tl
  .from('Body', { backgroundColor: '#f7dcdc', opacity: 0, duration: 1.2 }, 'home_start')
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
