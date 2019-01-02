<template>
    <section class="doc-page">

        <h2>Suggest Network</h2>

        <section class="switcher">
            <section class="switch" v-for="lang in languages" :class="{'active':language === lang}" @click="language = lang">{{lang}}</section>
        </section>
        <br>
        <p>
            <b class="code-snippet">suggestNetwork</b> can be useful if you are using a network that isn't a Mainnet for your application, such as a test network, a side chain or a fork.
        </p>

        <section class="code-block">
<pre v-show="language === languages.WEB" v-highlightjs><code class="javascript">scatter.suggestNetwork(network).then(added => {
    //...
})</code></pre>
<pre v-show="language === languages.JSON" v-highlightjs><code class="javascript">{
    id:'random-uid',
    type:'requestAddNetwork',
    plugin:'Your App Name',
    payload:{
        origin:'domain' || 'YOUR_APP',
        network:{...}
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