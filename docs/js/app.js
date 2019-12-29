/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS.load('particles-js', 'particles.json', function(data) {
  console.log('particles.js loaded - callback');

  document.querySelector('.btn-contacts').onmouseenter = () => {
    setTimeout(() => {
        window.pJSDom[0].pJS.particles.color.rgb.r = '255'
      window.pJSDom[0].pJS.particles.color.rgb.g = '0'
      window.pJSDom[0].pJS.particles.color.rgb.b = '0'
    }, 500)
    setTimeout(() => {

      window.pJSDom[0].pJS.particles.move.speed = '3'
    }, 100)
      
  }
  document.querySelector('.btn-contacts').onmouseleave = () => {
    setTimeout(() => {
      window.pJSDom[0].pJS.particles.color.rgb.r = '255'
      window.pJSDom[0].pJS.particles.color.rgb.g = '255'
      window.pJSDom[0].pJS.particles.color.rgb.b = '255'
    }, 500)
    setTimeout(() => {

      window.pJSDom[0].pJS.particles.move.speed = '60'
    }, 10)
    setTimeout(() => {

      window.pJSDom[0].pJS.particles.move.speed = '6'
    }, 1000)

  }
  
    console.log(window.pJSDom[0].pJS.particles.color.rgb.r);
  
});