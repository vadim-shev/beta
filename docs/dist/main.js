
const router = new VueRouter({
  	routes: [ {
  			path: '/', component: Mode
  		}, { 
	    	path: '/dark', component: DarkMode
    	}, {
    		path: '/dark/blog', component: Bloghub
    	}, {
    		path: '/dark/work', component: Workhub
    	}, {
    		path: '/light', component: LightMode
    	}
	],
	watch: {
		$route(to, from) {
		    const toDepth = to.path.split('/').length
		    const fromDepth = from.path.split('/').length
		    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
		}
	}
})

particlesJS.load('app', 'particles.json', () => {
    console.log('particles.js loaded - callback');  
});

const app = new Vue({ 
 	router,
}).$mount('#app')
	


const rightPath = window.location.origin + '/Portfolio/'
if(window.location.pathname == '/Portfolio/index.html') {
	window.location.href = rightPath
} else if (window.location.hash == '#works') {		
	window.location.href = rightPath + window.location.hash
} else if (window.location.hash == '#about') {		
	window.location.href = rightPath + window.location.hash
} else if (window.location.hash == '#blog') {		
	window.location.href = rightPath + window.location.hash
} else if (window.location.hash == '#contacts') {		
	window.location.href = rightPath + window.location.hash
} else {		
}


// console.log(router.currentRoute.path)
// if(router.currentRoute.path === '/dark/blog') {
// 	document.querySelector('#particles-js').style.height = document.querySelector('.--dark').offsetHeight

// } else {
// 	document.querySelector('#particles-js').style.height = document.querySelector('.--dark').offsetHeight
	
// }
// console.log(router.forward);
