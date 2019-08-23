<template>
	<div id="navigation">
		<div class="mobile-navigation" :class="{'open':menuOpen}">

			<section v-for="link in links" :key="link.page" @click="linkClicked(link)">
				<figure class="mobile-link">{{link.text}}</figure>
				<section class="sublinks" :class="{'show':subLink === link.id}">
					<figure class="mobile-link" v-for="sub in link.subs" @click="subClicked(link, sub)">{{sub.replace('_', ' ')}}</figure>
				</section>
			</section>

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
				        <g id="scatter_logo" stroke="#111111">
				            <g id="Group">
				                <path d="M1.49992143,21.9739645 C1.49992143,33.1643901 10.6291956,42.239645 21.8951595,42.239645 C33.1611234,42.239645 42.2903976,33.1643901 42.2903976,21.9739645 C42.2903976,10.7835389 33.1611234,1.70828402 21.8951595,1.70828402 C10.6291956,1.70828402 1.49992143,10.7835389 1.49992143,21.9739645 Z" id="logo-circle" stroke-width="1"></path>
				                <path d="M21.0030801,34 C20.3157211,34 19.7422658,33.92424 19.2989862,33.7750794 C18.8520323,33.6243459 18.4990358,33.4573595 18.2502323,33.2780522 C17.952088,33.0636174 17.8200752,32.9034467 17.7615486,32.8069773 C17.6912118,32.6908469 17.6602426,32.6281942 17.6476449,32.5996204 C17.6534189,32.4551784 17.6898995,32.2965806 17.7560372,32.1272348 C17.8355598,31.9240723 17.9355536,31.734017 18.0536565,31.5620498 C18.1704472,31.392704 18.2958987,31.2495727 18.4273867,31.1373746 C18.5250184,31.0537502 18.5803956,31.0322543 18.5987671,31.0270114 C18.6006043,31.0343515 18.6237,31.060566 18.6538818,31.1208594 L18.6809143,31.1748613 L18.8940244,31.3879854 C19.0074032,31.5017564 19.1570003,31.6121195 19.350689,31.7251041 C19.5359794,31.8338943 19.765624,31.9329852 20.0330615,32.0197553 C20.3112595,32.1104575 20.6377484,32.156595 21.0030801,32.156595 C21.8109041,32.156595 22.4846156,31.9020521 23.0058432,31.4008305 C23.53127,30.8959388 23.7976577,30.2112156 23.7976577,29.365011 C23.7976577,28.7809515 23.6575089,28.2498453 23.3808856,27.7874212 C23.119222,27.3504252 22.7733117,26.9399058 22.3523404,26.5673975 C21.9439667,26.2066858 21.4747045,25.8522655 20.9571512,25.5133117 C20.4516707,25.1824845 19.9354297,24.8377636 19.4081658,24.4788868 C18.8913999,24.1278744 18.377521,23.7427831 17.8807014,23.3346231 C17.4006786,22.940881 16.9681595,22.4816027 16.5944293,21.969371 C16.2233237,21.4613336 15.9188806,20.8775363 15.6902859,20.2344941 C15.4637907,19.5977435 15.3488372,18.8537754 15.3488372,18.0232995 C15.3488372,17.3139346 15.4729765,16.5880546 15.7175808,15.8658446 C15.965072,15.1349838 16.3117697,14.4290268 16.7482256,13.7665859 C17.187306,13.1007372 17.7124703,12.4689673 18.3098086,11.88884 C18.9060972,11.3094991 19.5606498,10.7985781 20.2556199,10.3697086 C20.9474405,9.94319838 21.6786288,9.60398251 22.4292385,9.36149821 C23.1703999,9.12163537 23.924159,9 24.6697821,9 C25.2941529,9 25.8613094,9.09909088 26.3557669,9.2941269 C26.842351,9.48680361 27.2578108,9.76022104 27.5900737,10.1070391 C27.9241737,10.4559544 28.1868871,10.8837753 28.3706027,11.3781811 C28.5566805,11.8794027 28.6511628,12.4511414 28.6511628,13.0779305 C28.6511628,13.6722137 28.5451326,14.2646618 28.3359592,14.8390219 C28.1215368,15.4275378 27.834153,15.9906257 27.4822063,16.5122946 C27.1255355,17.0413036 26.7174243,17.5362337 26.2694206,17.9839777 C25.8193172,18.4335567 25.3529419,18.8280852 24.8836796,19.1568153 C24.4194039,19.4821374 23.9632642,19.7387776 23.5278581,19.9188713 C23.1147603,20.0900521 22.7541528,20.1770843 22.4562709,20.1770843 C22.2174406,20.1770843 22.0116791,20.1246553 21.8271761,20.0174379 C21.6266635,19.9010454 21.4584325,19.7568656 21.3261572,19.5877819 C21.1865333,19.4097854 21.0768288,19.2205165 21.0007181,19.0249562 C20.9390421,18.8681934 20.9036112,18.7289943 20.8939005,18.6094561 C20.9051859,18.6120776 20.9169962,18.6149612 20.929069,18.6178447 C21.0694802,18.6532343 21.2314124,18.6710602 21.4085668,18.6710602 C21.9460663,18.6710602 22.5376307,18.4896558 23.1672505,18.1323519 C23.7690505,17.7905145 24.3417185,17.3493242 24.8695073,16.8218881 C25.3980835,16.294452 25.8479244,15.7048874 26.2074821,15.0699718 C26.5817372,14.4075309 26.7714892,13.7487601 26.7714892,13.1117473 C26.7714892,12.4367234 26.5964344,11.88884 26.2505241,11.4827771 C25.8896541,11.0586261 25.3009766,10.843405 24.5007637,10.843405 C24.0357007,10.843405 23.5273332,10.93201 22.9895712,11.1068609 C22.4657192,11.2775174 21.9326813,11.5181667 21.405155,11.8225172 C20.8789408,12.1266056 20.3640121,12.4988518 19.8745411,12.9295563 C19.3821832,13.3626202 18.9423154,13.8465402 18.5667481,14.367947 C18.1888188,14.8930238 17.8801765,15.4673839 17.650007,16.0750364 C17.4151134,16.6952719 17.2959607,17.3503728 17.2959607,18.0232995 C17.2959607,18.7394801 17.4298107,19.3916973 17.6940988,19.9623874 C17.952088,20.5199702 18.2987857,21.0332505 18.7244811,21.4880724 C19.1378413,21.9305735 19.6147147,22.345025 20.1417162,22.7193683 C20.6471967,23.0785072 21.1731483,23.4413162 21.7048739,23.7973093 C22.2279386,24.1472732 22.7457543,24.5127036 23.2441487,24.8833768 C23.7278457,25.2433022 24.1656139,25.6451708 24.5459053,26.0782346 C24.9177983,26.5021234 25.2209291,26.9805383 25.4466369,27.4987994 C25.6668332,28.0052639 25.7783749,28.5990227 25.7783749,29.2640851 C25.7783749,29.9071272 25.6547605,30.5247413 25.4114685,31.0998878 C25.1671266,31.6763451 24.8272527,32.183596 24.4023446,32.6085334 C23.9766492,33.0334707 23.4651323,33.3758323 22.8817039,33.6253945 C22.3011624,33.8739082 21.6691806,34 21.0030801,34" id="Fill-4" fill="#111111"></path>
				            </g>
				        </g>
				    </g>
				</svg>
			</a>
			<nav>
				<router-link class="spacing" v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`">{{routes.text}}</router-link>
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
                        id: 0,
                        text: 'home',
                        page:'/'
                    },
                    {
                        id: 1,
                        text: 'vote',
                        page:'/vote'
                    },
                    {
                        id: 1,
                        text: 'apps',
                        page:'/apps'
                    },
                    {
                        id: 2,
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
                        id: 4,
                        text: 'connect',
                        page:'/connect'
                    },
                    {
                        id: 5,
                        text: 'developer',
                        page:'/docs/getting-started'
                    },
                    {
                        id: 6,
                        text: 'vision',
                        page:'/vision'
                    },
                    {
                        id: 7,
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
				background:#blue;
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