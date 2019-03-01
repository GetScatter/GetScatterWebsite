<template>
    <section class="doc-page">

        <h4>Pairing with Scatter</h4>
        <p>
            <b class="red">
                This is currently optional to provide backwards compatibility, but will become mandatory in future releases of Scatter without notice. Some features such as the action permission
                system is already disabled for non-paired connections. It is best to handle this now than to have to handle it later when Scatter updates break your application.
            </b>
            <br><br>
            Pairing is what Scatter does to allow users to <b>link</b> applications to their Scatter. It's how Scatter validates that an origin/app is who they say they are.
            There's two type of pairing that occur:
        </p>
        <ul>
            <li>
                <b>Passthrough Pairing</b> - This type of pairing does not prompt the user to pair with your application, it only checks if the user has accepted it in the past.
                This is generally used on the <b class="code-snippet">socket.onopen</b> call so that if it returns true you can do things like <b class="code-snippet">identityFromPermissions</b> which
                will check if the user has also already provided an Identity before. If you try to do this <i>without a passthrough</i> it will prompt the user to accept the pairing before hitting that API
                route and cause a bad user-experience.
            </li>
            <li>
                <b>Non-Passthrough Pairing</b> - When the passthrough parameter is false it will <b>always</b> prompt the user to permit a pairing if one doesn't exist.
                You should generally be checking for a pairing before every API request as it's overhead is minimal and it will make it so that you don't have to request a pairing until a user
                actually does something with Scatter ( like <b class="code-snippet">getIdentity</b> ). If a pairing already exists and your key matches then the user will not be prompted.
            </li>
        </ul>

        <br>
        There's also a few more things you need to know about.
        <ul>
            <li>
                <b>Application Key ( <b class="code-snippet">appkey</b> )</b> - This key is used to uniquely identify your application in a user's Scatter.
                When you first pair you send an unhashed version of this randomly generated key which is prefixed with <b class="code-snippet">appkey:</b> along with the pairing request,
                and on all subsequent requests you send it hashed.
                <span class="red">Do not use a pre-defined application key. Generate it randomly for every user on their machine alone and never send it to any servers. It is not for you, it is for them.</span>
            </li>
            <li>
                <b>Nonce ( <b class="code-snippet">nonce</b> )</b> - This nonce should be a <b>randomly generated alphanumeric ID of 24 char length.</b> When sent to Scatter this nonce is always hashed.
                <span class="red">Do not use incremental ids for this, make them randomly generated or else you will break the security of the pairing link permission system and allow other applications to mimic your
                application and send requests in your name</span>
            </li>
            <li>
                <b>Next Nonce ( <b class="code-snippet">nextNonce</b> )</b> - This is the same as the <b>nonce</b> but is sent in clear text ( unhashed ) along with every request, and is then stored hashed
                in your application to be sent with the <b>next request</b>.
            </li>
            <li>
                <span class="red">
                    <b>If the appkey, nonce, or nextNonce do not match</b> what the user's Scatter has on file, the pairing link for your application is invalidated and the user will be requested to re-pair with your
                    application before interacting with it again.
                </span>
            </li>
            <li>
                <b>Hashing</b> - The hashing algorithm Scatter uses to verify requests is <b class="code-snippet">sha256</b> in <b class="code-snippet">hex</b> format.
            </li>
        </ul>

        <br><br>

        <h4>When First Connecting</h4>
        <p>
            Let's look at a <b>passthrough</b> pairing for when we're first connecting.
        </p>

        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">// We're doing this when the socket opens,
// but only after we've sent back the connection ACK
socket.onopen = () => {
    socket.send('40/scatter');

    // This should be a state variable on your class,
    // and not only kept within this function's scope as
    // we will need it later.
    appkey = appkeyIsStored()
        ? getStoredHashedAppkey()       // Example: 867f01b41e264ac3a750e0ec7b13a729d6741f211181b126c41c6529073096df
        : 'appkey:'+random();           // Example: appkey:bt2gbcerb24quj56mp5jsrqr

    const json = {
        plugin:'YOUR_APP',
        data:{
            appkey,
            origin:'YOUR_APP',
            passthrough:true,
        }
    }

    socket.send('42/scatter,' + JSON.stringify(['pair', json]));

}</code></pre>
        </section>

        <br>
        <b>Breaking it down</b>
        <ul>
            <li>
                First things first we always do this only <b>after</b> sending back the <b>40/scatter</b> ACK.
            </li>
            <li>
                The appkey that we're sending is based on whether <b>your application</b> has an appkey stored within it or not.<br>
                If it <b>does not</b> have one then we send the unhashed value, if it <b>does</b> then we send the hashed value.
            </li>
            <li>
                The <b class="code-snippet">plugin</b> and <b class="code-snippet">data.origin</b> values are <span class="red">required</span> with every request sent to Scatter.
                In the case of a single app you should put your application's name in both values. If you are running an app explorer you can put your plugin name as your app name and sub-app names
                as the origin. ( note that the user will need to create pairings for each sub-app in that case ).
                <span class="red">plugin and origin must be the same across all your requests to Scatter.</span>
            </li>
        </ul>

        <br>
        <b>Let's look at that funky <b class="code-snippet">socket.send()</b> line.</b> What's actually happening there is we're just appending a payload to the event message and it's event type.<br>
        I think the best way to explain this is to show it in the string of JSON that is actually sent through the socket.
        <p>
            <b class="red">
                Notice that this isn't valid JSON! <br>
                When receiving API messages you will need to remove the <b class="code-snippet">42/scatter,</b> before parsing the JSON.
            </b>
        </p>

        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">"42/scatter, [
    pair, <-- this is the EVENT ( remember socket message type 2? )
    {     <-- This is the PAYLOAD
        plugin:'YOUR_APP',
        data:{
            appkey:'appkey:bt2gbcerb24quj56mp5jsrqr',
            origin:'YOUR_APP',
            passthrough:true,
        }
    }
]"</code></pre>
        </section>

        <br><br>

        <h4>Putting this into a function</h4>
        <p>
            We're going to use this in multiple places, so it's best to put it into a function.
        </p>

        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">function pair(passthrough = false){
    return new Promise((resolve, reject) => {
        pairingPromise = {resolve, reject};
        const json = {...};
        socket.send('42/scatter,' + JSON.stringify(['pair', json]))
    })
}</code></pre>
        </section>

        <br>
        <b>Breaking it down</b>
        <ul>
            <li>
                We're wrapping this function in a Promise to resolve it later.
            </li>
            <li>
                We're also setting the <b class="code-snippet">pairingPromise</b> to this Promise as well to hold onto it for when it resolves from the <b class="code-snippet">socket.onmessage</b> handler.
            </li>
            <li>
                The rest of the method is identical to what we laid out before.
            </li>
        </ul>

        <br><br>

        <h4>Rekeying</h4>
        <p>
            Sometimes when you try to pair Scatter will send you back a <b class="code-snippet">rekey</b> message telling you that either the user removed the pair/link permissions, or that one
            of your authorization values is out of sync ( appkey, nonce, nextNonce ).
            <br><br>
            We'll talk about this further in the next section <b>Catching Responses</b>
        </p>

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