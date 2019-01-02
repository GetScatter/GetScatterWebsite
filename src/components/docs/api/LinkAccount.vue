<template>
    <section class="doc-page">

        <h2>Link Account</h2>

        <section class="switcher">
            <section class="switch" v-for="lang in languages" :class="{'active':language === lang}" @click="language = lang">{{lang}}</section>
        </section>
        <br>
        <p>
            <b class="code-snippet">linkAccount</b> is part of the onboarding tools provided by Scatter and in most cases goes hand-in-hand with <b class="code-snippet">getPublicKey</b>.
            Your application can prompt the user to bind an account and network to a public key which allows them to use it to interact with your application when using <b class="code-snippet">getIdentity</b>
        </p>

        <section class="code-block">
<pre v-show="language === languages.WEB" v-highlightjs><code class="javascript">// EOS account
const account = {
  name:'helloworld',
  authority:'active',
  publicKey:'EOS....'
};

// Ethereum / Tron account ( don't use address, use publicKey, even though it's not technically correct )
const account = {
    publicKey:'0x....'
};

// Link the account inside Scatter
scatter.linkAccount(account, network).then(linked => {
    //...
})</code></pre>
<pre v-show="language === languages.JSON" v-highlightjs><code class="javascript">{
    id:'random-uid',
    type:'linkAccount',
    plugin:'Your App Name',
    payload:{
        origin:'domain' || 'YOUR_APP',
        account:{...},
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
