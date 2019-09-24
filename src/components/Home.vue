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
                    <router-link to="/vote" alt="Don't forget to vote!" class="reminder-to-vote">
                        <svg width="18px" height="19px" viewBox="0 0 18 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="scatter_bpbid_loggedin" transform="translate(-27.000000, -29.000000)" fill="#111111" fill-rule="nonzero">
                                    <g id="Path-2-Copy-3" transform="translate(27.000000, 29.000000)">
                                        <path d="M6.05620371,13.3465277 L3.76410059,9.90837305 C3.15139567,8.98931567 1.90965698,8.74096793 0.990599608,9.35367285 C0.0715422302,9.96637777 -0.176805507,11.2081165 0.435899411,12.1271738 L4.43589941,18.1271738 C5.23892967,19.3317192 7.01602607,19.3105193 7.79009253,18.0871598 L17.1025925,3.36938639 C17.6931983,2.43597406 17.4152987,1.20051327 16.4818864,0.609907475 C15.5484741,0.0193016786 14.3130133,0.29720128 13.7224075,1.23061361 L6.05620371,13.3465277 Z" id="Path-29"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        Don't forget to vote for the Scatter BP!
                    </router-link>
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
        <section class="full-width" data-aos="fade-up">
            <TopDapps></TopDapps>
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
    import TopDapps from './reusable/TopDapps.vue'
    import { Carousel3d, Slide3d } from 'vue-carousel-3d';

    const LOGOS = [
        {url:''}
    ];

    export default {
        name: 'Home',
        components: { Footer, Carousel3d, Slide3d, TopDapps },
        data(){return {
            LOGOS,
        }},
        metaInfo() {
          return {
            title: "test",
          };
        },

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
                font-size:$font-size-big;
            }

            .reminder-to-vote {
                display:inline-block;
                margin:2rem 0 2rem;
                font-family: 'Poppins', sans-serif;
                font-weight:bold;
                color:$blue;
                text-decoration:none;
                padding-bottom:6px;
                border-bottom:1px solid rgba(0,0,0,0.12);
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
