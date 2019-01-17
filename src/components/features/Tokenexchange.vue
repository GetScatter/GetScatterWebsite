<template>
    <div class="features_single">
        <section class="doc-page">
          <div class="body-text">
            <div class="">
              <div class="single-column">
                <h2 class="centered" data-aos="fade-up">Token Exchange</h2>
                <div class="inner_navigation">
                  <router-link class="list" to="/features/overview">
                    Back to Overview
                  </router-link>
                </div>
                <img data-aos="fade-up" data-aos-offset="200" src="../../assets/exchange.png" alt="Stabilize your currency." />
                <section data-aos="fade-up" data-aos-offset="200">
                  <h3 class="secondary-header centered"><small>What you need, when you need it.</small></h3>
                  <p>The more that we ourselves used Scatter, the more we realized just how integral the task of exchanging tokens is for the modern user. With multiple blockchains, applications with their own tokens, and endless permutations, it became obvious to us that having direct access to a Token Exchange inside of Scatter was a critical step for the application.</p>
                  <p>You now have the option to easily move funds from one type of token to another. For off-change exchanges, for example ETH to BTC, we are using an external service called Coinswitch which takes a nominal fee of half a percent. Atomic swaps, however, are totally free and it means that tokens within a blockchain are completely liquid for you.</p>
                </section>
              </div>
            </div>
          </div>
        </section>

        

        <section id="future_is_now" class="body">
            <div class="body-text">
                <div class="row">
                    <div class="col-6 centered">
                        <h3 class="secondary-header centered">Exchange your tokens easily.</h3>
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