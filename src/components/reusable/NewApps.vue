<template>
    <div class="promoted-wrapper">
        <section class="promoted-apps">
           <div class="single-app">
                <a href="" class="promoted-app-background" style="background-image:url(./promos/eosbet.io.jpg)">
                   <div class="promoted-app-blockchain">EOSIO</div>
                </a>
                <section class="promoted-app-info">
                    <div class="ridl-score green">
                        <span class="ridl-average">
                            5.0<br>
                            RIDL
                        </span>
                    </div>
                    <h3 class="promoted-app-title">
                       EOSBet
                    </h3>
                    <div class="promoted-app-desc">
                       EOSBet offers a fully feeless, trustless, and permissionless gaming architecture that allows users to place bets in EOS at zero cost. 
                    </div>
                </section>
           </div> 
           <div class="single-app">
                <a href="" class="promoted-app-background" style="background-image:url(./promos/0xwarriors.io.jpg)">
                   <div class="promoted-app-blockchain">EOSIO</div>
                </a>
                <section class="promoted-app-info">
                    <div class="ridl-score green">
                        <span class="ridl-average">
                            5.0<br>
                            RIDL
                        </span>
                    </div>
                    <h3 class="promoted-app-title">
                       0xWarriors
                    </h3>
                    <div class="promoted-app-desc">
                       Multi-Blockchain
                    </div>
                </section>
           </div> 
           <div class="single-app">
                <a href="" class="promoted-app-background" style="background-image:url(./promos/eosbet.io.jpg)">
                   <div class="promoted-app-blockchain">EOSIO</div>
                </a>
                <section class="promoted-app-info">
                    <div class="ridl-score green">
                        <span class="ridl-average">
                            5.0<br>
                            RIDL
                        </span>
                    </div>
                    <h3 class="promoted-app-title">
                       EOSBet
                    </h3>
                    <div class="promoted-app-desc">
                       EOSBet offers a fully feeless, trustless, and permissionless gaming architecture that allows users to place bets in EOS at zero cost. 
                    </div>
                </section>
           </div> 
           <div class="single-app">
                <a href="" class="promoted-app-background" style="background-image:url(./promos/0xwarriors.io.jpg)">
                   <div class="promoted-app-blockchain">EOSIO</div>
                </a>
                <section class="promoted-app-info">
                    <div class="ridl-score green">
                        <span class="ridl-average">
                            5.0<br>
                            RIDL
                        </span>
                    </div>
                    <h3 class="promoted-app-title">
                       0xWarriors
                    </h3>
                    <div class="promoted-app-desc">
                       Multi-Blockchain
                    </div>
                </section>
           </div> 
        </section>

    </div>
</template>

<script>

    export default {
        name:'NewApps',
        props:["apps"],
        data () {
          return {
            
          }
        },
        components: {

        },
        computed: {
            cats(){
                return this.apps.reduce((acc,x) => {
                    if(!acc[x.type]) acc[x.type] = [];
                    acc[x.type].push(x);
                    return acc;
                }, {})
            }
        }
}
</script>

<style lang="scss">

@import "../../variables";

    

</style>
