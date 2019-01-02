<template>
    <section class="doc-page">

        <h2>Catching Responses</h2>
        <p>
            When you send API requests to Scatter it will send you back responses including a unique ID that you specify with the response.
            This allows you to resolve those responses later in a promise/future way.
            <br><br>
            There's three response types you need to handle in your application.
        </p>
        <ul>
            <li>
                <b>paired</b> ( no id ) - an ACK response for the <b class="code-snippet">pair</b> request.
            </li>
            <li>
                <b>rekey</b> ( no id ) - This response is issued when either the <b class="code-snippet">appkey</b>, <b class="code-snippet">nonce</b> or <b class="code-snippet">nextNonce</b>
                are no longer valid, because the user has removed link permissions or because your app's local storage of them is wiped.
            </li>
            <li>
                <b>api</b> ( returns id ) - These are responses to API requests you have made to Scatter.
            </li>
        </ul>

        For the routes with no ID you will need to handle the promise/future on your own in a singleton manner. However you will only get one of that type at once
        which makes this easy. We will talk about resolving these requests later.


        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">socket.onmessage = msg => {
    // Disregarding Handshaking/Upgrading
    if(msg.data.indexOf('42/scatter') === -1) return false;

    const [type, data] = JSON.parse(msg.data.replace('42/scatter,', ''));

    switch(type){
        case 'paired': return handlePairedResponse(data);
        case 'rekey':  return handleRekeyResponse();
        case 'api':    return handleApiResponse(data);
    }
}</code></pre>
        </section>

        <br>
        <b>Breaking it down</b>
        <ul>
            <li>
                First we are disregarding everything which isn't an <b>EVENT</b> ( type code 42 ) by saying "any message without 42/scatter" in it should be disregarded.
            </li>
            <li>
                Then we are turning the EVENT string into JSON by stripping the <b class="code-snippet">42/scatter,</b> from the string ( notice the comma ), and turning it into
                a JSON array. In JavaScript if you do <b class="code-snippet">const [a, b] = [1,2];</b> it simply gives you variables of the array indexes incrementally. So in our case
                we're just making variables out of <b class="code-snippet">[type, data]</b>.
            </li>
            <li>
                Lastly we're just switch casing the <b class="code-snippet">type</b> variable and pushing those requests into other function to keep our code clean. Notice that only
                <b class="code-snippet">paired</b> and <b class="code-snippet">api</b> are passing in the <b class="code-snippet">data</b> object, since <b class="code-snippet">rekey</b> doesn't need it.
            </li>
        </ul>

        <br><br>

        <h2>The Paired Response</h2>
        <p>
            This continues the last section about pairing, and allows you to do some logic on your end to finish the pairing process and store the correct values in your
            application only when the request is successful.
        </p>

        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">function handlePairedResponse(result){
    // You should have a state variable on
    // your socket class that knows the "paired" state.
    paired = result;

    if(paired) {
        const savedKey = getStoredHashedAppkey();
        const hashed = appkey.indexOf('appkey:') > -1 ? sha256(appkey) : appkey;

        if (!savedKey || savedKey !== hashed) {
            setStoredHashedAppkey(hashed);
            appkey = hashed;
        }
    }
}</code></pre>
        </section>

        <br>
        <b>Breaking it down</b>
        <ul>
            <li>
                <b>paired = result;</b> - <b class="code-snippet">paired</b> should be a state variable either on your socket connection class or global to your application as this isn't the only
                place we will be referencing it. <b class="code-snippet">result</b> is just a boolean which tells you whether the user has accepted the pairing or not.
            </li>
            <li>
                Since this method fires when you send a <b class="code-snippet">pair</b> request, and <i>also</i> when you send a <b class="code-snippet">rekey</b> response we can't trust that the
                value inside of our state variable <b class="code-snippet">appkey</b> matches what we have saved in our local persistent storage. It's possible that we are in the process of
                rekeying and therefor changing that key. Because of this we get a reference to our old saved key if it exists.
            </li>
            <li>
                To handle both cases of pair/rekey we need to check if the <b class="code-snippet">appkey</b> we currently have on state has <b class="code-snippet">appkey:</b> in it. ( remember this prefix must
                be sent along with all clear text appkeys ). If the appkey <b>does</b> have <b class="code-snippet">appkey:</b> then we <b class="code-snippet">sha256</b> that value. If not we simply use the
                appkey we have in state, as it means we aren't in the process of rekeying.
            </li>
            <li>
                The <b class="code-snippet">if (!savedKey || savedKey !== hashed)</b> - We really only need to re-save the appkey if it's changed. Don't waste disk IO on unchanged variables.
            </li>
        </ul>

        <br><br>

        <h2>The Rekey Response</h2>
        <p>
            This is more of an event than a response, but it's best to handle it here as well. We talked about this a little towards the end of the last section <b>Pairing with Scatter</b>.
            Here's how we actually handle rekeying.
        </p>

        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">function handleRekeyResponse(){
    appkey = 'appkey:'+random();

    const json = {
        plugin:'YOUR_APP',
        data:{
            origin:'YOUR_APP',
            appkey
        }
    };

    socket.send('42/scatter,' + JSON.stringify(['rekeyed', json]);
}</code></pre>
        </section>

        <br>
        You'll notice this is very similar to the initial pair request that we sent initially. In fact there's only three differences.
        <ul>
            <li>We are only <b>setting</b> the <b class="code-snippet">appkey</b> variable here with a new random appkey, and never initializing it from persisted state.</li>
            <li>Inside of the <b class="code-snippet">data</b> object we don't specify <b class="code-snippet">passthrough</b></li>
            <li>the event type for this is not <b>pair</b>, instead it's <b>rekeyed</b>.</li>
        </ul>
        This method eventually resolves to the <b>paired</b> response we handled above.

        <br><br>
        <br><br>

        <h2>The API Response</h2>
        <p>
            This is the handler that will do the bulk of our interaction with Scatter. The only thing we're really doing here is resolving promises that we inserted into the <b class="code-snippet">openRequests</b> array.
        </p>

        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">function handleApiResponse(response){
    const openRequest = openRequests.find(x => x.id === response.id);
    if(!openRequest) return;

    openRequests = openRequests.filter(x => x.id !== response.id);

    const isErrorResponse = typeof response.result === 'object'
        && response.result !== null
        && response.result.hasOwnProperty('isError');

    if(isErrorResponse) openRequest.reject(response.result);
    else openRequest.resolve(response.result);
}</code></pre>
        </section>

        <br>
        <b>Breaking it down</b>
        <ul>
            <li>
                This method does not ACK itself back to Scatter with any <b class="code-snippet">socket.send</b> response.
                The entire purpose of it is just to return results to our application, it shouldn't be handling any logic.
            </li>
            <li>
                <b class="code-snippet">const openRequest = ...</b> - We're trying to find any open promises we have previously stored so that we can resolve them now that we have their responses.
            </li>
            <li>
                <b class="code-snippet">if(!openRequest) return;</b> - If we can't find a Promise we're simply going to stop handling this request as there is nothing to return the result to.
            </li>
            <li>
                <b class="code-snippet">openRequests = openRequest.filter(x => x.id !== result.id);</b> - We're just removing the cached Promise to free up memory as it's consumed.
            </li>
            <li>
                <b class="code-snippet">const isErrorResponse = ...</b> - Sometimes you'll get errors back from Scatter. To make sure a response is an error it has three predicates. Errors must be an <b>object</b> ( remember we turned the response
                from a JSON string into an object before ), the result <b>must not be <u>null</u></b> as null is an actual return value and lastly the <b class="code-snippet">response.result</b> must have a property named <b>isError</b>
            </li>
            <li>
                <b class="code-snippet">resolve/reject</b> - In the case of JavaScript promises we have two ways to return results. There's <b class="code-snippet">resolve</b> and <b class="code-snippet">reject</b>. You can think of this like a try/catch
                where <b>reject</b> is the catch which forces an error result.
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