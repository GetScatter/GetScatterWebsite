<template>
    <section class="doc-page">

        <h2>Request Arbitrary Signature</h2>

        <section class="switcher">
            <section class="switch" v-for="lang in languages" :class="{'active':language === lang}" @click="language = lang">{{lang}}</section>
        </section>
        <br>
        <p>
            <b class="code-snippet">getArbitrarySignature</b> lets you sign arbitrary data with a given public key's private key.
        </p>

        <section class="code-block">
<pre v-show="language === languages.WEB" v-highlightjs><code class="javascript">const publicKey = '...' // The key you want a signature for
const data = '';        // Any string of words up to 12 characters each word

scatter.getArbitrarySignature(publicKey, data).then(signature => {
    //...
}).catch(error => {
    //...
});</code></pre>
<pre v-show="language === languages.JSON" v-highlightjs><code class="javascript">const publicKey = '...' // The key you want a signature for
const data = '';        // Any string of words up to 12 characters each word

{
    id:'random-uid',
    type:'requestArbitrarySignature',
    plugin:'Your App Name',
    payload:{
        origin:'domain' || 'YOUR_APP',
        publicKey,
        data,
    }
}</code></pre>
        </section>


      <b class="code-snippet red">PLEASE NOTE strings that have words with over 12 characters will be automatically rejected.</b>
      <br>
      <br>
      For instance:
      <br>
      <b class="code-snippet">You-cannot-sign-this-string</b> -> <b class="code-snippet">But you can sign this one.</b>

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
