<template>
    <section class="doc-page">

        <h2>Signature providers for Web Applications</h2>
        <p>
            Each blockchain has it's own signature provider and provides an easy way to set up your application using Scatter as a way to sign transactions instead of having
            users enter their private keys into your applications.
            <br><br>
            <b>Once a signature provider is set up, you use it the same way as you use the original library ( web3, eosjs, tronweb, etc ).</b>
            Let's see how we can set up signature providers for supported blockchains.
        </p>

        <br>
        <br>
        <h5>Using a Proxy Provider</h5>
        Proxy providers allow you to use the <b class="code-snippet">requiredFields</b> object within transaction to get more information from the user
        during your signature requests.

        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">// eosjs
const options = {};
const eos = scatter.eos( network, Eos, options );

// eosjs2
const rpc = new eosjs_jsonrpc.JsonRpc(...);
const api = scatter.eos(network, eosjs2.Api, {rpc});

// web3
const web3 = scatter.eth( network, Web3 );
// For custom contracts you MUST supply your contract's ABI.
const options = {from:account.address, abi};
contract.methods.hello(...args).send(options)

// tron
const tronWeb = new TronWeb(fullNode, fullNode, eventServer);
const tron = scatter.trx(network, tronWeb);

</code></pre>
        </section>

        <br>
        <br>
        <h5>Using a Hook Provider</h5>
        Hook providers won't allow you to use the <b class="code-snippet">requiredFields</b> logic, but they are a bit simpler to set up.

        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">// eosjs
const eos = Eos({ httpEndpoint:'yourendpoint.com', signatureProvider:scatter.eosHook(network) })

// eosjs2
const rpc = new eosjs_jsonrpc.JsonRpc(...);
const api = new eosjs.Api({ rpc, signatureProvider:scatter.eosHook(network) });
</code></pre>
        </section>

        <br>
        <i>Right now ScatterETH and ScatterTron do not support the hook provider.</i>


        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h2>What is the network to pass in?</h2>
        <p>
            The network you pass into signature providers is the actual endpoint you wish to interact with. It is formatted just like the network you pass into the Requirable Fields object.
            You should also make sure that the <b class="code-snippet">chainId</b> matches the one that you are requesting accounts from the user with,
            or else you won't be able to get valid signatures.
        </p>

        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">{
    blockchain:'eos',
    protocol:'https',
    host:'nodes.get-scatter.com',
    port:443,
    chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
}</code></pre>
        </section>
        <br>
        <br>
        <br>


        <h2>Want to get Required Fields?</h2>
        <p>
            You can require fields to be returned if the user signs the transaction. This allows you to get things you need to complete real world transactions such as
            addresses for physical shipments, or an email for receipts.
            <br><br>
            <b style="color:red;">Remember that this only works with Proxy Providers and not Hook Providers.</b>
        </p>

        <section class="code-block">
<pre v-highlightjs><code class="javascript">// ---------------------------------------
// EOS
// ---------------------------------------

// Right
const contract = await eos.contract('hello', {requiredFields});
const result = await contract.hi(...);

// Wrong
const contract = await eos.contract('hello');
const result = await contract.hi(..., {requiredFields});



// ---------------------------------------
// Ethereum
// ---------------------------------------

web3.eth.sendTransaction({
    from: account.address,
    to: '0x11f4d......',
    value: '1',
    requiredFields,
    fieldsCallback
})

const options = {from:account.address, abi, requiredFields, fields => {
    console.log('fields', fields);
}};
contract.methods.hello(...args).send(options)

</code></pre>
        </section>

    </section>
</template>

<script>

    const requirables = [
        {
            name:'accounts',
            type:'Array<network>',
            types:[]
        },
        {
            name:'personal',
            type:'Array<string>',
            types:['firstname', 'lastname', 'email', 'birthdate']
        },
        {
            name:'location',
            type:'Array<string>',
            types:['phone', 'address', 'city', 'state', 'country', 'zipcode']
        },
    ];

    const alwaysReturned = [
        {
            name:'name',
            type:'string',
            description:'The Identity name, or "Username".'
        },
        {
            name:'publicKey',
            type:'string',
            description:`The Identity's Public Key, which is used for authentication. Not to be confused with a blockchain account Public Key.`
        },
        {
            name:'hash',
            type:'string',
            description:`The user's unique Scatter hash, which is included with all Identities, and binds them all together.`
        },
        {
            name:'kyc',
            type:'false || pointer',
            description:`If a user has done KYC with their Identity; proving who they are, their Identity will be immutable unless this value is returned to false.
            The pointer will be a linkable verifier such as an external KYC service or fingerprint.`
        },
        {
            name:'ridl',
            type:'-1 || timestamp',
            description:`If a user is registered with the RIDL system and has a unique Identity this value will be an expiration timestamp.`
        },
    ];


    export default {
        data(){ return {
            requirables,
            alwaysReturned
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