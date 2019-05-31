<template>
    <div class="blog-post">
        <section class="body">
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
                    {{ post.meta.previous_post.title }}
                  </router-link>
                  <router-link v-if="post.meta.next_post" :to="/blog/ + post.meta.next_post.slug" class="blog-nav-right">
                    {{ post.meta.next_post.title }}
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
                <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
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
            console.log(res.data)
            this.post = res.data
          }).catch((res) => {
            console.log(res)
          })
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

    .blog-post {

        .blog-nav {
          margin:0 0 3rem;
          overflow:auto;

          .blog-nav-left {
            float:left;
            font-size:1.4rem;
            font-family: 'Poppins', sans-serif;
            font-weight:bold;
            font-size:.8em;
            text-decoration:none;

            svg {
              float:left;
              width: 18px;
              height: 18px;
              margin-right:8px;
            }
          }

          .blog-nav-right {
            float:right;
            font-size:1.4rem;
            font-family: 'Poppins', sans-serif;
            font-weight:bold;
            font-size:.8em;
            text-decoration:none;

            svg {
              float:right;
              width: 18px;
              height: 18px;
              margin-left:8px;
            }
          }
        }

        p {

          img {
            width:100%;
          }

        }
        
    }


</style>