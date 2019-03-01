<template>
    <section class="doc-page">

        <h4>Networks?</h4>
        <p>
            Networks in Scatter are used specifically for fetching blockchain accounts from a user's Scatter and initializing signature providers.
            <br><br>
            The reason Scatter uses networks internally is to allow differentiation between what accounts a user has on what networks. For instance a user
            could have accounts on a test network and it would cause them a bad user-experience if they were presented as options when selecting accounts for a main net.
            <br><b>Make sure you read the section about the Chain ID below, as it is extremely important</b> and could save you hours of head-ache.
            <br><br>
            Networks are pretty basic objects, but each property is important in it's own way.
            Let's look at the object itself before going into each field.
        </p>

        <section class="code-block">
<pre v-highlightjs><code class="javascript">const network = {
    blockchain:'eos',
    host:'localhost',
    port:8888,
    protocol:'http',
    chainId:''
};</code></pre>
        </section>

        <h4>What should the Host be?</h4>
        <p>
            A host usually refers to an IP or a domain name. It can also be localhost.<br>
            Here are three examples:
        </p>

        <section class="code-block">
<pre v-highlightjs><code class="javascript">// Good
host:'127.0.0.1',
host:'localhost',
host:'nodes.get-scatter.com',

// Bad
host:'https://nodes.get-scatter.com',
host:'nodes.get-scatter.com:443',
</code></pre>
        </section>

        <h4>What should the Port be?</h4>
        <p>
            Ports range from 0 to 65,535, however quite a few of them are reserved. <br>
            The most known and used ports for nodes are going to be <b class="code-snippet">80 ( HTTP )</b> and <b class="code-snippet">443 ( HTTPS/SSL )</b>.
        </p>

        <section class="code-block">
<pre v-highlightjs><code class="javascript">// Good
port:80,
port:443,

// Bad
port:'80',
port:'text',
</code></pre>
        </section>

        <h4>What should the Protocol be?</h4>
        <p>
            You will have to refer to the node's setup to see which protocol to use. You might also be able to infer the protocol from the port, like we showed above.
        </p>

        <section class="code-block">
<pre v-highlightjs><code class="javascript">// Good
protocol:'http',
protocol:'https',

// Bad
protocol:'none',
protocol:null,
</code></pre>
        </section>

        <h4>What should the Chain ID be?</h4>
        <p>
            You should always be using the <b class="code-snippet">chainId</b>. Chain IDs are a way for Scatter to group accounts together under a single identifier so that
            applications can fetch them without knowing the internal network used to link them.
            <br><br>
            <b class="red">
                If you have a Network in Scatter which has a Chain ID you will <b>have</b> to specify the Chain ID when trying to get accounts linked to it. Even if you specify the exact same
                network without the <b class="code-snippet">chainId</b> ( meaning the same host, port, protocol and blockchain ) it will fail to fetch the accounts as the Chain ID overrides
                all other properties.
            </b>
            <br><br>
            You will have to know the <b class="code-snippet">chainId</b> before-hand, but most blockchains provide a way for you to get this and since they don't
            ( or at least shouldn't ) change dynamically over time then you really only need to fetch it once and hard code it into your applications.
            <br><br>
            Chain IDs don't have a specific format so it should be a <b class="code-snippet">string</b> to encapsulate all types ( such as an integer or a string ).
        </p>

        <section class="code-block">
<pre v-highlightjs><code class="javascript">// Good
chainId:'1',
chainId:'acab4m20dlsdl3DlsSo3',

// Bad
chainId:1,
chainId:null,
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