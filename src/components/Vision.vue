<template>
  <div id="vision">

    <section class="body">
      <div class="body-text">
        <div class="row">
          <div class="col-3 align-left">
            <h2>Vision</h2>
            <h4>Scatter has grown, matured, and seen a meteoric uptake in use within the blockchain community. There are huge opportunities on the horizon, especially with the extensive development of and soaring interest in decentralized blockchain apps.</h4>
          </div>
          <div class="col-3 align-left" id="roadmap">
            <h4 class="sub-header">Scatter's Achievements</h4>
            <div class="vision-item"><p class="title">Scatter classic extension</p><p class="date">Q4 2017</p></div>
            <div class="vision-item"><p class="title">Identities and user privacy</p><p class="date">Q1 2018</p></div>
            <div class="vision-item"><p class="title">Scatter desktop and Scatter JavaScript SDK</p><p class="date">Q2 2018</p></div>
            <div class="vision-item"><p class="title">Scatter desktop audit</p><p class="date">Q3 2018</p></div>
            <div class="vision-item"><p class="title">Scatter for Android alpha</p><p class="date">Q3 2018</p></div>
            <div class="vision-item"><p class="title">Simplifying Scatter for everyday users</p><p class="date">Q4 2018</p></div>
            <div class="vision-item"><p class="title">Tron Blockchain Support</p><p class="date">Q4 2018</p></div>
            <div class="vision-item"><p class="title">RIDL Mainnet Airdrop</p><p class="date">Q4 2018</p></div>
            <div class="vision-item"><p class="title">Unity3d Scatter SDK</p><p class="date">Q1 2019</p></div>
          </div>
        </div> 
        <div class="row">
          <div class="col-6 align-left separator" id="continued">       
            <div class="vision-item"><h3 class="white">Full steam ahead</h3></div>
          </div>
        </div>
        <div class="row">
          <div class="col-3">&nbsp;</div>
          <div class="col-3 align-left" id="future">
            <div class="vision-line"></div>
            <h4 class="sub-header">Up next for our team</h4>
            <div class="vision-item"><p class="title">RIDL System on the Testnet</p><p class="date">2019</p></div>
            <div class="vision-item"><p class="title">Scatter Desktop Game Competition</p><p class="date">2019</p></div>
            <div class="vision-item"><p class="title">Scatter Marketplace</p><p class="date">2019</p></div>

            <h4 class="sub-header">Planned for 2019</h4>
            <div class="vision-item"><p class="title">Scatter Mobile for Android</p><p class="date">2019</p></div>
            <div class="vision-item"><p class="title">Scatter Bridge</p><p class="date">2019</p></div>
            <div class="vision-item"><p class="title">Integrated support for more blockchains</p><p class="date">2019</p></div>
            <div class="vision-item"><p class="title">Scatter Mobile for iOS</p><p class="date">2019(?)</p></div>
            <div class="vision-item"><p class="date">GetScatter reserves the right to update these dates as needed.</p></div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Vision'
}

</script>

<style lang="scss">
@import "../variables";


#vision {
  background-color:white;
  text-align:center;

  #roadmap {
    margin-top:11rem;
  }

  .row {
    
    p {
      text-align:left;
    }

    h3 {
      margin:2rem 0;
    }
  }

  .vision-item {
    width:100%;

    p {
    }

    .title {
      margin:0 auto;
    }

    .date {
      font-size: 14px;
      font-weight:bold;
      color: #C2C2C6;
      line-height: 28px;
    }
  }

}

</style>