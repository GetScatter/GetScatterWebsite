<template>
	<div id="navigation">
		<div class="mobile-navigation" :class="{'open':menuOpen}">

			<section v-for="link in links" :key="link.page" @click="linkClicked(link)">
				<figure class="mobile-link">{{link.text}}</figure>
				<section class="sublinks" :class="{'show':subLink === link.id}">
					<figure class="mobile-link" v-for="sub in link.subs" @click="subClicked(link, sub)">{{sub.replace('_', ' ')}}</figure>
				</section>
			</section>

            <router-link to="/wallets">wallets</router-link>
            <router-link to="/careers">careers</router-link>
			<a href="https://support.get-scatter.com" title="Get the help you need">support</a>
			<figure class="mobile-close" id="mobileclose" @click="closeMenu">
				<span></span>
			</figure>
		</div>
		<header class="header">
			
			<a href="/" class="logo">
				
                <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="scatter_simple_start" transform="translate(-31.000000, -30.000000)" fill="#0799FF">
                            <path d="M53,30 C65.1502645,30 75,39.8497355 75,52 C75,64.1502645 65.1502645,74 53,74 C40.8497355,74 31,64.1502645 31,52 C31,39.8497355 40.8497355,30 53,30 Z M55.3485577,39 C54.5072073,39 53.6688744,39.1277838 52.8335337,39.3833552 C51.9981929,39.6389266 51.1959173,39.9910419 50.4266827,40.4397117 C49.6574481,40.8883814 48.942311,41.4165544 48.28125,42.0242464 C47.620189,42.6319384 47.0462765,43.2850555 46.5594952,43.9836173 C46.0727139,44.6821791 45.6911072,45.4176458 45.4146635,46.1900393 C45.1382198,46.9624329 45,47.7291356 45,48.4901704 C45,49.3761512 45.1292054,50.1627314 45.3876202,50.8499345 C45.6460349,51.5371376 45.9855748,52.1533393 46.40625,52.6985583 C46.8269252,53.2437773 47.3076896,53.726516 47.8485577,54.146789 C48.3894258,54.567062 48.9423049,54.9589322 49.5072115,55.3224115 C50.0721182,55.6858909 50.6249973,56.0351665 51.1658654,56.370249 C51.7067335,56.7053315 52.1874979,57.0489279 52.6081731,57.4010485 C53.0288483,57.7531691 53.3683881,58.1336808 53.6268029,58.542595 C53.8852176,58.9515093 54.0144231,59.4172101 54.0144231,59.9397117 C54.0144231,60.6893878 53.7740409,61.2828724 53.2932692,61.7201835 C52.8124976,62.1574945 52.1935134,62.3761468 51.4362981,62.3761468 C51.0877386,62.3761468 50.7842561,62.3363918 50.5258413,62.2568807 C50.2674266,62.1773696 50.0510826,62.0893408 49.8768029,61.9927916 C49.7025232,61.8962424 49.5673082,61.8025343 49.4711538,61.7116645 L49.4711538,61.7116645 L49.2908654,61.5412844 C49.1826918,61.3368273 49.044472,61.2346003 48.8762019,61.2346003 C48.7439897,61.2346003 48.5937508,61.3027516 48.4254808,61.4390564 C48.2572107,61.5753611 48.1009623,61.7428998 47.9567308,61.9416776 C47.8124993,62.1404553 47.6923082,62.3562679 47.5961538,62.5891219 C47.5,62.8219758 47.4519231,63.0406281 47.4519231,63.2450852 C47.4519231,63.3018788 47.5120186,63.4239833 47.6322115,63.6114024 C47.7524044,63.7988214 47.9627389,63.9947565 48.2632212,64.1992136 C48.5637034,64.4036707 48.9723532,64.5882473 49.4891827,64.7529489 C50.0060122,64.9176505 50.6550442,65 51.4362981,65 C52.2055327,65 52.9266793,64.8636973 53.5997596,64.5910878 C54.2728399,64.3184783 54.8557668,63.9493252 55.3485577,63.4836173 C55.8413486,63.0179094 56.2289649,62.469859 56.5114183,61.8394495 C56.7938716,61.2090401 56.9350962,60.5417248 56.9350962,59.8374836 C56.9350962,59.110525 56.8058907,58.4659268 56.547476,57.9036697 C56.2890612,57.3414127 55.9465166,56.8302775 55.5198317,56.370249 C55.0931469,55.9102205 54.6093777,55.4899538 54.0685096,55.1094364 C53.5276415,54.728919 52.9747624,54.3597659 52.4098558,54.0019659 C51.8449491,53.644166 51.29207,53.2835317 50.7512019,52.9200524 C50.2103338,52.5565731 49.7265646,52.1590236 49.2998798,51.7273919 C48.873195,51.2957602 48.5306503,50.8158611 48.2722356,50.2876802 C48.0138208,49.7594993 47.8846154,49.1603354 47.8846154,48.4901704 C47.8846154,47.8540816 48.0018017,47.2435591 48.2361779,46.6585845 C48.4705541,46.07361 48.7800462,45.5283992 49.1646635,45.0229358 C49.5492808,44.5174724 49.9939879,44.0546111 50.4987981,43.6343381 C51.0036083,43.2140652 51.5264396,42.8562706 52.0673077,42.5609436 C52.6081758,42.2656167 53.146031,42.0356059 53.6808894,41.8709043 C54.2157479,41.7062028 54.7115362,41.6238532 55.1682692,41.6238532 C55.901446,41.6238532 56.4212725,41.7942316 56.7277644,42.1349934 C57.0342563,42.4757553 57.1875,42.9414562 57.1875,43.5321101 C57.1875,44.1114053 57.0042086,44.7077296 56.6376202,45.3211009 C56.2710318,45.9344723 55.8173104,46.4967209 55.2764423,47.0078637 C54.7355742,47.5190065 54.1586569,47.9392731 53.5456731,48.2686763 C52.9326892,48.5980794 52.3738006,48.7627785 51.8689904,48.7627785 C51.7127396,48.7627785 51.5745198,48.7485803 51.4543269,48.7201835 C51.334134,48.6917867 51.2349764,48.6747488 51.156851,48.6690695 C51.0787256,48.6633901 51.01863,48.6832676 50.9765625,48.7287025 C50.934495,48.7741374 50.9134615,48.8706852 50.9134615,49.0183486 C50.9134615,49.2000883 50.961538,49.407382 51.0576923,49.6402359 C51.1538466,49.8730898 51.2890616,50.0945817 51.4633413,50.3047182 C51.6376211,50.5148547 51.8539651,50.6909124 52.1123798,50.8328965 C52.3707946,50.9748806 52.662258,51.0458716 52.9867788,51.0458716 C53.3593769,51.0458716 53.7920648,50.9493238 54.2848558,50.7562254 C54.7776467,50.563127 55.2854541,50.2933613 55.8082933,49.9469201 C56.3311324,49.6004788 56.8419446,49.1915707 57.3407452,48.7201835 C57.8395458,48.2487962 58.2872576,47.7348215 58.6838942,47.1782438 C59.0805308,46.6216661 59.3990373,46.031021 59.6394231,45.406291 C59.8798089,44.7815609 60,44.1454816 60,43.4980341 C60,42.8165104 59.891828,42.2003086 59.6754808,41.6494102 C59.4591335,41.0985119 59.1526462,40.6271317 58.7560096,40.2352556 C58.359373,39.8433794 57.872599,39.539538 57.2956731,39.3237221 C56.7187471,39.1079063 56.0697151,39 55.3485577,39 Z" id="Combined-Shape"></path>
                        </g>
                    </g>
                </svg>
			</a>
			<nav>
				<router-link class="spacing" v-for="routes in links" v-bind:key="routes.page" :to="`${routes.page}`">{{routes.text}}</router-link>
				<a class="spacing" href="https://support.get-scatter.com" title="Get the help you need">support</a>
			</nav>
			<a class="mobile-nav" id="mobilenav" @click="openMenu">
				<span></span>
			</a>
		</header>
	</div>
