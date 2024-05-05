import '../src/styles/style.css'

import { gsap } from 'gsap'

import barba from '@barba/core';

import barbaCss from '@barba/css';
barba.use(barbaCss);


// import case_study from './case_study'
// import feature from './features/feature'
import cs_website_builder_tools from './cs_website_builder_tools'
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

// barba.hooks.afterLeave(() => {
//   const bottomDOM = document.getElementsByTagName("body")[0]
//   const newScript = document.createElement("script")
//   const oldScript = document.querySelector(".homepage")
//   newScript.src = "./cs_website_builder_tools.js"
//   newScript.className = "cs_website_builder_tools"
//   oldScript.remove()
//   bottomDOM.appendChild(newScript)
//   console.log(oldScript)
//   console.log(newScript)
// })

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
      afterLeave() {
        
        const bottomDOM = document.getElementsByTagName("body")[0]
        const newScript = document.createElement("script")
        const oldScript = document.querySelector(".homepage")


        // newScript.src = "./cs_website_builder_tools.js"
        // newScript.src = "lib/cs_website_builder_tools.js"
        newScript.src = "https://andrewjypark-portfolio.netlify.app/cs_website_builder_tools.js"

        newScript.className = "cs_website_builder_tools"
        oldScript.remove()
        bottomDOM.appendChild(newScript)
        console.log(oldScript)
        console.log(newScript)

        // window.eval(newScript.innerHTML);
        // console.log(newScript.innerHTML)




        // function setInnerHTML(elm, html) {
        //   elm.innerHTML = html;
        //   console.log(elm.innerHTML);
        //   Array.from(elm.querySelectorAll("script"))
        //     .forEach( oldScriptEl => {
        //       const newScriptEl = document.createElement("script");
              
        //       Array.from(oldScriptEl.attributes).forEach( attr => {
        //         newScriptEl.setAttribute(attr.name, attr.value) 
        //       });
              
        //       const scriptText = document.createTextNode(oldScriptEl.innerHTML);
        //       newScriptEl.appendChild(scriptText);
              
        //       oldScriptEl.parentNode.replaceChild(newScriptEl, oldScriptEl);
        //   });
        // }

        // var str = `<script src="https://andrewjypark-portfolio.netlify.app/cs_website_builder_tools.js" class="cs_website_builder_tools"></script>`
        // console.log(str)
        // document.body.innerHTML += str;
        // var HTML = document.querySelectorAll("script.cs_website_builder_tools");
        // console.log(HTML)


        // setInnerHTML($0, HTML); // does run <script> tags in HTML





        // var str = '<script src="https://andrewjypark-portfolio.netlify.app/cs_website_builder_tools.js" class="cs_website_builder_tools"></script>';
        // document.body.innerHTML += str;
        // var scripts = document.querySelectorAll("script");
        // (0, eval)(scripts[scripts.length - 1].textContent);

        // https://stackoverflow.com/questions/19737031/loading-scripts-after-page-load
        // xhttp.open("GET", "https://andrewjypark-portfolio.netlify.app/case_study.js", true);
        // xhttp.send();//get url content


        // eval(newScript.text);
        // cs_website_builder_tools();



        // getting the text according to the stack overflow
        // https://stackoverflow.com/questions/50178848/run-script-after-appending-it-to-the-html
        // var str = `<script src="https://andrewjypark-portfolio.netlify.app/cs_website_builder_tools.js" class="cs_website_builder_tools"></script>`
        // console.log(str)
        // document.body.innerHTML += str;
        // var scripts = document.querySelectorAll("script.cs_website_builder_tools");
        // console.log(scripts)

        // var text = scripts[scripts.length - 1].textContent;
        // console.log(text)

        // // and then running the script
        // var newScript_1 = document.createElement("script");
        // newScript_1.textContent = text;
        // document.body.appendChild(newScript_1);
        // console.log(newScript_1)

        // a different way of adding and running it
        // var str = '<script src="https://andrewjypark-portfolio.netlify.app/cs_website_builder_tools.js" class="cs_website_builder_tools"></script>';
        // document.body.innerHTML += str;
        // var scripts = document.querySelectorAll("script");
        // (0, eval)(scripts[scripts.length - 1].textContent);

      },
      // when it enters next page, we're going to call the namespace 
      // for the container which is in this case fade
      
      beforeEnter(){
        // calling that imported js file
        cs_website_builder_tools;
        // calling the function in that js file
        cs_website_builder_tools();
      },
      
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
