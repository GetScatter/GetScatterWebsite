<template>
    <section class="doc-page">

        <h2>Identity From Permissions</h2>


      <section class="switcher">
        <section class="switch" v-for="lang in languages" :class="{'active':language === lang}" @click="language = lang">{{lang}}</section>
      </section>

        <p>
            <b class="red">Identity From Permissions is not needed for ScatterJS.</b> This documentation is solely meant for native desktop/mobile applications.<br>
            For ScatterJS this happens automatically behind the scenes.
            <br><br>
            This API route simply returns any previously accepted Get Identity requests, along with the requirements that were last requested.
        </p>

        <section class="code-block">
<pre v-show="language === languages.WEB" v-highlightjs><code class="javascript">scatter.getIdentityFromPermissions().then(identity => {
    //...
}).catch(error => {
    //...
})

// The latest scatter-js will also allow using:
scatter.checkLogin()</code></pre>
<pre v-show="language === languages.JSON" v-highlightjs><code class="javascript">{
    id:'random-uid',
    type:'identityFromPermissions',
    plugin:'Your App Name',
    payload:{
        origin:'domain' || 'YOUR_APP'
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

        },
        methods:{

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">


</style>
