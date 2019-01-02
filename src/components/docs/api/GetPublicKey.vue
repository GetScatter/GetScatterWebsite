<template>
    <section class="doc-page">

        <h2>Get Public Key</h2>

        <section class="switcher">
            <section class="switch" v-for="lang in languages" :class="{'active':language === lang}" @click="language = lang">{{lang}}</section>
        </section>
        <br>
        <p>
            <b class="code-snippet">getPublicKey</b> is part of the onboarding tools provided by Scatter. By requesting a public key from a user they are given the chance
            to either give you an existing public key, or create one on the fly which is then store within their Scatter.
        </p>

        <section class="code-block">
<pre v-show="language === languages.WEB" v-highlightjs><code class="javascript">scatter.getPublicKey(blockchain).then(publicKey => {
    //...
})</code></pre>
<pre v-show="language === languages.JSON" v-highlightjs><code class="javascript">{
    id:'random-uid',
    type:'getPublicKey',
    plugin:'Your App Name',
    payload:{
        origin:'domain' || 'YOUR_APP',
        blockchain:'...'
    }
}</code></pre>
        </section>



    </section>
</template>

<script>


    export default {
        data(){ return {

        }},
        computed:{

        },
        mounted(){
            this.language = this.languages.WEB;
        },
        methods:{

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">


</style>