var burger = document.querySelector('.header__burger--dark') 

const Bloghub = {
	data: function() {
		return {
			showModal: false,
			mail: "vadim.shevchenko2016@gmail.com",
			phone: "+38 (097) 88-33-510"
		}
	},
	template: `
		<div class="--dark "  >
			<header class="header header--dark" id="header">
				<div class="container " style="display: flex; flex-direction: row; justify-content: space-between;">
					<label for="menu-burger"  
						id="show-modal" 
						@click="modalShow" 
						class="header__burger header__burger--dark btn--dark" 
						@mouseenter="handleHover" @mouseleave="shutdownHover">
						<span @mouseenter="handleHover" @mouseleave="shutdownHover" class="bar" ></span>
					</label>
					<modal class="modal--dark modal-mask" v-if="showModal" @close="modalHide">
						<h3 slot="header">custom header</h3>
					</modal>
					<a class="header__logo" title="Go to light version(starts at 9:00)" >		
						<img src="assets/dark/dark.png" width="50px"/>					
					</a>
				</div>
			</header>
			<aside class="aside aside--dark">
				<nav class="aside__nav">
					<div class="aside__nav-item">
						<a href="https://www.instagram.com/vadim.shev_/" target="_blank" class="aside__link instagram btn--dark" rel="instagram" @mouseenter="handleHover" @mouseleave="shutdownHover" >instagram</a>
					</div>
					<div class="aside__nav-item">
						<a href="https://github.com/vadim-shev" target="_blank" class="aside__link git btn--dark" rel="git" @mouseenter="handleHover" @mouseleave="shutdownHover">github</a>
					</div>
					<div class="aside__nav-item">
						<a href="https://www.behance.net/vadimshevcd5b9" target="_blank" class="aside__link behance btn--dark" rel="behance" @mouseenter="handleHover" @mouseleave="shutdownHover">behance</a>
					</div>
				</nav>
			</aside>
			<main class="blog blog--dark" id="dark">
				<div class="blog__container">
					<div class="blog__">
						<h1 class="blog__title blog__title--dark">Blog</h1>
						<div class="blog__holder">
							<div class="blog__item__holder">
								<a class="blog__item">
										<figure class="blog__item-pic">
											<img src="css/dark/blog_prev.jpg" class="blog__item-pic" />
										</figure>
										<h5 class="blog__item-title">Title</h5>
										<p class="blog__item-lead ">lead  lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead </p>
										<p class="blog__item-lead ">Jan 23, 2018</p>		
								</a>
								<a class="blog__item">
										<figure class="blog__item-pic">
											<img src="css/dark/blog_prev.jpg" class="blog__item-pic" />
										</figure>
										<h5 class="blog__item-title">Title</h5>
										<p class="blog__item-lead ">lead  lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead </p>
										<p class="blog__item-lead ">Jan 23, 2018</p>		
								</a>
								<a class="blog__item">
										<figure class="blog__item-pic">
											<img src="css/dark/blog_prev.jpg" class="blog__item-pic" />
										</figure>
										<h5 class="blog__item-title">Title</h5>
										<p class="blog__item-lead ">lead  lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead </p>
										<p class="blog__item-lead ">Jan 23, 2018</p>		
								</a>
								<a class="blog__item">
										<figure class="blog__item-pic">
											<img src="css/dark/blog_prev.jpg" class="blog__item-pic" />
										</figure>
										<h5 class="blog__item-title">Title</h5>
										<p class="blog__item-lead ">lead  lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead lead </p>
										<p class="blog__item-lead ">Jan 23, 2018</p>		
								</a>
							<div class="blog__pagination blog__pagination--dark"></div>
						</div>
					</div>
				</div>
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
									class="footer_icon icon_instagram btn--dark"
									@mouseenter="handleHover" 
									@mouseleave="shutdownHover"
								>
									<i class="fab fa-instagram"></i>
								</a>
								<a href="https://github.com/vadim-shev" target="_blank"
									class="footer_icon icon_github btn--dark"
									@mouseenter="handleHover" 
									@mouseleave="shutdownHover"
								>
									<i class="fab fa-github"></i>
								</a>
								<a href="https://www.behance.net/vadimshevcd5b9" target="_blank"
									class="footer_icon icon_behance btn--dark"
									@mouseenter="handleHover" 
									@mouseleave="shutdownHover">
									<i class="fab fa-behance"></i>
								</a>
							</p>
						</div>
						<div class="nopadding">
							<div class="footer__mail">
								<a href="mailto:vadim.shevchenko2016@gmail.com" 
									class="footer__mail-link copyState copy_mail btn--dark" 
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
									class="footer__tel-link copyState copy_phone btn--dark" 
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
	methods: {
		modalShow: function(event) {		 
			this.showModal == false ? ( this.showModal = true, setTimeout( () => { document.querySelector('.modal-mask').style.opacity = "1"; }, 10)
			):( this.showModal = false, setTimeout( () => { document.querySelector('.modal-mask').style.opacity = "0"; }, 10) )
			this.showModal ? addClass(document.querySelector('.bar'), "burger--js") : removeClass(document.querySelector('.bar'), "burger--js")		
		},
		modalHide: function(event) {
			this.showModal == true ? ( this.showModal = false, setTimeout( () => { document.querySelector('.modal-mask').style.opacity = "0"; }, 10)
			):( this.showModal = true, setTimeout( () => { document.querySelector('.modal-mask').style.opacity = "1"; }, 10) )
		},
    	handleHover:  ({target}) => { let pJ$ = window.pJSDom[0].pJS.particles 		
    		fetch(_Fetch.Store).then(status).then(json).then( $py => { let self = this; let el = document.querySelector('.btn-contacts')
					_hasClass(target, $py.var.btn_key_dark) ? (
						pJ$.color.rgb.r = '255', pJ$.color.rgb.g = '255', pJ$.color.rgb.b = '255',
						pJ$.move.speed = '6',
						addClass(target, $py.notice.default.font_d), addClass(target, $py.notice.default.edge_d)
					) : (
						false
					)
			}).catch( error => { console.log('Request failed', error) } )	   	
    	},
    	shutdownHover: ({target}) => { let pJ$ = window.pJSDom[0].pJS.particles
    		fetch(_Fetch.Store).then(status).then(json).then( $py => { 
    			_hasClass(target, $py.var.btn_key_dark) ? (
						pJ$.color.rgb.r = '255', pJ$.color.rgb.g = '255', pJ$.color.rgb.b = '255',
						pJ$.move.speed = '6',
						removeClass(target, $py.notice.default.font_d), removeClass(target, $py.notice.default.edge_d)
					) : (
						false
					)
			}).catch( error => { console.log('Request failed', error) } )
    	},
    	clipboard:  ({target}) => {			
    		_hasClass(target, "copy_mail") ? ( 
    			clipboard = document.querySelector('#clipboard'), clipboard.setAttribute('type', 'text'),
    			clipboard.select(), document.execCommand('copy'), 
    			clipboard.setAttribute('type', 'hidden'), window.getSelection().removeAllRanges()
    		):( _hasClass(target, "copy_phone") ) ? (
    			clipboard = document.querySelector('#clipboardNum'), clipboard.setAttribute('type', 'text'),
    			clipboard.select(), document.execCommand('copy'), 
    			clipboard.setAttribute('type', 'hidden'), window.getSelection().removeAllRanges() ):( false )
        }
	}
}
