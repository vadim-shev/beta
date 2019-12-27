
const router = new VueRouter({
	mode: 'abstract',
  	routes: [ {
  			path: '/', component: Mode
  		}, { 
	    	path: '/dark', component: DarkMode
    	}, {
    		path: '/light', component: LightMode
    	}, {
    		path: '*'
    	}
	],
	watch: {
		$route(to, from) {
		    const toDepth = to.path.split('/').length
		    const fromDepth = from.path.split('/').length
		    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
		},


	},

})

const app = new Vue({ 
 	router,
}).$mount('#app')
	
router.fallback = true
router.push('/dark')

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

