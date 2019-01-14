<template>
    <div class="features_single">
        <section class="single-feature doc-page">
          <div class="body-text">
            <div class="row">
              <div class="col-6">
                <h2 class="centered" data-aos="fade-up">Stablecoins</h2>
                <div class="inner_navigation">
                  <router-link class="previous" to="">
                    <i class="far fa-arrow-left"></i>
                  </router-link>
                  <router-link class="list" to="/features/overview">
                    Back to Overview
                  </router-link>
                  <router-link class="next" to="">
                    <i class="far fa-arrow-right"></i>
                  </router-link>
                </div>
                <img data-aos="fade-up" data-aos-offset="200" src="../../assets/screenshot_stabilize.png" alt="Stabilize your currency." />
                <section data-aos="fade-up" data-aos-offset="200">
                  <h3><small>Ride out market volatility</small></h3>
                  <p>In our new token panel, you’ll find an exciting feature which we are calling <strong>Stabilize</strong>. As a byproduct of our built in token exchange, we can now swap your tokens for a stable coin of equal value.</p>
                  <p>This means that you get to ride out the market volatility by swapping to a stable currency when you think the time is right. After things settle down, and the currency is back on the rise, simply swap back.</p>
                </section>
              </div>
            </div>
          </div>
        </section>

        

        <section id="future_is_now" class="body">
            <div class="body-text">
                <div class="row">
                    <div class="col-6 centered">
                        <h2>The future is now.</h2>
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