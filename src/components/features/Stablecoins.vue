<template>
    <div class="features_single">
        <div class="inner_navigation">
          <router-link to="/features/overview">
            <i class="far fa-arrow-left"></i>
          </router-link>
        </div>
        <section class="doc-page">
          <div class="body-text">
            <div class="row">
              <div class="col-6">
                <h2 class="centered">Stablecoins</h2>
                <img src="../../assets/screenshot_stabilize.png" alt="Stabilize your currency." />
                <h3><small>Ride out market volatility</small></h3>
                <p>In our new token panel, you’ll find an exciting feature which we are calling <strong>Stabilize</strong>. As a byproduct of our built in token exchange, we can now swap your tokens for a stable coin of equal value.</p>

                <p>This means that you get to ride out the market volatility by swapping to a stable currency when you think the time is right. After things settle down, and the currency is back on the rise, simply swap back.</p>

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

    .features_single {
      max-width:720px;
      margin:0 auto;
    }

</style>