<template>
    <div>
        <section class="body" id="bridge_main">
          <div class="body-text">
            <div class="row">
              <div class="col-6">
                <h2>Unblock the chain</h2>
                <p>
                    We understand that Scatter itself and all other comparable wallets are roadblocks to mass adoption.
                    Because of this, our SDKs offer a fallback service called <b>Scatter Bridge</b> which facilitates a blockchain-less experience
                    for your users, without any modifications to your existing code in the case that they don't have any compatible wallets.
                </p>
                <h4>
                    The only thing new non-blockchain users need in order to use your application is an <b>Email</b>, a <b>Mobile Phone</b> or a social account like <b>Facebook</b>.
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section class="body blockchains_body">
          <div class="body-text">
            <div class="row">
              <div class="col-4">
                <h3 class="secondary-header">Anywhere.</h3>
                <p>
                    Because Scatter Bridge is a fully custodial service it allows users to use apps with their accounts <b>anywhere</b>.
                    That means they can use it on their laptops, desktops, mobile phones, or even a smart watch.
                </p>
                <p>
                    Unlike other alternatives, the account isn't only available per-app. Instead it is a global account that they
                    can use on all Scatter supporting apps which raises the probability that they already have one when reaching a new
                    application.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="body blockchains_body">
          <div class="body-text">
            <div class="row">
              <div class="col-4">
                <h3 class="secondary-header">Safety & Limits.</h3>
                <p>
                    Most bridge accounts (depending on blockchain) are multi-sig accounts. We control one key and the user controls the other key.
                    Users can recover their keys if they lose them at any point in time using their original registration method.
                </p>
                <p>
                    Since Bridge is a fully custodial service we impose holding and spending limitations during a given time-frame.
                    This makes it so accounts can't be "cleaned out" by someone who has gotten a hold of your Facebook account for example, and also pushes users
                    to learn about blockchain and move to a safer non-custodial platform like Scatter Desktop.
                </p>
                <h4>
                    When logging into each app you also set your own limitations on it to ensure that an application never has more access to
                    your account or it's assets than you are willing to give it.
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section class="body blockchains_body">
          <div class="body-text">
            <div class="row">
              <div class="col-4">
                <h3 class="secondary-header">Easy to fund</h3>
                <p>
                    Each Bridge account is an actual blockchain account/address. These aren't fake accounts waiting to be created, but
                    fully functional ones. You can easily send funds to your accounts from <b>any exchange</b>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="body blockchains_body">
          <div class="body-text">
            <div class="row">
              <div class="col-4">
                <h3 class="secondary-header">Take ownership.</h3>
                <p>
                    The goal of the Scatter Bridge service isn't to keep users using the service. Instead, it is meant as the middle-ground between
                    first using a blockchain and learning about how to keep your assets safe.
                    <br><br>

                    <b>We believe the best way to educate users about blockchain is to get them using it first, and give them a reason to educate themselves.</b>
                    <br><br>

                    We offer clear and easy steps that a user can take to export their accounts from bridge right into Scatter Desktop with a single file once they
                    are ready to take the leap to full ownership of their private keys.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="body">
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
    import Footer from './Footer.vue'
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name: 'Connect',
        components: { Footer,Carousel, Slide },
    }

</script>
<style lang="scss">
    @import "../variables";

    #bridge_main {
        background-image:url('../assets/features_bg.png');
        background-size:100%;
        background-position:top center;
        background-repeat:no-repeat;
        background-color:$background;
        text-align:left;
        padding-top:150px;

        h1 {
            margin-top: 2rem;
        }

        @media (max-width: $breakpoint-small-desktop) {
            h1 {
                margin-top: 6rem;
            }
        }

        @media (max-width: $breakpoint-mobile) {
            h1 {
                margin-top: 0rem;
            }
        }

        @media (max-width: $breakpoint-tablet) {
            background-image:url('../assets/apps_bg.png');
        }

    }



</style>