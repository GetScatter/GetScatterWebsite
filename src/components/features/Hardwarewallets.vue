<template>
    <div class="features_single">
        <section class="doc-page">
          <div class="body-text">
            <div class="">
              <div class="single-column">
                <h2 class="centered" data-aos="fade-up">Hardware Wallets</h2>
                <div class="inner_navigation">
                  <router-link class="list" to="/features/overview">
                    Back to Overview
                  </router-link>
                </div>
                <img data-aos="fade-up" data-aos-offset="200" src="../../assets/hardwarewallet.png" alt="Stabilize your currency." />
                <section data-aos="fade-up" data-aos-offset="200">
                  <h3 class="secondary-header centered"><small>Keep your private keys private.</small></h3>
                  <p>We at Scatter are big fans of hardware wallets and believe them to be a great way to keep our funds safe. They add a welcome extra layer of protection for your precious accounts.</p>
                </section>
              </div>
            </div>
          </div>
        </section>

        

        <section id="future_is_now" class="body">
            <div class="body-text">
                <div class="row">
                    <div class="col-6 centered">
                        <h3 class="secondary-header centered">Stay safer with Scatter</h3>
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