</template>

<script>

    export default {
        name: 'Navigation',
        data() {
            return {
            	subLink:null,
                links: [
                    {
                        text: 'home',
                        page:'/'
                    },
                    {
                        text: 'vote',
                        page:'/vote'
                    },
                    {
                        text: 'apps',
                        page:'/apps'
                    },
                    {
                        text: 'features',
                        page:'/features/overview',
	                    subs:[
	                    	'Stable_Coins',
		                    'Token_Exchange',
		                    'RIDL',
		                    'Asset_Management',
		                    'Hardware_Wallets',
	                    ]
                    }/* ,
                    {
                        id: 3,
                        text: 'bridge',
                        page:'/bridge'
                    }*/,
                    {
                        text: 'connect',
                        page:'/connect'
                    },
                    {
                        text: 'developer',
                        page:'/docs/getting-started'
                    },
                    {
                        text: 'vision',
                        page:'/vision'
                    },
                    {
                        text: 'blog',
                        page:'/blog'
                    }
                ],
                isSideBarOpen: false,
                menuOpen:false,
            }
        },
        props: {
            isOpen: {
                type: Boolean,
                required: false
            },
            right: {
                type: Boolean,
                required: false
            },
            width: {
                type: [String],
                required: false,
                default: '300'
            },
            disableEsc: {
                type: Boolean,
                required: false
            },
            noOverlay: {
                type: Boolean,
                required: false
            },
            onStateChange: {
                type: Function,
                required: false
            },
            burgerIcon: {
                type: Boolean,
                required: false,
                default: true
            },
            crossIcon: {
                type: Boolean,
                required: false,
                default: true
            }
        },
        methods: {
	        linkClicked(link){
	            if(link.hasOwnProperty('subs') && link.subs.length){
	            	this.subLink = link.id;
	            } else {
	            	this.subLink = null;
	            	this.$router.push(link.page);
	            	this.closeMenu();
	            }
	        },
	        subClicked(link, sub){

	        	if(this.$route.name === link.text){
			        window.location.href = `#${sub}`
		        } else {
			        this.$router.push({path:link.page, hash:`#${sub}`});
			        setTimeout(() => {
				        window.location.href = `#${sub}`
			        }, 200);
		        }

		        this.subLink = null;
		        this.closeMenu();



	        },
            openMenu() {
                console.log('click');
                if(this.menuOpen = true){
                    this.$emit('closeMenu');
                } else {
                    this.menuOpen = true;
                    this.$emit('openMenu');
                }
            },

            closeMenu() {
                this.menuOpen = false;
                this.$emit('closeMenu');
            },

            closeMenuOnEsc(e) {
                e = e || window.event;
                if (e.key === 'Escape' || e.keyCode === 27) {
                    this.closeMenu();
                }
            },

            documentClick(e) {
                let element = document.getElementById("mobilenav");
                let target = e.target;

                if(!this.menuOpen) return;

                if (this.menuOpen &&  e.target.parentNode.className !== 'mobile-nav' &&  e.target.className !== 'mobile-nav'
	                &&  e.target.className !== 'mobile-link' && e.target.parentNode.className.indexOf('mobile-navigation') === -1
	                && e.target.className.indexOf('mobile-navigation') === -1) {
                    this.closeMenu();
                }
            }
        },
        mounted() {
            if (!this.disableEsc) {
                document.addEventListener('keyup', this.closeMenuOnEsc);
            }
            if (this.burgerIcon === false) {
                document.querySelector('.bm-burger-button').style.display = 'none';
            }
            if (this.crossIcon === false) {
                document.querySelector('.bm-cross-button').style.display = 'none';
            }
        },
        created: function() {
            document.addEventListener('click', this.documentClick);
        },
        destroyed: function() {
            document.removeEventListener('keyup', this.closeMenuOnEsc);
            document.removeEventListener('click', this.documentClick);
        },
        watch: {
            isOpen: {
                deep: true,
                immediate: true,
                handler(oldValue) {
                    if (oldValue) {
                        this.openMenu();
                    }
                }
            },
            right: {
                deep: true,
                immediate: true,
                handler(oldValue, newValue) {
                    if (oldValue) {
                        this.$nextTick(() => {
                            document.querySelector('.bm-burger-button').style.left = 'auto';
                            document.querySelector('.bm-burger-button').style.right = '36px';
                            document.querySelector('.bm-menu').style.left = 'auto';
                            document.querySelector('.bm-menu').style.right = '0px';
                        });
                    }
                    if (newValue) {
                        if (
                            document.querySelector('.bm-burger-button').hasAttribute('style')
                        ) {
                            document
                                .querySelector('.bm-burger-button')
                                .removeAttribute('style');
                            document.getElementById('sideNav').style.right = 'auto';
                        }
                    }
                }
            }
        }
    }

