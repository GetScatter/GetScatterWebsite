<template>
    <section class="doc-page">

        <h2>Promise/Future Resolution</h2>
        <p>
            We need to be able to feed API request responses back to our application. This is a little bit of a hassle when dealing with WebSockets since requests return responses through the
            <b class="code-snippet">socket.onmessage</b> method. It's very possible to do though with a little massaging.
            <br><br>
            Let's set up some state variables on our Socket Service.
        </p>

        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">let openRequests = [];
let pairingPromise = null;
</code></pre>
        </section>

        <br>
        <ul>
            <li>
                <b class="code-snippet">openRequests</b> will be used to hold promises used to resolve requests.
            </li>
            <li>
                <b class="code-snippet">pairingPromise</b> will be used to hold a pairing promise. We only need one of these. You could easily merge this into the <b class="code-snippet">openRequests</b>
                as well instead of creating it's own variable, but this keeps things separated.
            </li>
        </ul>


        <br><br>
        <br><br>
        <br><br>
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