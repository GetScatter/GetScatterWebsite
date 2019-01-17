<template>
    <div class="features_single">
        <section class="doc-page">
          <div class="body-text">
            <div class="">
              <div class="single-column">
                <h2 class="centered" data-aos="fade-up">Asset Managment</h2>
                <div class="inner_navigation">
                  <router-link class="list" to="/features/overview">
                    Back to Overview
                  </router-link>
                </div>
                <img data-aos="fade-up" data-aos-offset="200" src="../../assets/screenshot2.png" alt="Asset Managment." />
                <section data-aos="fade-up" data-aos-offset="200">
                  <h3 class="secondary-header centered"><small>Play smart.</small></h3>
                  <p>Another feature that we know you all have been clamoring for is an easy way to manage your assets intelligently. We’ve added a fantastic graph and token overview that let you better understand which tokens are worth HODLing and which are just shitcoins.</p>
                </section>
              </div>
            </div>
          </div>
        </section>

        

        <section id="future_is_now" class="body">
            <div class="body-text">
                <div class="row">
                    <div class="col-6 centered">
                        <h3 class="secondary-header centered">Manage your assets</h3>
                        <p><a href="/download" class="button">Download Scatter</a></p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>

    export default {
        name: 'FeaturesStablecoins'
    }

</script>
<style lang="scss">
    @import "../../variables";

    .single-feature {
      max-width:720px;
      margin:0 auto;

      h2 {
        margin-top:0 !important;
      }
    }

    .inner_navigation {
      width:100%;
      padding:0 0 3rem;
      text-align:center;

      .previous {
        float:left;
      }

      .next {
        float:right;
      }
    }

</style>