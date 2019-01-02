<template>
  <div id="ridl">

    <section id="leadin" class="body padded padded-large">
      <div class="body-text">
        <h1>Reputation &amp; Identity Layer</h1>
        <div class="row">
          <div class="col-12">
            <a href="https://ridl.get-scatter.com/" class="button button-large button-primary" target="_blank">Donate with Scatter</a>
          </div>
        </div>
        <div class="row secondary-buttons">
          <div class="col-12">
            <p>Reputation inside an anonymous and trust-less system lays the foundation for more robust systems to be built on top of that trust. Every entity on a blockchain is unique, even the duplicates; and can have reputation assigned to them. These entities can be domains, blockchain addresses, public keys or accounts, decentralized or centralized applications, users of specific applications, or any other type of entity known by a unique identifier or name.</p>

            <p>One of the basic use-cases of RIDL is an exchange known not to release funds. Such an exchange will have a poor reputation designated by a low rating, which generates an alert that you shouldn’t trust them. The community members can hold not only one another accountable but also applications; providing a safer and more trustworthy environment both on the blockchain and off of it.</p>

            <p>In order to make sure users aren’t indefinitely squatting on identity names, there is a nominal yearly fee to retain ownership of a given unique identity and its reputation. The price is tied to a dollar value, and the yearly fee is currently $25.</p>
            <h3>RIDL Defender</h3>
            <p>The RIDL Defender system is Scatter’s personal use-case for RIDL within the Scatter ecosystem. Every Scatter user benefits from the protection that RIDL provides but only those who register with the system can affect reputations and become a unique entity across all blockchains. Along with those abilities they also gain the possibility of mining more tokens by being the first or next in line to repute an entity.</p>

            <p>When a user tries to interact with an application or send tokens to another user RIDL will fetch that entity’s reputation and display warnings about it if certain fragments of that reputation are negative. For instance if an address they are about to send tokens to is a known “scam” then a warning will be displayed to the user.</p>

            <p>Let’s return to the example of an exchange. If an exchange has been given negative “privacy” frament reputation and you are about to sign a transaction transferring your tokens to that exchange, Scatter will display a warning that includes the score in relation to all other similar scores (percentage based on the entire network), an explanation of the score, and the total number of users that have reputed that exchange. In this case it would inform the user that other users are reporting their private information is being leaked.</p>
          </div>
        </div>
      </div>
    </section>
    <br>
    <br>
    <br>
    <br>

    <section id="malware-image"></section>

    <section id="leadin" class="body padded padded-large">
      <div class="body-text">
        <div class="row">
          <div class="col-12">
            <p>In contrast to a curated list (which is what so many other platforms are offering), this warning system is fully decentralized, dynamic, and guided by the users that use the applications.</p>

            <p>Reputations aren’t forever though. Just because an exchange is the most trusted exchange today doesn’t mean it will be two months from now. With RIDL, reputations are based on the network as a whole. As other entities gain or lose reputation all other reputations reflect that impact. If an exchange was used avidly by users for only a single month and then did something users didn’t like that made them switch to another exchange their reputation would slowly degrade as the other exchange’s reputation grows in comparison. This allows for a truly free market which is powered by users and not monopolies.</p>

            <p>This implications of what this system can offer both users and applications in the future are massive. We have yet to even begin scratching the surface of all the possibilities that a robust user-generated layer of trust provides for the general well-being of the network that sits on top of it.</p>
          </div>
        </div>
      </div>
    </section>
    <br>
    <br>

    <section id="get-started" class="body dimmed padded padded-large">
      <div class="row">
        <div class="col-6">
          <h3>Want to learn more about RIDL?</h3>
          <a class="button button-primary" href="https://docs.google.com/document/d/1cDcERQUAA3W21XtJhHlqfL2LauiELmOE_b5J2Q3acJg/view">Read the Whitepaper</a>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Ridl' //this is the name of the component
}
</script>

<style lang="scss">
    @import "../variables";

#app.ridl {
  background-color:$darkgrey;
  background-image: linear-gradient(-180deg, $darkgrey 0px, lighten($darkgrey, 10%) 200px);
  position:relative;
  z-index:0;

  .header nav a.spacing {
    color: $white;
  }
  .header nav a.spacing:hover, 
  .header nav a.spacing:focus, 
  .header nav a.spacing:active, 
  .header nav a.spacing.router-link-exact-active {
    color: $blue;
  }

  .row {
    
    p {
      text-align:left;
    }
  }

  section#malware-image {
    background-image:url('../assets/gs_ridltoken_malware.png');
    height:220px;
    background-position:center;
    background-size:auto;
    background-color:$white;
    background-repeat:no-repeat;
    margin-top:-10rem;
  }

}

</style>