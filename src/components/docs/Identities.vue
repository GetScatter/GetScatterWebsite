<template>
    <section class="doc-page">

        <h4>What are Identities?</h4>
        <p>
            In Scatter Identities are containers for personal data, and authentication / permission mechanisms.
            <br><br>
            As an application you can't access anything about a user's Scatter without first requesting an Identity, and having them
            approve giving you one. This protects a user's private information such as their blockchain accounts and personal data from being leaked
            to random websites on the internet that aren't even integrated with Scatter, and also those which the user has yet to interact with and approve.
            <br><br>
            On top of that level of privacy protection they also serve as a way for applications to get information about their users without requiring the user to
            fill out the same forms over and over again across multiple websites.
            <br><br>
            Take the <b class="code-snippet">getIdentity()</b> request below as an example.
        </p>

        <section class="code-block">
<pre v-highlightjs><code class="javascript">scatter.getIdentity({
    personal:['firstname', 'lastname'],
    location:['country'],
    accounts:[network]
}).then(identity => {

    // This would give back an object with the required fields such as `firstname` and `lastname`
    // as well as add a permission for your domain or origin to the user's Scatter to allow deeper
    // requests such as requesting blockchain signatures, or authentication of identities.
    console.log(identity);

}).catch(error => {
    //...
});
</code></pre>
        </section>

        <h2>Once logged in, the permission persists.</h2>
        <p>
            After a user has approved giving you permission to access their Identity you no longer have to call <b class="code-snippet">getIdentity()</b> if the user refreshes
            the page.
            <br><br>
            Instead you can check if an Identity exists on the <b class="code-snippet">scatter</b> object itself. This also means that you don't have to
            save the Identity within your shared services along-side your Scatter reference, you can simply save your Scatter reference and pull the identity from
            within it.
        </p>
        <section class="code-block">
            <pre v-highlightjs><code class="javascript">if(scatter.identity){ /*...*/ }</code></pre>
        </section>

        <h2>Identities as an Authentication System</h2>
        <p>
            Identities have their own set of keypairs, and can be used to authenticate users by having them sign your domain or origin using the Identity's
            private key. You can then double check that the result was signed by the public key you have on file and issue them a token to talk to your backend
            without having to ask them to enter a password.
            <br><br>
            This not only is Blockchain agnostic but it also works with centralized applications as well since it's only powered by asymmetric encryption ( keypairs ).
        </p>

        <section class="code-block">
<pre v-highlightjs><code class="javascript">// Once a user has given you an Identity you can simply do

scatter.authenticate(12_CHAR_RANDOM_STRING).then(result => {

    // Authentication passed, you can also
    // double validate the the public key on their
    // identity has signed the returned `result` which will be
    // your domain

}).catch(error => {
    // Authentication Failed!
});
</code></pre>
        </section>

        <h2>At some point, people will want to log off.</h2>
        <p>
            When a user wants to log off of your website, or just log in with another Identity/username you can simply use the <b class="code-snippet">forgetIdentity()</b> method
            which will remove the permission that links their Identity to your domain.
            <br><br>
            If a user has <i>other</i> permissions such as whitelisted contract actions, they will be left in place and will still work the next time the user logs in with the
            Identity linked to them.
        </p>
        <section class="code-block">
<pre v-highlightjs><code class="javascript">scatter.forgetIdentity()</code></pre>
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