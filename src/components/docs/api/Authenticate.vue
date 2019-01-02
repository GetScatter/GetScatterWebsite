<template>
    <section class="doc-page">

        <h2>Authenticate</h2>

        <section class="switcher">
            <section class="switch" v-for="lang in languages" :class="{'active':language === lang}" @click="language = lang">{{lang}}</section>
        </section>
        <br>
        <p>
            <b class="code-snippet">authenticate</b> lets you prove that a user owns the identity that they have given you. Some Identities are RIDL enabled and are
            subject to being impersonated, you should always authenticate that a user truly owns the Identity instead of trusting them implicitly.
            <br><br>
            When an Identity is authenticated the domain ( or origin in the case of a desktop application ) is signed with the private key attached to the Identity and
            then returned to the application. You can use the public key attached to the Identity to validate the signature.
            <br><br>
            <b class="red">To authenticate you must have already requested and been given an identity.</b>
        </p>

        <section class="code-block">
<pre v-show="language === languages.WEB" v-highlightjs><code class="javascript">scatter.authenticate(12_CHAR_RANDOM_STRING).then(signedOrigin => {
    //...
}).catch(failedAuthentication => {
    // ...
})</code></pre>
<pre v-show="language === languages.JSON" v-highlightjs><code class="javascript">{
    id:'random-uid',
    type:'authenticate',
    plugin:'Your App Name',
    payload:{
        nonce:'somerandom12'
        origin:'domain' || 'YOUR_APP',
        publicKey:'THE_IDENTITY_PUBLIC_KEY'
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