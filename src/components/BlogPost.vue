<template>
    <div class="blog-post">
        <section class="body" v-if="post && post.meta">
            <div class="body-text">
                <div class="row">
                    <div class="single-column blockchains_body" data-aos="fade-up">
                        <div class="blog-nav">
                            <router-link v-if="post.meta.previous_post" :to="/blog/ + post.meta.previous_post.slug" class="blog-nav-left">
                                <svg width="25px" height="23px" viewBox="0 0 25 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Group-19" transform="translate(0.500000, 0.500000)" stroke="#00A8FF" stroke-width="2">
                                            <polyline id="Path-3-Copy-2" stroke-linecap="round" stroke-linejoin="round" transform="translate(6.500000, 11.000000) rotate(90.000000) translate(-6.500000, -11.000000) " points="-4 5 7 17 17 5"></polyline>
                                            <path d="M2,11.5 L24,11.5" id="Path-8"></path>
                                        </g>
                                    </g>
                                </svg>
                                <span>{{ post.meta.previous_post.title }}</span>
                            </router-link>
                            <router-link v-if="post.meta.next_post" :to="/blog/ + post.meta.next_post.slug" class="blog-nav-right">
                                <span>{{ post.meta.next_post.title }}</span>
                                <svg width="25px" height="23px" viewBox="0 0 25 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Group-19-Copy-2" transform="translate(12.000000, 11.500000) scale(-1, 1) translate(-12.000000, -11.500000) translate(0.000000, 0.500000)" stroke="#00A8FF" stroke-width="2">
                                            <polyline id="Path-3-Copy-2" stroke-linecap="round" stroke-linejoin="round" transform="translate(6.500000, 11.000000) rotate(90.000000) translate(-6.500000, -11.000000) " points="-4 5 7 17 17 5"></polyline>
                                            <path d="M2,11.5 L24,11.5" id="Path-8"></path>
                                        </g>
                                    </g>
                                </svg>
                            </router-link>
                        </div>
                        <p><img v-bind:src="post.data.featured_image" /></p>
                        <h2>{{ post.data.title }}</h2>
                        <div v-html="post.data.body"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
	import { butter } from '@/buttercms'
	export default {
		name: 'blog-post',
		data() {
			return {
				post: {}
			}
		},
		methods: {
			getPost() {
				butter.post.retrieve(this.$route.params.slug)
					.then((res) => {
						this.post = res.data
					}).catch((res) => {})
			}
		},
		watch: {
			$route(to, from) {
				this.getPost()
			}
		},
		created() {
			this.getPost()
		}
	}
</script>

<style lang="scss">
    @import "../variables";

    .post-sig {
        margin-top:50px;
        border:5px solid $lightgrey;
        border-radius:4px;
        padding:20px 30px;
        display:flex;
        justify-content: space-between;
        align-items: center;

        svg {
            height:50px;
            width:50px;
        }

        .author {
            font-size: 18px;
            font-weight: bold;
        }

        .date {
            font-size: 9px;
            font-weight: bold;
            color:#777;
        }

        .details {
            font-size: 11px;
            margin-top:10px;
        }
    }

    .blog-post {

        .blog-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 1rem;
            background: rgba(255,255,255,0.96);
            border-top:1px solid rgba(0,0,0,0.12);

            .blog-nav-left {
                float:left;
                font-size:1.4rem;
                font-family: 'Poppins', sans-serif;
                font-weight:bold;
                font-size:.6em;
                line-height:1.72rem;
                text-decoration:none;

                @media(max-width:$breakpoint-tablet){
                    width:50%;
                    whitespace:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                }

                svg {
                    float:left;
                    width: 18px;
                    height: 18px;
                    margin-right:8px;

                    @media(max-width:$breakpoint-tablet){
                        display:none;
                    }
                }
            }

            .blog-nav-right {
                float:right;
                font-size:1.4rem;
                font-family: 'Poppins', sans-serif;
                font-weight:bold;
                font-size:.6em;
                line-height:1.72rem;
                text-decoration:none;
                text-align:right;

                @media(max-width:$breakpoint-tablet){
                    width:50%;
                    whitespace:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                }

                svg {
                    float:right;
                    width: 18px;
                    height: 18px;
                    margin-left:8px;

                    @media(max-width:$breakpoint-tablet){
                        display:none;
                    }
                }
            }
        }

        p {

            img {
                width:100%;
                border-radius:20px;
            }

        }

        li {
            margin: 0 0 2rem 2rem;
            line-height: 1.4em;
        }

    }


</style>