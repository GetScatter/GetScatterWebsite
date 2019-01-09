<template>
    <div id="founders">

        <section class="body padded padded-large">
            <div class="body-text">
                <div class="row">
                    <div class="col-6">
                        <h2>Founders</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <img src="../assets/gs_founders_nathan.jpg">
                        <h4>Nathan S. James</h4>
                        <p class="position">Chief architect</p>
                        <p>Nathan is the lead architect and founding member of Scatter. Nathan has taken the EOS community by storm and was instrumental in it's launch. His unique approach to solving real-world problems is part and parcel of his talent for understanding complex systems and leveraging them in the right way. In a sphere where most are just beginning to grasp the possibilities, he is providing tools and solutions.</p>
                        <p><a class="" href="mailto:nsjames@get-scatter.com">nsjames@get-scatter.com</a><br>
                            <a class="" href="https://t.me/Randomnobody">Telegram</a></p>
                    </div>
                    <div class="col-3">
                        <img src="../assets/gs_founders_rami.jpg">
                        <h4>Rami S. James</h4>
                        <p class="position">Product specialist</p>
                        <p>Since 1999, Rami has worked at a series of startups, including Altec Lansing, Spiral Solutions, and Inkod. His forté is the world of design -- with a special interest in the intersection between user-experience and statistical analytics. An eye for detail has helped him earn a reputation as one of the most sought-after veteran designers in Israel.</p>
                        <p><a class="" href="mailto:rami@get-scatter.com">rami@get-scatter.com</a><br>
                            <a class="" href="https://t.me/Farfaraway">Telegram</a></p>
                    </div>
                </div>
            </div>
        </section>

        <section id="get-started" class="body padded padded-large">
            <div class="row">
                <div class="col-3">
                    <h3>Learn more about RIDL.</h3>
                    <a class="button" href="https://docs.google.com/document/d/1cDcERQUAA3W21XtJhHlqfL2LauiELmOE_b5J2Q3acJg/view">Read the Whitepaper</a>
                </div>
                <div class="col-3">
                    <h3>Scatter is available now!</h3>
                    <a class="button" :href="downloadLink">Download Scatter</a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import ScatterLogo from './reusable/ScatterLogo.vue'

    export default {
        name: 'Founders',
        components: {ScatterLogo}
    }

</script>
<style lang="scss">

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