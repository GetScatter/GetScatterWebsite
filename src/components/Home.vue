<template>
    <div id="home">
        <section id="lead-in" data-aos="fade-up">
            <section class="lead-content">
                <div class="container">
                    <h1>
                        Scatter<br>Meteoric
                    </h1>
                    <h3>
                        A wallet for your digital currencies and assets.
                    </h3>
                    <router-link to="/download" alt="Get Started" class="button">Download Scatter Desktop</router-link>
                    <p class="low-key">Available for Windows, MacOS, and Linux. <a href="https://github.com/GetScatter">Scatter is Open-Source</a></p>
                </div>
            </section>
            <section class="lead-images">
                <div class="web-image">
                    <img src="../assets/scatter_desktop.png">
                </div>
                <!-- <div class="mobile-image">
                    <img src="../assets/mobile_scatter_simple_exchange_dark.png">
                </div> -->
            </section>
        </section>
        <section class="full-width" id="to-do" data-aos="fade-up">
            <section class="half-width" id="bridge-box">
                <h3>Scatter Bridge</h3>
                <h5>Our web wallet is coming soon</h5>
                <img src="../assets/scatter_simple_apps.png">
                <a href="https://mailchi.mp/get-scatter.com/scatterbridge" alt="Sign up to be notified" class="button button-small">Sign up to be notified</a>
            </section>
            <section class="half-width" id="vote">
                <h3>Vote for Scatter</h3>
                <h5>Our block producer canditate is live</h5>
                <img src="../assets/vote.png">
                <router-link to="/vote" class="button button-small">Learn more</router-link>
            </section>
        </section>
        <section class="full-width standard-padding" id="blockchain-for-everyone" data-aos="fade-up">
            <section class="half-width">
                <h1>Blockchain for everyone</h1>
                <h3>Connecting to decentralized apps is hard. Most people don’t have the time to learn all the concepts necessary to make it safe to store their assets digitally. Let us show you how easy it can be.</h3>
                <router-link to="/bridge" alt="Learn more about Bridge" class="button">LEARN MORE ABOUT BRIDGE</router-link>
            </section>
            <section class="half-width">
                <img src="../assets/scatter_simple_start_people.png">
            </section>
        </section>
        <section class="full-width standard-padding" id="empowering-developers" data-aos="fade-up">
            <section class="half-width">
                <img src="../assets/scatter_simple_start_devs.png">
            </section>
            <section class="half-width">
                <h1>Empowering Developers</h1>
                <h3>We’re certain that your users will love how slick, sleek, and simple Scatter Bridge is to use. Our SDKs are straightforward to integrate into your web, mobile, Unity, and Unreal applications.</h3>
                <router-link to="/docs/getting-started" alt="READ OUR DOCUMENTATION" class="button">READ OUR DOCUMENTATION</router-link>
            </section>
        </section>
        <section class="full-width standard-padding" id="card-set" data-aos="fade-up">
            <section class="half-width">
                <h1 class="huge">Super simple.</h1>
                <div class="card">
                    <img src="../assets/card_cart.png">
                    <h3>Our Marketplace will make obtaining digital assets easy</h3>
                    <p>We believe in a future that empowers developers and users to create real digital economies as alternatives to the advertising heavy options availabe today.</p>
                </div>
                <div class="card">
                    <img src="../assets/card_exchange.png">
                    <h3>We are providing unparalled access to digital assets</h3>
                    <p>A built-in exchange and purchasing with credit cards means that it is a matter of a couple of clicks to complete a purchase.</p>
                </div>
            </section>
            <section class="half-width">
                <div class="card">
                    <img src="../assets/card_wallet.png">
                    <h3>Keep your private keys safe</h3>
                    <p>If you are not in control of your private keys, then you are not in control of your assets. Scatter makes sure that your accounts are secure and your keys are never exposed by only allowing signed transactions.</p>
                </div>
                <div class="card">
                    <img src="../assets/card_identity.png">
                    <h3>Identity verification made friendly and easy to complete</h3>
                    <p>KYC and AML compliance is a necessary step towards ensuring that the value added to a network is legitimate. We have made the process as painless as possible.</p>
                </div>
                <div class="card">
                    <img src="../assets/card_ridl.png">
                    <h3>Our decentralized firewall uses the power of the crowd to ensure your safety and security</h3>
                    <p>Scatter Bridge automatically connects to our proprietary security network and let’s you know if the transaction you are going to sign is safe.</p>
                </div>
            </section>
        </section>
    </div>
</template>

<script>
    import Footer from './Footer.vue'
    import Partners from './reusable/Partners.vue'
    import { Carousel3d, Slide3d } from 'vue-carousel-3d';

    const LOGOS = [
        {url:''}
    ];

    export default {
        name: 'Home',
        components: { Footer, Carousel3d, Slide3d, Partners },
        data(){return {
            LOGOS,
        }}
    }

</script>

