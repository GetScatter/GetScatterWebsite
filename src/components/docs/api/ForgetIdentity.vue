<template>
    <section class="doc-page">

        <h4>Forget Identity ( Sign Out )</h4>

        <section class="switcher">
            <section class="switch" v-for="lang in languages" :class="{'active':language === lang}" @click="language = lang">{{lang}}</section>
        </section>
        <br>
        <p>
            <b class="code-snippet">forgetIdentity</b> let you sign your user out of your application. They can then sign in with another Identity if they choose to.
        </p>

        <section class="code-block">
<pre v-show="language === languages.WEB" v-highlightjs><code class="javascript">scatter.forgetIdentity()

// The latest scatter-js will also allow using:
scatter.logout()</code></pre>
<pre v-show="language === languages.JSON" v-highlightjs><code class="javascript">{
    id:'random-uid',
    type:'forgetIdentity',
    plugin:'Your App Name',
    payload:{
        origin:'domain' || 'YOUR_APP',
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
