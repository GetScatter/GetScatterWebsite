<template>
    <section class="doc-page">

        <h4>Native Connections</h4>
        <p>
            Before you can do anything with a user's Scatter you need to create a connection to it's WebSocket server.
            Let's look at how we can do this using standard WebSockets.
        </p>

        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">const host = '127.0.0.1:50005';
const socket = new WebSocket(`ws://${host}/socket.io/?EIO=3&transport=websocket`);
</code></pre>
        </section>

        <br>
        A few things to remember.
        <ul>
            <li>
                Don't use <b class="code-snippet">wss://</b> yet, as self-signed Scatter certificates are not yet supported and there is no SSL websocket support.
            </li>
            <li>
                Even if you're connecting using standard WebSockets always use the <b class="code-snippet">/socket.io/?EIO=3&transport=websocket</b> suffix
                when creating a connection to Scatter. This allows fake handshakes/upgrades to socket-io.
            </li>
            <li>
                You'll want to keep the <b class="code-snippet">socket</b> variable on the Socket Service's outer scope ( not within any function's scope ) so that you can use it later.
            </li>
        </ul>

        <br><br>

        <h4>When connected</h4>
        <p>
            Once the socket is connected ( usually handled in the <b class="code-snippet">socket.onopen</b> method ) you need to send back an ACK ( acknowledgement ) that you have
            connected to the socket which promotes upgrading/handshaking.
        </p>
<section class="code-block no-bottom"><pre v-highlightjs><code class="javascript">socket.onopen = () => {
    socket.send('40/scatter');
}</code></pre></section>

        <br>
        <b>Breaking it down</b>
        <ul>
            <li>
                <b>40</b> is broken down into two parts, the <b>4</b> and the <b>0</b>.<br>
                <b>4</b> in engine-io ( what socket-io runs on top of ) is the "message" code, and <b>0</b> is the "connect" code.
                Essentially what we are telling the socket to do here is send a "message" of "connect".<br>
                The <b>2</b> code which we will see later, refers to an "event".
            </li>
            <li><b>/scatter</b> is the <b>namespace</b> that Scatter uses on top of the socket.</li>
        </ul>

        <br><br>

        <h4>In your response handler</h4>
        <p>
            <b>We haven't set this up yet, but keep this part in mind</b>. Initially you will get back an ACK from Scatter about the handshaking/upgrading.
            You should disregard this response when handling events.
        </p>

        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">socket.onmessage = msg => {
    // Disregarding Handshaking/Upgrading
    if(msg.data.indexOf('42/scatter') === -1) return false;

    // ... handle API responses below
}</code></pre>
        </section>

        <br>
        The above is just some JavaScript checking that the <b class="code-snippet">message.data</b> always includes <b class="code-snippet">42/scatter</b> in it, which
        as we discussed before means that the message is an <b>event</b> and not a <b>connect</b> message.

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