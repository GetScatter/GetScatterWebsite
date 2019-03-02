<template>
    <section class="doc-page">

        <h4>Interaction Flow</h4>
        <p>
            Scatter enforces a specific flow for handling user interaction.
            This flow is put in place to protect the user's privacy.
        </p>
        <br><br>

        <h4>Let's take a look at the flow</h4>
        <section class="boxes">
            <figure class="box">Your Dapp</figure>
            <figure class="arrow"><i class="fa fa-long-arrow-right"></i></figure>
            <figure class="box">Connect</figure>
            <figure class="arrow"><i class="fa fa-long-arrow-right"></i></figure>
            <figure class="box">Get Identity</figure>
            <figure class="arrow"><i class="fa fa-long-arrow-right"></i></figure>
            <figure class="box">Sign</figure>
        </section>

        <br>
        <br>

        <h4>Okay, so what does this actually look like?</h4>
        Let's look at a full example of code that goes through the flow for the EOS blockchain.
        <br><br>
        <section class="code-block">
<pre v-highlightjs><code class="javascript">import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';

// Don't forget to tell ScatterJS which plugins you are using.
ScatterJS.plugins( new ScatterEOS() );

// Networks are used to reference certain blockchains.
// They let you get accounts and help you build signature providers.
const network = {
    blockchain:'eos',
    protocol:'https',
    host:'nodes.get-scatter.com',
    port:443,
    chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
}

// First we need to connect to the user's Scatter.
ScatterJS.scatter.connect('My-App').then(connected => {

    // If the user does not have Scatter or it is Locked or Closed this will return false;
    if(!connected) return false;

    const scatter = ScatterJS.scatter;

    // Now we need to get an identity from the user.
    // We're also going to require an account that is connected to the network we're using.
    const requiredFields = { accounts:[network] };
    scatter.getIdentity(requiredFields).then(() => {

        // Always use the accounts you got back from Scatter. Never hardcode them even if you are prompting
        // the user for their account name beforehand. They could still give you a different account.
        const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');

        // You can pass in any additional options you want into the eosjs reference.
        const eosOptions = { expireInSeconds:60 };

        // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
        const eos = scatter.eos(network, Eos, eosOptions);

        // ----------------------------
        // Now that we have an identity,
        // an EOSIO account, and a reference
        // to an eosjs object we can send a transaction.
        // ----------------------------


        // Never assume the account's permission/authority. Always take it from the returned account.
        const transactionOptions = { authorization:[`${account.name}@${account.authority}`] };

        eos.transfer(account.name, 'helloworld', '1.0000 EOS', 'memo', transactionOptions).then(trx => {
            // That's it!
            console.log(`Transaction ID: ${trx.transaction_id}`);
        }).catch(error => {
            console.error(error);
        });

    }).catch(error => {
        // The user rejected this request, or doesn't have the appropriate requirements.
        console.error(error);
    });
});

</code></pre>
        </section>

    </section>
</template>

<script>
    export default {}
</script>

<style lang="scss" rel="stylesheet/scss">

    .boxes {
        width:100%;
        overflow: hidden;
        display:flex;
        justify-content: flex-start;
        align-content: center;

        .box {
            max-width:250px;
            width:calc(25% - 40px);
            border:3px solid rgba(0,0,0,0.2);
            padding:20px;
            text-align:center;
            font-weight: bold;
            font-size: 14px;
            float:left;
            align-content: center;
            justify-content: center;
            align-self: center;
        }

        .arrow {
            align-self: center;
            margin-left:5px;
            width:35px;
            vertical-align: middle;
            font-size: 22px;
            float:left;
            animation: point 1s ease-in-out infinite;
        }

        @keyframes point {
            0%,
            100% {
                transform: translate(0, 0);
            }

            50% {
                transform: translate(10px, 0);
            }
        }
    }
</style>