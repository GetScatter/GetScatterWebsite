<template>
    <section>
        <section data-aos="fade-up">
        <div id="strat-pic">
          <h3>Partnered Wallets</h3>
        </div>

        <div id="strategic-partners">
          <div class="col-6">
            <h4 class="white">Scatter-js, our awesome SDK for developers, allows some of your favorite wallets to seamlessly interact with any application who uses our platform.</h4>
            <a class="button button-white" href="mailto:business@get-scatter.com">Add your wallet</a>
            <br><br>
            <div class="partners">
              <img src="../../assets/mathwallet.png" alt="Math Wallet" class="partner" />
              <img src="../../assets/sqrl.png" alt="Sqrl" class="partner" />
              <img src="../../assets/meetone.png" alt="MEET.ONE" class="partner" />
              <img src="../../assets/lynx.png" alt="EOS Lynx" class="partner" />
              <img src="../../assets/pocketeos.png" alt="EOS Lynx" class="partner" />
              <img src="../../assets/tokenpocket.png" alt="TokenPocket" class="partner" />
              <img src="../../assets/bitpie.png" alt="More" class="partner" />
              <img src="../../assets/nova.png" alt="NOVA" class="partner" />
              <img src="../../assets/imtoken.png" alt="imToken" class="partner" />
              <img src="../../assets/more.png" alt="More" class="partner" />
              <img src="../../assets/bitkeep.png" alt="Bitkeep" class="partner" />
            </div>
          </div>
        </div>
      </section>
    </section>
</template>

<script>

    export default {
        name: 'Partners'
    }

</script>
<style lang="scss">
    @import "../../variables";

    #strat-pic {
        display:block;
        height:40rem;
        background-color:$background;
        background-image:url('../../assets/strat-pic.jpg');
        background-size:cover;
        background-position:center;
        margin: 12rem 9rem 0;
        position:relative;

        @media(max-width:$breakpoint-small-desktop){
          text-align: center;
          padding: 6rem;
          margin: 6rem 6rem 0;
          height:auto;
        }

        @media(max-width:$breakpoint-tablet){
          text-align: center;
          padding: 6rem;
          margin: 3rem 0 0;
        }

        h3 {
          margin:0;
          position:absolute;
          bottom:9rem;
          left:9rem;
          margin:0 0 2rem;
          line-height:4.2rem;
          background:transparent;
          -webkit-background-clip: initial;
          -webkit-text-fill-color: initial;
          color:white;
          text-shadow: 0 2px 4px rgba(0,0,0,0.44);

          @media(max-width:$breakpoint-small-desktop){
            text-align: center;
            position:relative;
            bottom:initial;
            left:initial;
            right:initial;
            font-size:4.4rem;
            margin:0;
          }
        }

      }

      #strategic-partners {
        background-image:$blue-gradient;
        overflow:auto;
        text-align: left;
        padding: 9rem;
        margin: 0 9rem 12rem;
        position:relative;

        .button {
          color:white;
          margin-top:3rem;
        }

        @media(max-width:$breakpoint-small-desktop){
          text-align: center;
          padding: 6rem;
          margin: 0 6rem 6rem;

          .col-2,
          .col-4 {
            width:100%;
          }

          .col-4 {
            padding-top:6rem;
          }
        }

        @media(max-width:$breakpoint-tablet){
          padding: 2rem;
          margin: 0rem;
        }

        .partners {
          display:flex;
          flex-direction:row;
          flex-wrap:wrap;
          justify-content:space-between;
          align-items:center;

          img {
            width:auto;
            max-width:20%;
            height:auto;
          }

          .partner {
            margin:3rem;

          }
        }

        
      }

</style>