</script>

<style lang="scss">
	@import "../variables";

    #navigation {
        position:relative;
    }

	.mobile-navigation {
		position:fixed;
		width:320px;
		height:100vh;
		z-index:1001;
		background-color:#60647c;
        background-image:$dark-blue-gradient;
		overflow-y:auto;
		right:-440px;
		transition: 0.25s ease;
		transition-property: right, background;
		padding:20px 0;

		&.open {
			right:0;
		}

		a, .mobile-link {
			cursor: pointer;
			margin:0;
			list-style:none;
			text-align:left;
			font-size:2.2rem;
			animation: FadeIn 0.2s ease-in-out;
			animation-fill-mode: both;
			display:block;
			padding: 16px 40px;
			text-decoration:none;
			color:#fff;
            transition:all 0.24s ease-in-out;

			&:hover,
			&:focus,
			&:active,
			&.router-link-exact-active {
				color: white;
				background:$blue;
                background-image:$blue-gradient;
			}
		}

		.sublinks {
			background:#55586e;
			max-height:0;
			overflow:hidden;
			padding:0;
			transition: 0.08s ease;
			transition-property: max-height, padding;

			&.show {
				max-height:500px;
			}

			.mobile-link {
				font-size: 16px;
				padding:15px 40px;

				&:hover {
					background:rgba(0,0,0,0.05);
				}
			}
		}

		.mobile-close {
			cursor: pointer;
			width:44px;
			height:44px;
			display:block;
			z-index:2;
			position:absolute;
			top:10px;
			right:20px;
            display:none;

			span {
				display:block;
				width:0px;
				height:0px;
				background-color:#fff;
				position:absolute;
				top: 15px;
				left: 15px;
				transform:rotate(45deg);

				&:after {
					content:'';
					display:block;
					width:24px;
					height:2px;
					background-color:#fff;
					position:absolute;
					top:0px;
				}

				&:before {
					content:'';
					display:block;
					width:24px;
					height:2px;
					background-color:#fff;
					position:absolute;
					top:0px;
					transform:rotate(90deg);
				}
			}
		}
	}

	.mobile-navigation.open a:nth-child(1) { animation-delay: .15s }
	.mobile-navigation.open a:nth-child(2) { animation-delay: .25s }
	.mobile-navigation.open a:nth-child(3) { animation-delay: .35s }
	.mobile-navigation.open a:nth-child(4) { animation-delay: .45s }
	.mobile-navigation.open a:nth-child(5) { animation-delay: .55s }
	.mobile-navigation.open a:nth-child(6) { animation-delay: .65s }
	.mobile-navigation.open a:nth-child(7) { animation-delay: .75s }
	.mobile-navigation.open a:nth-child(8) { animation-delay: .85s }

	.header {
		height:112px;
		color: white;
		overflow:auto;

		.mobile-nav {
			cursor: pointer;
			float:left;
			width:44px;
			height:44px;
			display:block;
			position:fixed;
			right:30px;
			top:30px;
			z-index:1000;
            border:1px solid transparent;
            background: $background;
            border-radius:22px;

			span {
				display: block;
                width: 16px;
                height: 1px;
                background-color: #111111;
                position: absolute;
                top: 20px;
                left: 9px;
                transition:all 0.22s ease-in-out;

				&:after {
					content:'';
					display:block;
					width:22px;
					height:1px;
					background-color:$black;
					position:absolute;
					top:6px;
                    transition:all 0.22s ease-in-out;
				}

				&:before {
					content:'';
					display:block;
					width:22px;
					height:1px;
					background-color:$black;
					position:absolute;
					top:-6px;
                    transition:all 0.22s ease-in-out;
				}
			}

            &:hover {
                span {
                    display: block;
                    width: 22px;
                    height: 1px;
                    background-color: $blue;
                    position: absolute;
                    top: 20px;
                    left: 9px;

                    &:after {
                        content:'';
                        display:block;
                        width:16px;
                        height:1px;
                        background-color:$blue;
                        position:absolute;
                        top:6px;
                    }

                    &:before {
                        content:'';
                        display:block;
                        width:16px;
                        height:1px;
                        background-color:$blue;
                        position:absolute;
                        top:-6px;
                    }
                }
            }
		}

		.logo {
			display:block;
			position:fixed;
			left:30px;
			top:30px;
			z-index:1000;
            background:white;
            border-radius:50%;
            height:44px;

            * {
                transition:all 0.22s ease-in-out;
            }

			svg {
				width:44px;
				height:44px;

			}

            &:hover {
                transform:scale(1.1);
            }

            &:hover #logo-circle {
                stroke:$blue;
                stroke-width:2px;
            }

		}

		nav {
			text-align:center;
			margin-top:24px;

			a.button {
				margin-left:20px;
			}

			@media(max-width:$breakpoint-small-desktop){
                left:90px;
            }

            @media(max-width:$breakpoint-tablet){
                display:none;
            }
		}

	}

	a.spacing {

		display:inline-block;
		padding: 1.5rem;
		font-weight:normal;
		text-decoration:none;
		color:$darkgrey;
		position:relative;
		font-size:1.8rem;

        @media(max-width:$breakpoint-small-desktop){
            left:0;
        }

		&:hover,
		&:focus,
		&:active,
		&.router-link-exact-active {
			color: $blue;
		}

		&.button {
			margin-left:2rem;
		}
	}

    .ocean { 
      height: 80px;
      width:100%;
      position:absolute;
      bottom:0;
      left:0;
      background: $background;
	  overflow:hidden;
    }

    .wave {
      background: url(../assets/wave.svg) repeat-x; 
      position: absolute;
      top: 20px;
      width: 6400px;
      height: 60px;
      animation: wave 12s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
      transform: translate3d(0, 0, 0);
    }

    .wave:nth-of-type(2) {
      top: 20px;
      animation: wave 14s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
      opacity: 0.5;
    }

    @keyframes wave {
      0% {
        margin-left: 0;
      }
      100% {
        margin-left: -1600px;
      }
    }

    @keyframes swell {
      0%, 100% {
        transform: translate3d(0,-25px,0);
      }
      50% {
        transform: translate3d(0,5px,0);
      }
    }

</style>