<template>
    <section class="doc-page">

        <h2>Supported Blockchains</h2>
        <p>
            Scatter supports multiple blockchains, and this list will often grow. Make sure to check back here for further support.
            <br><br>
            Knowing which blockchains are available will help you when building networks and getting signature providers.<br>
            Below is a table of the <b class="code-snippet">blockchain -> id</b> of the actual enums you can use when fetching accounts or signature providers.
        </p>
        <br>

        <table>
            <thead>
                <tr>
                    <td>Blockchain Name</td>
                    <td>Usable Identifier</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>EOSIO</td>
                    <td>eos</td>
                </tr>
                <tr>
                    <td>Ethereum</td>
                    <td>eth</td>
                </tr>
                <tr>
                    <td>Tron</td>
                    <td>trx</td>
                </tr>
            </tbody>
        </table>
        <section class="code-block">
<pre v-highlightjs><code class="javascript">// If you wanted to build a reference object within your code to
// reflect the above table you could do so like this:
const Blockchains = {
    EOSIO:'eos',
    Ethereum:'eth',
    Tron:'trx'
};

// And then you can use it like this:
const blockchain = Blockchains.EOSIO;
</code></pre>
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