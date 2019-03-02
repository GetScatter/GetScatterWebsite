<template>
    <section class="doc-page">

        <h4>Get Identity ( Sign In )</h4>

        <section class="switcher">
            <section class="switch" v-for="lang in languages" :class="{'active':language === lang}" @click="language = lang">{{lang}}</section>
        </section>
        <br>
        <p>
            <b class="code-snippet">getIdentity</b> allows your application to request permission to interact with a user's
            Scatter and be provided with an Identity of the user's choosing.
            You can equate requesting an Identity to signing in with Google or Facebook without a centralized server.
        </p>

        <section class="code-block">
<pre v-show="language === languages.WEB" v-highlightjs><code class="javascript">scatter.getIdentity(requiredFields).then(identity => {
    //...
}).catch(error => {
    //...
})

// The latest scatter-js will also allow using:
scatter.login(requiredFields)</code></pre>
<pre v-show="language === languages.JSON" v-highlightjs><code class="javascript">{
    id:'random-uid',
    type:'getOrRequestIdentity',
    plugin:'Your App Name',
    payload:{
        origin:'domain' || 'YOUR_APP',
        fields:requiredFields
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
