<template>
    <section class="doc-page">

        <h4>Requirable Fields</h4>
        <p>
            You can require specific fields to be given back to your app from a user's Identity on both Identity Requests and Signature Requests.
            <br><br>
            Below is a list of fields available on a user's Identity which can be required.
        </p>
        <br>

        <table>
            <thead>
                <tr>
                    <td>Field Name</td>
                    <td>Field Type</td>
                    <td>Field Sub-Types</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="requirable in requirables">
                    <td>{{requirable.name}}</td>
                    <td>{{requirable.type}}</td>
                    <td>
                        <ul>
                            <li v-for="type in requirable.types">{{type}}</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
        <br>
        <p>
            Aside from those requirable fields, you also always get these fields back when requesting an Identity.
        </p>
        <br>
        <table>
            <thead>
            <tr>
                <td>Field Name</td>
                <td>Field Type</td>
                <td>Description</td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="returned in alwaysReturned">
                    <td>{{returned.name}}</td>
                    <td>{{returned.type}}</td>
                    <td>{{returned.description}}</td>
                </tr>
            </tbody>
        </table>
        <br>
        <br>
        <br>
        <br>
        <h2>Let's look at a some examples</h2>
        <p>
            We wont be putting this object into any request, but we'll go over a few different ways to build the object to complete different goals.
        </p>
        <br>

        <section class="code-block">
<pre v-highlightjs><code class="javascript">// --------------------------------------------------------------
// This is a full required fields object, including every property
// and a full accounts array to get some blockchain accounts to work with..
// --------------------------------------------------------------

const requiredFields = {
    personal:['firstname', 'lastname', 'email', 'birthdate'],
    location:['phone', 'address', 'city', 'state', 'country', 'zipcode'],
    accounts:[
        {blockchain:'eos', host:'127.0.0.1', port:8888, chainId:'aca....'},
        {blockchain:'eth', chainId:1}
    ]
};

// RESULT
{
    personal:{
        firstname:'Clark',
        lastname:'Kent',
        email:'superheroes@anonymous.com',
        birthdate:'29-3-1938'
    },
    location:{
        phone:'555-5555',
        address:'1938 Sullivan Lane',
        city:'Nowhere',
        state:'OK',
        country:{ code:'US', name:'United States' },
        zipcode:'73038'
    },
    accounts:[
        { blockchain:'eos', name:'testaccount', authority:'active', publicKey:'EOS6MRyAjQq...' },
        { blockchain:'eth', address:'0x622ec43559d4201640...' }
    ]
}


// --------------------------------------------------------------
// Let's say you only needed an EOS blockchain account for a user
// when requesting the Identity so that you knew who to sign things from.
// --------------------------------------------------------------

const requiredFields = {
    accounts:[ { blockchain:'eos', chainId:'aca....' } ]
};

// Or even better, because you most likely already have a network defined somewhere..
const requiredFields = {
    accounts:[ yourNetwork ]
};

// RESULT
{
    accounts:[
        { blockchain:'eos', name:'testaccount', authority:'active', publicKey:'EOS6MRyAjQq...' },
    ]
}



// --------------------------------------------------------------
// What if you only needed to gather a user's email
// after they sign a transaction so that you can send them a receipt?
// --------------------------------------------------------------

const requiredFields = {
    personal:['email']
};

// RESULT
{
    personal:{
        email:'superheroes@anonymous.com'
    }
}
</code></pre>
        </section>



        <h2>Getting Blockchain Accounts</h2>
        <p>
            Since you can get multiple accounts for multiple blockchains or even for the same blockchain you will need to parse out the results and fetch accounts you need.
            While you might be tempted to get multiple accounts per blockchain it will be easier for you to get one of each if even that.
        </p>

        <section class="code-block">
<pre v-highlightjs><code class="javascript">// EOS
const account = scatter.identity.accounts.find(account => account.blockchain === 'eos')

// Ethereum
const account = scatter.identity.accounts.find(account => account.blockchain === 'eth')

// Multiple accounts per blockchain
const account = scatter.identity.accounts.filter(account => account.blockchain === 'eos')

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