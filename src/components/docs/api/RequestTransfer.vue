<template>
    <section class="doc-page">

        <h2>Request Transfer</h2>

        <section class="switcher">
            <section class="switch" v-for="lang in languages" :class="{'active':language === lang}" @click="language = lang">{{lang}}</section>
        </section>

        <p>
            This API route sends a transfer request to the user. It functions as a type of "Donate" button which bypasses the need for Login Authentication due to
            it never returning results.

            <br><br>

            <b>If the <b class="code-snippet">amount</b> is set to 0, the user will be able to select the amount. If it is greater than 0 then it is a fixed amount the user must pay.</b>
        </p>
        <br>

        <section class="code-block">
<pre v-show="language === languages.WEB" v-highlightjs><code class="javascript">const tokenDetails = {contract:'eosio.token', symbol:'EOS', memo:'', decimals:4};
scatter.requestTransfer(network, to, amount, tokenDetails).then(result => {
    console.log('result', result);
})</code></pre>
            <pre v-show="language === languages.JSON" v-highlightjs><code class="javascript">{
    id:'random-uid',
    type:'requestTransfer',
    plugin:'Your App Name',
    payload:{
        origin:'domain' || 'YOUR_APP',
        network:{...},
        to:'',
        amount:'',
        options:{...}
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