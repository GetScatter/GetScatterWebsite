<template>
    <section class="doc-page">

        <h2>Request Signature</h2>
        <p>
            <b class="red">Request Signature is not available for ScatterJS.</b> This is solely meant for native desktop/mobile applications.<br>
            For Web Applications see <b>Signature Providers</b>.
            <br><br>
            This API route sends transactions to be signed by the user within Scatter.
        </p>

        <section class="code-block">
<pre v-highlightjs><code class="javascript">{
    id:'random-uid',
    type:'requestSignature',
    plugin:'YOUR_APP',
    payload:{
        origin:'YOUR_APP'
        network:{...},
        requiredFields:{...} OR {},
        blockchain:'...',
        transaction:{...},
        abi:{...} OR null, // <-- for blockchains with no on-chain ABI
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