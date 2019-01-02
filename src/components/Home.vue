<template>
  <div id="home">

    <section id="leadin" class="body padded padded-large">
      <div class="body-text">
        <div class="row">
          <div class="col-3">
            <h1>It's your blockchain.</h1>
            <p>Scatter10 provides seamless inter-blockchain functionality in a simple to use interface.</p>
            <a class="button" :href="downloadLink">Download Scatter</a>
            <!-- <div class="secondary-buttons">
              <router-link class="button button-text" to="/Ridl">Read about RIDL</router-link>
              <router-link class="button button-text" to="/docs/getting-started">Get started with our SDKs</router-link>
            </div> -->
          </div>
        </div>

      </div>
    </section>

    <section id="partner-logos" class="dimmed padded padded-large">
      <div class="row">
        <div class="col-6">
          <h2>Partners and Apps</h2>
          <p style="margin-top:-30px; margin-bottom:40px;">
            <router-link class="button button-text" to="/Apps">You can find a full list of Apps using Scatter by clicking here</router-link>
          </p>
          <ul id="partners">
            <carousel :perPageCustom="[[768,4], [1024, 6]]">
              <slide>
                <a class="partner" target="_blank" href="https://www.stateofthedapps.com/"><img src="../assets/logos/sotd.jpg"></a>
              </slide>
              <slide>
                <a class="partner" target="_blank" href="https://eos.bancor.network/"><img src="../assets/logos/bancorX.png"></a>
              </slide>
              <slide>
                <a class="partner" target="_blank" href="https://bloks.io/"><img src="../assets/logos/logo1.png"></a>
              </slide>
              <slide>
                <a class="partner" target="_blank" href="https://www.alohaeos.com/"><img src="../assets/logos/aloha.png"></a>
              </slide>
              <slide>
                <a class="partner" target="_blank" href="https://eostoolkit.io/"><img src="../assets/logos/eostoolkit.png"></a>
              </slide>
              <slide>
                <a class="partner" target="_blank" href="https://everipedia.org/"><img src="../assets/logos/logo4.png"></a>
              </slide>
              <slide>
                <a class="partner" target="_blank" href="https://www.chintai.io/"><img src="../assets/logos/chintai.png"></a>
              </slide>
              <slide>
                <a class="partner" target="_blank" href="https://dice.eosbet.io/"><img src="../assets/logos/eosbet.png"></a>
              </slide>
              <slide>
                <a class="partner" target="_blank" href="https://tronbet.io/"><img src="../assets/logos/tronbet.png"></a>
              </slide>
            </carousel>
          </ul>
        </div>
      </div>
    </section>




    <section id="why-users" class="body padded padded-large">
      <div class="row">
        <div class="col-6">
          <h2>Because it is easy for our users,</h2>
          <img src="../assets/users_mobile.png" class="mobile-only">
        </div>
      </div>
      <div class="row centered-vertically">
        <div class="col-3 desktop-only">
          <img src="../assets/gs_home_users_sig.png" class="desktop-only">
        </div>
        <div class="col-3">
          <h4>Digital Signatures made easy.</h4>
          <p>Signing transactions on a blockchain can be a daunting task for users. Scatter makes it easy for anyone to do, whether they know about blockchain or not.</p>
        </div>
      </div>
      <div class="row centered-vertically">
        <div class="col-3">
          <h4>You Own Your Data. Period.</h4>
          <p>Everything in your Scatter is held on your own device. Scatter actively warns you about applications that are known to leak your data, so you can be aware of the risks of giving your information to them. </p>
        </div>
        <div class="col-3 desktop-only">
          <img src="../assets/gs_home_users_data.png" class="desktop-only">
        </div>
      </div>
      <div class="row centered-vertically">
        <div class="col-3 desktop-only">
          <img src="../assets/gs_home_users_signon.png" class="desktop-only">
        </div>
        <div class="col-3">
          <h4>Single Sign-on for apps.</h4>
          <p>Scatter provides Single Sign-on (SSO) using asymmetric encryption to log you into applications without passwords. Keep hackers at bay by never even giving them the pieces they need to hack your accounts.
          </p>
        </div>
      </div>
    </section>





    <section id="why-devs" class="body padded padded-large">
      <div class="row">
        <div class="col-6">
          <h2>And easy for our developers.</h2>
          <img src="../assets/devs_mobile.png" class="mobile-only">
        </div>
      </div>
      <div class="row centered-vertically">
        <div class="col-3">
          <h4>Streamlined Use.</h4>
          <p>Scatter’s SDKs are easy to implement. Developers can tap into them with libraries they already know such as `eosjs` and `web3`. With a few lines of code you have full web, desktop, and mobile support for your application.</p>
        </div>
        <div class="col-3 desktop-only">
          <img src="../assets/gs_home_devs_streamlined.png" class="desktop-only">
        </div>
      </div>
      <div class="row centered-vertically">
        <div class="col-3 desktop-only">
          <img src="../assets/gs_home_devs_code.png" class="desktop-only">
        </div>
        <div class="col-3 desktop-only">
          <h4>Write code once. Use it everywhere.</h4>
          <p>Every developer’s dream: Scatter’s SDKs are cross platform compatible. You write the code once and instantly support Desktop and Mobile devices. Even better, you are future proof as we can add other devices, like gaming consoles, in the future.
          </p>
        </div>
      </div>
      <div class="row centered-vertically">
        <div class="col-3">
          <h4>Multi-Blockchain Support</h4>
          <p>We don’t believe any single blockchain will be the last. That’s why we are continuously adding support for new blockchains. We take a focus on Smart-Contract centric blockchains and provide a singular API that developers can use no matter what chain they are developing for.</p>
        </div>
        <div class="col-3 desktop-only">
          <img src="../assets/gs_home_devs_blockchains.png" class="desktop-only">
        </div>
      </div>
      <br><br>
      <div class="row">
        <div class="col-6">
          <h4>Get Started Now</h4>
          <p>Check out the <a href="/docs/select-type">Developer Documentation</a> to find out how to import Scatter’s SDKs into your projects. We are constantly adding more SDKs to support more languages and help the ecosystem grow further. </p>

          <p>Come join our very active Scatter Developers telegram channel as well, where we take a hands-on approach to helping get every project off the ground.</p>

          </p>
        </div>
      </div>
    </section>

    <section id="get-started" class="body dimmed padded padded-large">
      <div class="row">
        <div class="col-3">
          <h3>Learn more about RIDL.</h3>
          <a class="button button-primary" href="https://docs.google.com/document/d/1cDcERQUAA3W21XtJhHlqfL2LauiELmOE_b5J2Q3acJg/view">Read the Whitepaper</a>
        </div>
        <div class="col-3">
          <h3>Scatter is available now!</h3>
          <a class="button button-primary" :href="downloadLink">Download Scatter</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    import Footer from './Footer.vue'
    import ScatterLogo from './reusable/ScatterLogo.vue'
    import { Carousel, Slide } from 'vue-carousel';

    const LOGOS = [
        {url:''}
    ];

    export default {
        name: 'Home',
        components: { Footer, ScatterLogo,Carousel, Slide },
        data(){return {
          LOGOS,
        }}
    }

</script>

<style lang="scss">
  @import "../variables";

  #leadin h4 {
    text-align: center;
    color:lighten($darkgrey, 40%);
  }

  #partner-logos {
    text-align: center;
    overflow: auto;
  }

  #why-users {
    border-top:1px solid rgba(0,0,0,0.12);
  }

  #partners {
    margin:0 auto;
    padding:0;
    list-style:none;
    max-width:920px;

    .VueCarousel-slide {
      padding:2rem;
    }


  }


</style>