<style lang="scss">
    
    @import "../variables";

    #lead-in {
        min-height:calc(80vh - 112px);
        display:flex;
        flex-direction:row;
        align-items:center;
        width:100vw;
        margin:0 auto;
        background-image:url('../assets/scatter_leadin_bg.png');
        background-position:center right;
        background-repeat:no-repeat;
        background-size:80%;

        @media (max-width: $single-column) {
            flex-direction:column;
            min-height:auto;
        }

        .lead-content {
            width: 50%;
            padding:0 8rem;

            @media (min-width: $breakpoint-large-desktop) {
                padding:0 8rem 0 16rem;
            }

            @media (max-width: $single-column) {
                width: 80%;
                padding:4rem 0;
            }

            h1 {
                margin-top:-16rem;

                @media (max-width: $single-column) {
                    margin:6rem 0 2rem;
                }
            }

            .button {
                margin-bottom:2rem;
            }

            .low-key {
                font-size:$font-size-standard;
                max-width:320px;
                opacity:0.34;
            }
        }

        .lead-images {
            position:relative;
            height:100vh;
            width:50vw;

            @media (max-width: $single-column) {
                width: 80%;
                padding:4rem 0;
                height:90vh;
            }

            .web-image {
                height: calc(100vh - 112px);
                position: absolute;
                top: 0;
                right: 0;
                width: 50vw;
                display:flex;
            	align-items:center;

                @media (max-width: $single-column) {
                    width: 100%;
                }

                img {
                    overflow:hidden;
                    border-radius:6px;
                    box-shadow: 0 10px 20px 0 rgba(7,83,123,0.19);
                    height:40%;
                    position: absolute;
                    right: 0;
                    max-width: 100%;
                    height: auto;
                    width: auto;
                }
                
            }

            .mobile-image {
                height:100vh;
                position:absolute;
                top:0;
                right:0;

                img {
                    height:60vh;
                    width:auto;
                    position:absolute;
                    right:0vw;
                    top:15vh;
                    overflow:hidden;
                    border-radius:6px;
                    box-shadow: 0 10px 20px 0 rgba(7,83,123,0.39);
                }
                
            }
        }
    }

    #to-do {
        padding-top:8rem;
    }

    #bridge-box {
        height:320px;
        text-align:center;
        background:$blue;
        border-radius:20px;
        background-image:url('../assets/gs_mobile_apps_homebg.png');
        background-size:cover;
        padding:4rem;
        position:relative;
        overflow:hidden;

        &:hover .button {
            transform:scale(1.2);
        }

        &:after {
            content:'';
            position:absolute;
            z-index:3;
            display:block;
            height:8rem;
            left:0;
            right:0;
            bottom:0;
            background-image: linear-gradient(180deg, rgba($blue,0) 0%, rgba($blue,0.5) 100%);
        }

        @media (max-width: $breakpoint-tablet) {
            display:none;
        }

        h3 {
            color:white;
            margin-bottom:0rem;
            font-size:22px;
        }

        h5 {
            color:white;
            opacity:0.44;
        }

        img {
            margin-top:0rem;
            max-width: calc(100% - 4rem);
            box-shadow: 0 10px 20px 0 rgba(7,83,123,0.39);
            overflow:hidden;
            border-radius:4px;
        }

        .button {
            position:absolute;
            z-index:4;
            box-shadow: 0 10px 20px 0 rgba(7,83,123,0.39);
            left:8rem;
            right:8rem;
            bottom:2rem;
            max-width: calc(100% - 16rem);
            transition:all 0.12s ease-in-out;

            @media (max-width: $breakpoint-tablet) {
                left:4rem;
                right:4rem;
                max-width: calc(100% - 8rem);
            }
        }
    }

    #vote {
        height:320px;
        text-align:center;
        border-radius:20px;
        background:$blue;
        border-radius:20px;
        background-image:url('../assets/gs_mobile_apps_homebg.png');
        padding:4rem 0;
        position:relative;
        overflow:hidden;

        &:hover .button {
            transform:scale(1.2);
        }

        &:after {
            content:'';
            position:absolute;
            z-index:3;
            display:block;
            height:8rem;
            left:0;
            right:0;
            bottom:0;
            background-image: linear-gradient(180deg, rgba($blue,0) 0%, rgba($blue,0.5) 100%);
        }

        h3 {
            color:white;
            margin-bottom:0rem;
            font-size:22px;
        }

        h5 {
            color:white;
            opacity:0.44;
        }

        img {
            margin-top:-2rem;
            max-width: calc(100% - 4rem);
        }

        .button {
            position:absolute;
            z-index:4;
            box-shadow: 0 10px 20px 0 rgba(7,83,123,0.39);
            left:8rem;
            right:8rem;
            bottom:2rem;
            background:white;
            color:$blue;
            max-width: calc(100% - 16rem);
            transition:all 0.12s ease-in-out;

            @media (max-width: $breakpoint-tablet) {
                left:4rem;
                right:4rem;
                max-width: calc(100% - 8rem);
            }
        }
    }

    #blockchain-for-everyone {

        @media (max-width: $single-column) {
            flex-direction:column-reverse;

            img {
                max-width:100%;
            }
        }

    }

    #empowering-developers {

        @media (max-width: $single-column) {
            flex-direction:column;

            img {
                max-width:100%;
            }
        }

    }

    #card-set {
        align-items:flex-start;

        h1.huge {
            font-size:$font-size-enormous;
            line-height:calc(#{$font-size-enormous} * 1.2);
            color:$darkgrey;
            margin-top:0;
        }

        .card {
            background: #FFFFFF;
            box-shadow: 0 10px 44px 0 rgba(7,153,255,0.08);
            border-radius: 20px;
            margin:4rem 0 4rem;
            padding-bottom:4rem;

            h3 {
                margin:0 4rem 2rem;
                color:$black;
                font-size:$font-size-big;
            }

            p {
                margin:0 4rem 4rem 4rem;
                font-family: 'Poppins', sans-serif;
                color:$grey;
            }
        }
    }
    
</style>
