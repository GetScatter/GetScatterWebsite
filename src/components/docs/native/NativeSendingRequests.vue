<template>
    <section class="doc-page">

        <h2>Sending API Requests</h2>
        <p>
            Let's create a method on your Socket Service that interacts with Scatter by sending API requests.
        </p>

        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">function sendApiRequest(request){
    return new Promise((resolve, reject) => {
        if(request.type === 'identityFromPermissions' && !paired) return resolve(false);

        pair().then(() => {
            if(!paired) return reject({code:'not_paired', message:'The user did not allow this app to connect to their Scatter'});

            // Request ID used for resolving promises
            request.id = random();

            // Set Application Key
            request.appkey = appkey;

            // Nonce used to authenticate this request
            request.nonce = getNextUnhashedNonce();
            // Next nonce used to authenticate the next request
            const unhashedNextNonce = random();
            request.nextNonce = sha256(unhashedNextNonce);
            setNextUnhashedNonce(unhashedNextNonce);

            openRequests.push({id:request.id, resolve, reject}));

            socket.send('42/scatter,' + JSON.stringify(['api', request]));
        })
    });
}</code></pre>
        </section>

        <br>
        <b>Breaking it down</b>
        <ul>
            <li>
                We're going to return a promise from this method to help us resolve the request. You'll notice that the entire method is wrapped in a JavaScript <b>Promise</b>.
            </li>
            <li>
                <b class="code-snippet">identityFromPermissions</b> is a special API route that is usually called upon every application load right after making a socket connection to Scatter.
                Because we pair with a <b class="code-snippet">passthrough</b> which doesn't prompt the user to link Scatter yet,
                we check here if <b class="code-snippet">request.type == 'identityFromPermissions'</b> is false, and <b class="code-snippet">paired</b> is false. If this if statement evalutated to <b>true</b>
                then we want to resolve the promise to <b>false</b> and exit the method.
            </li>
            <li>
                The next thing we do is to either check if we are paired with Scatter or request a pair linking to be created. If we have the entire <b>Pairing with Scatter</b> section in a promise resolving method
                called <b class="code-snippet">pair()</b> then we can call that here. We should also return and reject if this pairing ultimately resolve to false or no API requests will be accepted by
                Scatter.
            </li>
            <li>
                <b class="code-snippet">request.id = random();</b> - This just provides a unique ID for this request, which is later used to resolve this promise.
            </li>
            <li>
                <b class="code-snippet">request.appkey = appkey;</b> - We also always include the hashed <b class="code-snippet">appkey</b> along with every request.
            </li>
            <li>
                <b class="code-snippet">request.nonce = getNextUnhashedNonce();</b> - Every time we send a request we calculate the next nonce and save this unhashed in the persistent local storage of your application.
                If this is the first request you can make it <b class="code-snippet">0</b>
            </li>
            <li>
                <b class="code-snippet">const unhashedNextNonce = random();</b> - We always calculate the next nonce.
            </li>
            <li>
                <b class="code-snippet">request.nextNonce = sha256(unhashedNextNonce);</b> - When you send the next nonce along with the request make sure it is <b>hashed</b>.
            </li>
            <li>
                <b class="code-snippet">setNextUnhashedNonce(unhashedNextNonce);</b> - After appending the next nonce to the request don't forget to save this unhashed nonce to your
                persistent local storage, you will need to send it unhashed along with the next request.
            </li>
            <li>
                <b class="code-snippet">openRequests.push(...)</b> - We're pushing this Promise into our <b class="code-snippet">openRequests</b> array to be able to resolve it later. Be sure to include the <b class="code-snippet">request.id</b>.
            </li>
            <li>
                <b class="code-snippet">socket.send</b> - We already know this quite well, we're just sending the request to the EVENT type <b>api</b>.
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