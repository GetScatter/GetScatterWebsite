<template>
    <div id="blog">
        <section class="body">
            <div class="body-text">
                <div v-masonry transition-duration="0.3s" item-selector=".item">
                    <div v-masonry-tile origin-left="true" class="item" v-for="(post,index) in posts" :key="post.slug + '_' + index">
                        <div class="wrapper">
                            <router-link :to="'/blog/' + post.slug">
                                <article class="media">
                                    <figure>
                                        <img class="single-image" v-if="post.featured_image" :src="post.featured_image" alt="">
                                        <img class="single-image" v-else src="http://via.placeholder.com/250x250" alt="">
                                        <svg width="44px" height="12px" viewBox="0 0 44 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <path d="M12,3 L12,9 C12,9.83333333 11.7083333,10.5416667 11.125,11.125 C10.5416667,11.7083333 9.83333333,12 9,12 L3,12 C2.16666667,12 1.45833333,11.7083333 0.875,11.125 C0.291666667,10.5416667 0,9.83333333 0,9 L0,3 C0,2.16666667 0.291666667,1.45833333 0.875,0.875 C1.45833333,0.291666667 2.16666667,0 3,0 L9,0 C9.83333333,0 10.5416667,0.291666667 11.125,0.875 C11.7083333,1.45833333 12,2.16666667 12,3 Z M28,3 L28,9 C28,9.83333333 27.7083333,10.5416667 27.125,11.125 C26.5416667,11.7083333 25.8333333,12 25,12 L19,12 C18.1666667,12 17.4583333,11.7083333 16.875,11.125 C16.2916667,10.5416667 16,9.83333333 16,9 L16,3 C16,2.16666667 16.2916667,1.45833333 16.875,0.875 C17.4583333,0.291666667 18.1666667,0 19,0 L25,0 C25.8333333,0 26.5416667,0.291666667 27.125,0.875 C27.7083333,1.45833333 28,2.16666667 28,3 Z M44,3 L44,9 C44,9.83333333 43.7083333,10.5416667 43.125,11.125 C42.5416667,11.7083333 41.8333333,12 41,12 L35,12 C34.1666667,12 33.4583333,11.7083333 32.875,11.125 C32.2916667,10.5416667 32,9.83333333 32,9 L32,3 C32,2.16666667 32.2916667,1.45833333 32.875,0.875 C33.4583333,0.291666667 34.1666667,0 35,0 L41,0 C41.8333333,0 42.5416667,0.291666667 43.125,0.875 C43.7083333,1.45833333 44,2.16666667 44,3 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>
                                            </g>
                                        </svg>
                                    </figure>
                                    <h4>{{ post.title }}</h4>
                                    <p><small>{{ post.published }}</small></p>
                                    <p>{{ post.summary }}</p>
                                </article>
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script>

	import { butter } from '@/buttercms'

	export default {
		name: 'blog-home',
		data() {
			return {
				page_title: 'Blog',
				posts: []
			}
		},
		methods: {
			getPosts() {
				butter.post.list({
					page: 1,
					page_size: 10
				}).then((res) => {
					this.posts = res.data.data
				})
			}
		},
		created() {
			this.getPosts()
		}
	}

</script>
<style lang="scss">
    @import "../variables";

    #blog {
        margin:0 12rem;

        .item {
            width:33%;
            padding:1rem;

            .wrapper {
                padding:2rem;
                border:1px solid $lightgrey;
                border-radius:3px;

                &:hover {
                    border:1px solid $blue;
                }

                @media(max-width:$breakpoint-tablet){
                    width:50%;
                }

                @media(max-width:$breakpoint-mobile){
                    width:100%;
                }

                a {
                    text-decoration:none;
                }

                article {
                    margin-bottom:3rem;
                }

                &:hover {
                    figure {
                        img {
                            opacity:0.4;
                        }
                    }

                    svg {
                        opacity:1;
                    }
                }

                figure {
                    position:relative;
                    background:$blue;

                    img {
                        transition: opacity 0.12s ease-in-out;
                    }

                    svg {
                        position:absolute;
                        top:50%;
                        left:50%;
                        opacity:0;
                        transition: opacity 0.12s ease-in-out;
                        z-index:0;
                        margin-top:-6px;
                        margin-left:-22px;
                    }

                }

                .single-image {
                    width:100%;
                }

                h4 {
                    margin-bottom:1rem;
                }

                p {
                    text-decoration:none;
                    color:$black;
                    border-bottom:0;
                    font-size:0.8em;
                    opacity:0.7;
                }

            }

        }

    }


</style>