<template>
    <div id="tutorial">

        <section id="leadin" class="body padded padded-large">
            <div class="body-text">
                <h1>Setting up Scatter</h1>


                <div class="row">
                    <div class="col-6">
                        <youtube :video-id="'aDKWCcfaglU'" @ready="ready" @playing="playing"></youtube>
                    </div>
                </div>


                <div class="row">
                    <div class="col-6">
                        <h3 class="centered">Have questions? We have answers.</h3>
                        <VueFaqAccordion 
                            :items="myItems"
                        />
                    </div>
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
    import ScatterLogo from './reusable/ScatterLogo.vue'
    import VueFaqAccordion from 'vue-faq-accordion'

    export default {
        name: 'Tutorial',
        methods: {
            ready (event) {
              this.player = event.player
            },
            playing (event) {},
            change () {},
            stop () {
              this.player.stopVideo()
            },
            pause () {
              this.player.pauseVideo()
            }
        },
        data () {
            return {
              myItems: [
                  {
                    title: 'Can I still use the chrome extension?',
                    value: '<p>We have moved away from the chrome extension to a dedicated desktop application, with mobile coming soon. The extension is still available to support systems like Chromebooks, but should not be used if you can use the desktop version. For more information about why you should no longer be using the extension <a href="https://medium.com/@nsjames/the-blockchain-isnt-just-for-web-applications-silly-rabbit-926a4ea5ccd1">read this article</a>.</p> <p><strong>Please note</strong> that the Scatter desktop version and extension version have incompatible backup formats.</p>',
                    category: 'Support'
                  },
                  {
                    title: 'Is there a mobile version?',
                    value: '<p>There is an <strong>alpha</strong> version <a href="https://play.google.com/store/apps/details?id=com.scatternative">available for Android</a>, with iOS in the works.</p><p>Under no circumstances should you be using keys with large holdings in mobile yet. Mobile is a new development and is in Alpha. Create a new account and move it some EOS to use in the mobile app if you choose to participate in mobile alpha. At Scatter we never release projects into production without real world testing first. We value your security above all else and always make sure to take precautions with new software. Follow the safety guidelines please, we don\'t want you getting harmed.</p>',
                    category: 'Support'
                  },
                  {
                    title: 'Why can\'t I connect to apps using Scatter Desktop?',
                    value: `
                            Make sure that you have opened Scatter Desktop before opening the application you wish to connect it with.
                            Some applications also do not yet support Scatter Desktop, if you find one of these applications send them support mail informing
                            them of the importance of upgrading their application to add desktop and mobile support.
                            <br><br>
                            <b>You can not use the extension and desktop at the same time!</b> If you have the extension installed and are trying to use desktop, go to
                            chrome://extensions in Chrome and disable the plugin.
                            <br><br>
                            You can also check your console for errors from within your browser. ( right click website, click inspect, then click the console panel ).
                            If there are errors please post a screenshot of them to our <a href="https://t.me/Scatter">Scatter Telegram group</a>.`,
                    category: 'Support'
                  },
                  {
                    title: 'Why can\'t I import my EOSIO account to Scatter Desktop?',
                    value: 'Check if your public key is correct and has an account on it on <a href="bloks.io">bloks.io</a>, and if you can reach <a href="https://nodes.get-scatter.com">https://nodes.get-scatter.com</a>. If both of those are correct please post an image to the <a href="https://t.me/Scatter">Scatter Telegram group</a> with your issue and one of our staff or community moderators will help you.',
                    category: 'Support'
                  },
                  {
                    title: 'Why is Scatter Desktop not working from Firefox, Safari or Edge?',
                    value: `This is a known issue. Scatter Desktop now supports Firefox, Safari, and Edge from version 9.2.0.
                            Applications will also need to update their version of the Scatter SDKs to complete support for all browsers so it might take a bit for all applications to become compliant.
                            <br><br>
                            Firefox also has a fix that you the user can do. Going to Firefox's about:config and toggling network.websocket.allowInsecureFromHTTPS will get rid of the SecurityError.`,
                    category: 'Support'
                  },
                  {
                    title: 'What about the Airdrop?',
                    value: 'This is going to happen soon. Please be patient as we make sure we dot all of our legal i\'s and cross all of our legal t\'s.',
                    category: 'RIDL'
                  },
                  {
                    title: 'What about the Reserved RIDL Identities?',
                    value: 'The identities you have reserved will be seeded into RIDL when it launches and you will then be able to claim them from Scatter Desktop.',
                    category: 'RIDL'
                  },
                  {
                    title: 'Will there be an open Beta for the RIDL Testnet?',
                    value: 'There will be an open Beta Q4-2018 on a private testnet. You will be able to test out the mining system as well as the reputation system, but the RIDL gained from mining reputation will not exist on the mainnet yet.',
                    category: 'RIDL'
                  }
                ]
            }
        },
        components: {
            ScatterLogo,
            VueFaqAccordion
        }
    }

</script>
<style lang="scss">

    @import "../variables";

    .faq {
        margin: 6rem 0 !important;
    }

    .faq__nav,
    .accordion__item,
    .accordion {
        border: 2px solid transparent !important;
    }

    .accordion__title {
        padding:2rem 0 !important;
        font-size: 2rem !important;
    }

    .accordion__value {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }

    .faq__nav-item {
        font-size: 2rem;
        height:100px !important;
        font-weight:normal;
        border:2px solid transparent !important;
        border-bottom: 2px solid #eeeeee !important;
    }

    .faq__nav-item_active,
    .faq__nav-item:hover{
        color: $dark-blue !important;
        border-bottom:2px solid $dark-blue !important;
    }

    .accordion__title:hover {
        color: $dark-blue !important;
    }

    #founders section.body .row {
        p {
            text-align:left;
        }

        .position {
            font-size:1.6rem;
            opacity:0.5;
            margin-top:-2rem;
        }
    }


</style>