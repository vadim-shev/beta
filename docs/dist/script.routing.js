

const bar = document.querySelector('.bar')
const btnPortfolio = 'btn-portfolio'
const btnContacts = 'btn-contacts'
const btnBlog = 'btn-blog'

const mail = document.querySelector('.copy_mail')
const phone = document.querySelector('.copy_phone')


Vue.component('modal', {
  template: '#modal-template'
})
Vue.directive('scroll', {
	inserted: function(el, binding) {
		let f = function(evt) {
			document.querySelector('.home__meeting-neck').style.transition = '.3s'

			window.scrollY >= 100 && _hasClass(document.querySelector('.header'), "header--dark")? ( 
				document.querySelector('.header--dark').style.backgroundColor = 'rgba(31,31,31,.9)' 
			) : ( false )

			window.scrollY >= 100 && _hasClass(document.querySelector('.header'), "header--light")? ( 
				document.querySelector('.header--light').style.backgroundColor = 'rgba(232, 232, 232, 0.9)' 
			) : ( false)
			
			window.scrollY <= 220 ? document.querySelector('.home__meeting-neck').style.top = scrollY + 'px' : window.scrollY > 220 ? document.querySelector('.home__meeting-neck').style.top = 219.9 + 'px' : document.querySelector('.home__meeting-neck').style.top = 0 + 'px'
			
			window.scrollY >= document.querySelector('.home__about').offsetTop - 400 ? document.querySelector('.ui').click() : false
			window.scrollY >= document.querySelector('.home__about').offsetTop - 400 ? document.querySelector('.ux').click() : false
			window.scrollY >= document.querySelector('.home__about').offsetTop - 400 ? document.querySelector('.w3c').click() : false
			window.scrollY >= document.querySelector('.home__about').offsetTop - 400 ? document.querySelector('.js').click() : false
		}
		window.addEventListener('scroll', f)		
	},
})

var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var firebaseConfig = {
  	apiKey: "AIzaSyCWADWvPUQDrp3wYfyGqRGlYcKk_yaihRU",
  	authDomain: "tentative-web.firebaseapp.com",
  	databaseURL: "https://tentative-web.firebaseio.com",
  	projectId: "tentative-web",
  	storageBucket: "tentative-web.appspot.com",
  	messagingSenderId: "995843856822",
  	appId: "1:995843856822:web:548dbfb70157f894e38917",
 	measurementId: "G-MWC89TJX55"
}

firebase.initializeApp(firebaseConfig)

var usersRef = firebase.database().ref('users')

const Mode = {
  	template: `
    	<div class="single">
			<div class="devided devided--dark">
				<router-link to="/dark" name="dark">
					Dark
				</router-link>
			</div>
			<div class="devided devided--light">
				<router-link to="/light">
					Light
				</router-link>
			</div>
			<transition name="transitionName" mode="in-out">
		        <router-view class="child-view"></router-view>
		    </transition>
		</div>
 	`
}
