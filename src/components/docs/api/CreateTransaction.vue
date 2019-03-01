<template>
    <section class="doc-page">

        <h4>Create Transaction</h4>
        <p>
            This API route accepts arrays of actions to build a transaction with. It's not particularly necessary for web applications because ScatterJS's plugin providers does this under the hood,
            but it's great for native applications with languages that don't yet have blockchain languages wrappers.
        </p>

        <section class="code-block">
<pre v-highlightjs><code class="javascript">{
    type:'createTransaction',
    plugin:'YOUR_APP',
    payload:{
        id:'random-uid',
        origin:'YOUR_APP'
        blockchain:'eos',
        actions:[
            {
                contract:'eosio.token',
                action:'transfer',
                params:[account.name, 'eosio', '1.0000 EOS', ''],
            },
            {
                contract:'eosio.token',
                action:'transfer',
                params:[account.name, 'eosio2', '2.0000 EOS', ''],
            }
        ],
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