<template>
    <div id="blockchain_eos">

        <section class="body">
          <div class="body-text">
            <div class="row">
              <div class="col-4">
                <h1>So what is EOS?</h1>
                <h4>EOS is a blockchain network you can connect to. It has 21 block producers who perform the transactions of the network. These block producers are voted into position from a pool of candidates by the token holders. 

                The network has accounts. These accounts are 12 letters and numbers long. EOS allows accounts to hold a token, also called EOS. This token enables the user to perform transactions on the network.</h4>

                EOS accounts have two permissions by default: OWNER and ACTIVE. Owner is for ROOT level access. This means things like reassigning a private key where the action could result in loss of access to the account. ACTIVE is for most basic transactions like sending tokens to another account. A dapp can append its own permission to a user's account.

                Because designing software is a continuous process, it is critical that any network on any blockchain be upgradeable. EOS handles this elegantly by voting for software changes. Once a threshold is achieved, all the block producers upgrade to that version.

                A smart contract is simply a piece of software that runs on the network. When a user goes to play a game, he tells the smart contract "Do this thing!" and the smart contract goes to the network and tells them all "I'm doing this thing!". That transaction is then posted immutably to the blockchain as "This thing happened!"


              </div>
            </div>
          </div>
        </section>

    </div>
</template>

<script>

    export default {
        name: 'EOS'
    }

</script>
<style lang="scss">
    @import "../variables";

    #download {
        background-image:url('../assets/features_bg.png');
        background-size:100%;
        background-position:top center;
        background-repeat:no-repeat;
        background-color:$white;
        text-align:left;

        .release-notes li {
          list-style: none;
          margin: 3rem 3rem 3rem 1.8rem;
        }

        .release-notes li::before {
          content: "\2022";
          color: $blue;
          font-weight: bold;
          font-size:2.4rem;
          line-height:2rem;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }

        h1 {
            margin-top: 12rem;
        }

        .button {
          margin:0 10px 3rem 0;
          svg {
            height:16px;
          }
        }

        .checksum-title {
          color:$black;
          font-size:1.8rem;
        }

        .checksum {
          padding:2rem;
          border:3px solid $black;
          border-radius:3px;
          margin-bottom:2rem;
          line-height:1.8rem;
        }
    }

</style>