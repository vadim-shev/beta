var burger = document.querySelector('.header__burger--dark') 


const DarkMode = { 
	data: function() {
		return {
			newUser: {
				name: '',
				email: '',
				message: ''
			},
			showModal: false,
			mail: "vadim.shevchenko2016@gmail.com",
			phone: "+38 (097) 88-33-510",
			intro: "intro",
			Experiences: "Protons give an atom its identity, electrons its personality. - Bill Bryson, A short history of nearly everything"
		}
	},
	template: `
		<div v-scroll="handleScroll"  class="--dark" v-cloak >
			<header class="header header--dark" id="header">
				<div class="container " style="display: flex; flex-direction: row; justify-content: space-between;">
					<label for="menu-burger"  
						id="show-modal" 
						@click="modalShow" 
						class="header__burger header__burger--dark" 
						@mouseenter="handleHover" @mouseleave="shutdownHover">
						<span @mouseenter="handleHover" @mouseleave="shutdownHover" class="bar" ></span>
					</label>
					<modal class="modal--dark" v-if="showModal" @close="modalHide">
						<h3 slot="header">custom header</h3>
					</modal>
					<router-link to="/light" class="header__logo" title="Go to light version(starts at 9:00)" >		
						<img src="assets/dark/dark.png" width="50px"/>					
					</router-link>
				</div>
			</header>
			<aside class="aside aside--dark">
				<nav class="aside__nav">
					<div class="aside__nav-item">
						<a href="https://www.instagram.com/vadim.shev_/" target="_blank" class="aside__link instagram" rel="instagram" @mouseenter="handleHover" @mouseleave="shutdownHover" >instagram</a>
					</div>
					<div class="aside__nav-item">
						<a href="https://github.com/vadim-shev" target="_blank" class="aside__link git" rel="git" @mouseenter="handleHover" @mouseleave="shutdownHover">github</a>
					</div>
					<div class="aside__nav-item">
						<a href="https://www.behance.net/vadimshevcd5b9" target="_blank" class="aside__link behance" rel="behance" @mouseenter="handleHover" @mouseleave="shutdownHover">behance</a>
					</div>
				</nav>
			</aside>
			<main class="home">
				<section class="home__meeting">
					<div class="home__meeting-neck home__meeting-neck--dark"></div>
					<div class="home__layout">
						<div class="container">
							<div class="header__content">
								<div class="home__content__title">
									<h2 class="home__content-title home__content-title--dark">
										{{ intro }}
									</h2>
								</div>
								<div class="home__content__lead">
									<p class="home__content-lead home__content-lead--dark">							
										{{ Experiences }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="home__portfolio" id="works">
					<div class="container">
						<div class="portfolio portfolio__grid">
							<div class="portfolio__item" @mouseenter="handleHover" @mouseleave="shutdownHover">
								<a>
									<div class="portfolio__item-img">
										<img src="assets/dark/background_dark.jpg"/>
										<div class="mini" style="height: 0px">
											<h5 class="mini__title">Title</h5>
											<small class="mini__subtitle">Subtitle</small>
										</div>
									</div>
								</a>
							</div>
							<div class="portfolio__item" @mouseenter="handleHover" @mouseleave="shutdownHover">
								<a>
									<div class="portfolio__item-img">
										<img src="assets/dark/background_dark.jpg"/>
										<div class="mini" style="height: 0px">
											<h5 class="mini__title">Title</h5>
											<small class="mini__subtitle">Subtitle</small>
										</div>
									</div>
								</a>
							</div>
							<div class="portfolio__item" @mouseenter="handleHover" @mouseleave="shutdownHover">
								<a>
									<div class="portfolio__item-img">
										<img src="assets/dark/background_dark.jpg"/>
										<div class="mini" style="height: 0px">
											<h5 class="mini__title">Title</h5>
											<small class="mini__subtitle">Subtitle</small>
										</div>
									</div>
								</a>
							</div>
							<div class="portfolio__item" @mouseenter="handleHover" @mouseleave="shutdownHover">
								<a>
									<div class="portfolio__item-img">
										<img src="assets/dark/background_dark.jpg"/>
										<div class="mini" style="height: 0px">
											<h5 class="mini__title">Title</h5>
											<small class="mini__subtitle">Subtitle</small>
										</div>
									</div>
								</a>
							</div>
							<div class="portfolio__item" @mouseenter="handleHover" @mouseleave="shutdownHover">
								<a>
									<div class="portfolio__item-img">
										<img src="assets/dark/background_dark.jpg"/>
										<div class="mini" style="height: 0px">
											<h5 class="mini__title">Title</h5>
											<small class="mini__subtitle">Subtitle</small>
										</div>
									</div>
								</a>
							</div>
							<div class="portfolio__item" @mouseenter="handleHover" @mouseleave="shutdownHover">
								<a>
									<div class="portfolio__item-img">
										<img src="assets/dark/background_dark.jpg"/>
										<div class="mini" style="height: 0px">
											<h5 class="mini__title">Title</h5>
											<small class="mini__subtitle">Subtitle</small>
										</div>
									</div>
								</a>
							</div>
							<div class="portfolio__item" @mouseenter="handleHover" @mouseleave="shutdownHover">
								<a>
									<div class="portfolio__item-img">
										<img src="assets/dark/background_dark.jpg"/>
										<div class="mini" style="height: 0px">
											<h5 class="mini__title">Title</h5>
											<small class="mini__subtitle">Subtitle</small>
										</div>
									</div>
								</a>
							</div>
							<div class="portfolio__item" @mouseenter="handleHover" @mouseleave="shutdownHover">
								<a>
									<div class="portfolio__item-img">
										<img src="assets/dark/background_dark.jpg"/>
										<div class="mini" style="height: 0px">
											<h5 class="mini__title">Title</h5>
											<small class="mini__subtitle">Subtitle</small>
										</div>
									</div>
								</a>
							</div>

							<div class="portfolio__more">
								<button class="btn btn--dark btn-portfolio" @mouseenter="handleHover" @mouseleave="shutdownHover">show more</button>
							</div>
						</div>
					</div>
				</section>
				<section class="home__about"  id="about">
					<div class="container">
						<div class="home__about__content">
							<div class="home__about-content">
								<div class="home__about__title">
									<h2 class="home__about-title home__about-title--dark">
										about me
									</h2>
								</div>								
								<div class="home__about__lead">
									<p class="home__about-lead home__about-lead--dark">			
										The idea of beauty is the fundamental idea of everything. In the world we see only distortions of the fundamental idea, but art, by imagination, may lift itself to the height of this idea. Art is therefore akin to creation.
									</p>
								</div>
								<div class="home__about__image">
									<img src="assets/dark/alone.jpg" class="about__pic"/>
 								</div>
								<div class="home__about__skills">
									<h3 class="home__about__skills-title home__about__skills-title--dark">
										skills
									</h3>
									<ul class="skills skills--dark">
										<li class="skill__item">
											<div class="skills__title ui" @click.once="progress">UI & Web Design</div>
											<div class="ui__value"></div>
											<div class="skills__progress skills__progress--dark">
												<div class="skills__bar skills__bar--dark ui__bar"></div>
											</div>
										</li>
										<li class="skill__item">
											<div class="skills__title ux"  @click.once="progress">UX</div>
											<div class="ux__value"></div>
											<div class="skills__progress skills__progress--dark">
												<div class="skills__bar skills__bar--dark ux__bar" ></div>
											</div>
										</li>
										<li class="skill__item">
											<div class="skills__title w3c" @click.once="progress">HTML & CSS</div>
											<div class="w3c__value"></div>
											<div class="skills__progress skills__progress--dark">
												<div class="skills__bar skills__bar--dark w3c__bar"></div>
											</div>
										</li>
										<li class="skill__item">
											<div class="skills__title js" @click.once="progress">Javascript</div>
											<div class="js__value"></div>
											<div class="skills__progress skills__progress--dark">
												<div class="skills__bar skills__bar--dark js__bar"></div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="home__blog"  id="blog">
					<div class="container">
						<div class="home__blog__content">
							<div class="home__blog-wrapper">
								<div class="home__blog-title home__blog-title--hidden">
									<a href="#" class="home__blog-link btn--hidden btn btn--dark">view all post</a>
								</div>
								<a href="#" class="home__blog-preview">
									<div class="home__blog-preview-img">
										<img src="assets/dark/blog_prev.jpg" class="blog__pic"/>
									</div>
									<h3 class="home__blog-preview-title home__blog-preview-title--dark">
										Mind power the ultimate success formula			
									</h3>
									<p class="home__blog-preview-text home__blog-preview-text--dark">	
										What does it take to be successful? Ask around and you will find different answers to the formula of success. The truth is, success leaves clues and you can achieve the success in the area you desire by observing the common qualities and principles.
									</p>
									<p class="home__blog-preview-date home__blog-preview-date--dark">
										Jan 23, 2018				
									</p>
								</a>
								<div class="home__blog-title">
									<h2 class="home__blog-title-text home__blog-title-text--dark">new <br/> in blog</h2>
									<a href="#" class="home__blog-link btn btn--dark btn-blog" @mouseenter="handleHover" @mouseleave="shutdownHover">view all post</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="home__contacts"  id="contacts">
					<div class="container">
						<div class="home__contacts__content">
							<div class="home__contacts-wrapper">
								<div class="home__contacts-title">
									<h2 class="home__contacts-title-text home__contacts-title-text--dark">
										contacts
									</h2>
								</div>
								<div class="home__contacts-content">
									<p class="home__contacts-content-text">
										Have a questions, offers on cooperation?<br/>
										Feel free to contact me!
									</p>
									<div class="home__contacts-info">
										<p class="home__contacts-geo home__contacts-geo--dark">
											Cherkasy, Ukraine.
										</p>
										<a href="mailto:vadim.shevchenko2016@gmail.com" 
												@click.stop.prevent="clipboard" 
												@mouseenter="handleHover" @mouseleave="shutdownHover"
												class="home__contacts-mail home__contacts-mail--dark copyState copy_mail" 
												title="Click to copy mail"
										>
											{{ mail }}
											<input type="hidden" id="clipboard" :value="mail">
										</a>
										<p class="home__contacts-content-tel home__contacts-content-tel--dark">
											<a class="home__contacts-content-tel home__contacts-content-tel--dark copyState copy_phone" 
												href="#contacts" 
												@mouseenter="handleHover" 
												@mouseleave="shutdownHover" 
												@click.stop.prevent="clipboard" 
												title="Click to copy phone"
											>
												{{ phone }}
												<input type="hidden" id="clipboardNum" :value="phone">
											</a>
										</p>
									</div>
								</div>
								<div class="home__contacts-form">
									<form id='form' v-on:submit.prevent="addUser">
										<div class="content">
											<div class="box field">
												<input type="text" 
														class="field__input field__input--dark name" 
														data-name 

														@focusin="focusField" 
														@focusout="focusOutField" 
														v-model="newUser.name" 

														required/>
												<label class="field__label field__label--dark name__label" rel="nameLabel" data-name id="lol">
													Name
													<label  v-show="!validation.name" class="hidden" rel="nameError" style="color: red">
														cannot be empty
													</label>
												</label>
											</div>
										</div>
										<div class="content">
											<div class="box field">
												<input type="email" 
														class="field__input field__input--dark email" 
														data-email 
														@focusin="focusField" 
														@focusout="focusOutField"  
														v-model="newUser.email" 
														required/>
												<label class="field__label field__label--dark email__label" rel="emailLabel" data-email id="lol2">
													<label  v-show="!validation.email" class="hidden" rel="emailError" style="color: red">
														Please provide a valid 
													</label>
													Email
													<label  v-show="!validation.email" class="hidden" rel="emailError" style="color: red">
														address.
													</label>
												</label>
											</div>
										</div>
										<div class="content">
											<div class="box field">
												<textarea class="field__textarea field__textarea--dark message" 
															data-message 

															@focusin="focusField" 
															@focusout="focusOutField" 
															v-model="newUser.message"  

															required></textarea>
												<label class="field__label field__label--dark message__label" rel="messageLabel">
													Message
													<label  v-show="!validation.message" class="hidden" rel="messageError" style="color: red">
														cannot be empty
													</label>
												</label>
											</div>
										</div>
										<div class="content">
											<div class="box">
												<div class="form--notice"></div>
											</div>
										</div>
										<div class="content">
											<div class="box">
												<input type="submit" value="Send message" class="btn btn--dark btn-contacts"  @mouseenter="handleHover" @mouseleave="shutdownHover"/>
											</div>
										</div>										
									</form>
								</div>	
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer class="footer footer--dark">
				<div class="container">
					<div class="nomargin footer-wrapper">
						<div class="nopadding">
							<p class="footer__text footer__copyright"
								@mouseenter="handleHover" 
								@mouseleave="shutdownHover"
							>
								<span class="copyright">&copy; 2019</span> VS All right reserved.
							</p>
						</div>
						<div class="nopadding">
							<p class="footer__socials">
								<span class="share">Share</span>
								<span class="footer__dash"></span>
								<a href="https://www.instagram.com/vadim.shev_/" target="_blank"
									class="footer_icon icon_instagram"
									@mouseenter="handleHover" 
									@mouseleave="shutdownHover"
								>
									<i class="fab fa-instagram"></i>
								</a>
								<a href="https://github.com/vadim-shev" target="_blank"
									class="footer_icon icon_github"
									@mouseenter="handleHover" 
									@mouseleave="shutdownHover"
								>
									<i class="fab fa-github"></i>
								</a>
								<a href="https://www.behance.net/vadimshevcd5b9" target="_blank"
									class="footer_icon icon_behance"
									@mouseenter="handleHover" 
									@mouseleave="shutdownHover">
									<i class="fab fa-behance"></i>
								</a>
							</p>
						</div>
						<div class="nopadding">
							<div class="footer__mail">
								<a href="mailto:vadim.shevchenko2016@gmail.com" 
									class="footer__mail-link copyState copy_mail" 
									@mouseenter="handleHover" 
									@mouseleave="shutdownHover"
									@click.stop.prevent="clipboard" 
									title="Click to copy mail"
								>
									{{ mail }}
									<input type="hidden" id="clipboard" :value="mail">
								</a>
							</div>
						</div>
						<div class="nopadding">
							<div class="footer__tel">
								<a href="tel:+380978833510" 
									class="footer__tel-link copyState copy_phone" 
									@mouseenter="handleHover" 
									@mouseleave="shutdownHover"
									@click.stop.prevent="clipboard" 
									title="Click to copy phone"
								>
									{{ phone }}
									<input type="hidden" id="clipboardNum" :value="phone">
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	`,
	firebase: {
		users: usersRef
	},
	computed: {
		validation: function() {
			return {
				name: !!this.newUser.name.trim(),
				email: emailRE.test(this.newUser.email),
				message: !!this.newUser.message.trim()
			}
		},
		isValid: function() {
			var validation = this.validation
			return Object.keys(validation).every(function(key) {
				return validation[key]
			})
		}
	},
	methods: {
		addUser: function() {
			if(this.isValid) {
				usersRef.push(this.newUser)
				this.newUser.name = ''
				this.newUser.email = ''
				this.newUser.message = ''
			}
		},
		modalShow: function(event) {		 
			this.showModal == false ? ( this.showModal = true, setTimeout( () => { document.querySelector('.modal-mask').style.opacity = "1"; }, 10)
			):( this.showModal = false, setTimeout( () => { document.querySelector('.modal-mask').style.opacity = "0"; }, 10) )
			this.showModal ? addClass(document.querySelector('.bar'), "burger--js") : removeClass(document.querySelector('.bar'), "burger--js")		
		},
		modalHide: function(event) {
			this.showModal == true ? ( this.showModal = false, setTimeout( () => { document.querySelector('.modal-mask').style.opacity = "0"; }, 10)
			):( this.showModal = true, setTimeout( () => { document.querySelector('.modal-mask').style.opacity = "1"; }, 10) )
		},
 		focusField: ({ target }) => { 			
 			fetch(_Fetch.Store).then(status).then(json).then( $py => {
	    		_hasClass(target, $py.var.input_field) && _hasClass(target, $py.var.name_field) ? ( 
	    			addClass(document.querySelector('.name__label'), $py.move.labeL)
	    		):( _hasClass(target, $py.var.input_field) && _hasClass(target, $py.var.mail_field) ) ? (
	    			addClass(document.querySelector('.email__label'), $py.move.labeL)
	    		):( _hasClass(target, $py.var.area_field) && _hasClass(target, $py.var.message_field) ) ? (
	    			addClass(document.querySelector('.message__label'), $py.move.labeL) ):( false )
	    	}).catch( error => { console.log('Request failed', error) } )
 		},
 		focusOutField: ({ target }) => {
 			fetch(_Fetch.Store).then(status).then(json).then( $py => {
	    		_hasClass(target, $py.var.input_field) && _hasClass(target, $py.var.name_field) && !target.value ? ( 
	    			removeClass(document.querySelector('.name__label'), $py.move.labeL)
	    		):( _hasClass(target, $py.var.input_field) && _hasClass(target, $py.var.mail_field) && !target.value ) ? (
	    			removeClass(document.querySelector('.email__label'), $py.move.labeL)
	    		):( _hasClass(target, $py.var.area_field) && _hasClass(target, $py.var.message_field) && !target.value ) ? (
	    			removeClass(document.querySelector('.message__label'), $py.move.labeL) ):( false )
	    	}).catch( error => { console.log('Request failed', error) } )
 		},
 		handleScroll: (evt, el) => {
 			window.scrollY > 50 ? el.setAttribute("style", "opacity: 1; transform: translate3d(0, -10px, 0)") : false
    		return window.scrollY > 100
    	},
    	handleHover: function( { target } ) {			
    		fetch(_Fetch.Store).then(status).then(json).then( $py => { var self = this
				target && _hasClass(target, $py.var.btn_key_dark) ? (
					addClass(target, $py.notice.default.font_d), addClass(target,  $py.notice.default.edge_d)
				):( target && _hasClass(target, $py.var.copy_key) ) ? ( 
					addClass(target, $py.notice.default.font_d)
				):( target && _hasClass(target, $py.var.icon_key) ) ? ( 
					addClass(target, $py.notice.default.font_d)
				):( target && _hasClass(target, $py.var.side_key) ) ? (
					addClass(target, $py.notice.default.font_d)
				):( target == burger ) ? ( addClass(bar, $py.move.bar) ):( false ) 
				let el = document.querySelector('.btn-contacts')
				_hasClass(target, $py.var.btn_submit) && !!self.validation.name !== true ? (
					addClass(el, $py.notice.error.font), addClass(el, $py.notice.error.edge),
					removeClass(el, $py.notice.access.font), removeClass(el, $py.notice.access.edge)
				):( _hasClass(target, $py.var.btn_submit) && !!self.validation.email !== true ) ? (
					addClass(el, $py.notice.error.font), addClass(el, $py.notice.error.edge),
					removeClass(el, $py.notice.access.font), removeClass(el, $py.notice.access.edge)
				):( _hasClass(target, $py.var.btn_submit)&& !!self.validation.message !== true ) ? (
					addClass(el, $py.notice.error.font), addClass(el, $py.notice.error.edge),
					removeClass(el, $py.notice.access.font), removeClass(el, $py.notice.access.edge)
				):( !_hasClass(target, $py.var.btn_submit) ) ? ( false ):( 
					addClass(el, $py.notice.access.font), addClass(el, $py.notice.access.edge) )						
			}).catch( error => { console.log('Request failed', error) } )		
    	},
    	shutdownHover: function({ target }) {
    		fetch(_Fetch.Store).then(status).then(json).then( $py => { var self = this
				target && _hasClass(target, $py.var.btn_key_dark) ? (
					removeClass(target, $py.notice.default.font_d), removeClass(target,  $py.notice.default.edge_d)
				):( target && _hasClass(target, $py.var.copy_key) ) ? ( 
					removeClass(target, $py.notice.default.font_d)
				):( target && _hasClass(target, $py.var.icon_key) ) ? ( 
					removeClass(target, $py.notice.default.font_d)
				):( target && _hasClass(target, $py.var.side_key) ) ? (
					removeClass(target, $py.notice.default.font_d)
				):( target == burger ) ? ( removeClass(bar, $py.move.bar) ):( false ) 	
				let el = document.querySelector('.btn-contacts')	
				_hasClass(target, $py.var.btn_submit) && !!self.validation.name !== true ? (
					removeClass(el, $py.notice.error.font), removeClass(el, $py.notice.error.edge),
					removeClass(el, $py.notice.access.font), removeClass(el, $py.notice.access.edge)
				):( _hasClass(target, $py.var.btn_submit) && !!self.validation.email !== true ) ? (
					removeClass(el, $py.notice.error.font), removeClass(el, $py.notice.error.edge),
					removeClass(el, $py.notice.access.font), removeClass(el, $py.notice.access.edge)
				):( _hasClass(target, $py.var.btn_submit) && !!self.validation.message !== true ) ? (
					removeClass(el, $py.notice.error.font), removeClass(el, $py.notice.error.edge),
					removeClass(el, $py.notice.access.font), removeClass(el, $py.notice.access.edge)
				):( !_hasClass(target, $py.var.btn_submit) ) ? ( false ):( removeClass(el, $py.notice.access.font), removeClass(el, $py.notice.access.edge) )											
			}).catch( error => { console.log('Request failed', error) } )
    	},
    	clipboard: ( { target } ) => {			
    		_hasClass(target, "copy_mail") ? ( 
    			clipboard = document.querySelector('#clipboard'), clipboard.setAttribute('type', 'text'),
    			clipboard.select(), document.execCommand('copy'), 
    			clipboard.setAttribute('type', 'hidden'), window.getSelection().removeAllRanges()
    		):( _hasClass(target, "copy_phone") ) ? (
    			clipboard = document.querySelector('#clipboardNum'), clipboard.setAttribute('type', 'text'),
    			clipboard.select(), document.execCommand('copy'), 
    			clipboard.setAttribute('type', 'hidden'), window.getSelection().removeAllRanges() ):( false )
        },
        progress: event => {
        	var i = 0
    		if (i == 0) {
		    	i = 1; width = 1
		    	fetch(_Fetch.Store).then(status).then(json).then( $py => { setInterval( () => {
			    	width < 50 ? (
			    		width++, document.querySelector($py.var.bar.ui.el).style.width = width + '%',
			    		document.querySelector($py.var.bar.ui.val).innerHTML = width + '%'
			    	):( width < 60 ) ? ( 
			    		width++, document.querySelector($py.var.bar.ux.el).style.width = width + '%',
			    		document.querySelector($py.var.bar.ux.val).innerHTML = width + '%'   
			    	):( width < 75 ) ? ( 
			    		width++, document.querySelector($py.var.bar.w3c.el).style.width = width + '%',
			    		document.querySelector($py.var.bar.w3c.val).innerHTML = width + '%'    	
			    	):( width < 80 ) ? ( 
			    		width++, document.querySelector($py.var.bar.js.el).style.width = width + '%',
			    		document.querySelector($py.var.bar.js.val).innerHTML = width + '%'  
			    	):( clearInterval(), i = 0 )			    		
			    }, 30)}).catch( error => { console.log('Request failed', error) } )	
		  	}
        }    	
 	}
}


