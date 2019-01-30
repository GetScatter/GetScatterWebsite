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
        </section>

        <section class="app-categories">
            <!-- What i'm actually looking for is a series of discrete sections with apps that fall into them -->
            <h4>Gambling</h4>
            <section class="single-app">
                <!-- <div class="item-logo" v-if="item.hasOwnProperty('hasimage')"> -->
                    <!-- <clazy-load :src="`https://rawgit.com/GetScatter/ScatterApps/master/logos/${item.applink}.svg`"> -->
                        <!-- <img :src="`https://rawgit.com/GetScatter/ScatterApps/master/logos/${item.applink}.svg`"> -->
                    <!-- </clazy-load> -->
                <!-- </div> -->
                <!-- <div v-else class="item-logo"></div> -->
            </section>
        </section>
    </div>
</template>

<script>

    export default {
        name:'Promoted',
        props:["Apps"],
        data () {
          return {
            
          }
        },
        components: {

        },
        computed: {
            bycategory(){
                return this.filterresults.reduce((acc,x) => {
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

    .promoted-wrapper {
        .promoted-apps {
            overflow:visible;
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:space-between;

            .single-app {
                overflow:visible;
                width:48%;
                margin-bottom:3rem;

                .promoted-app-background {
                    height:240px;
                    border-radius:20px;
                    background-position:center;
                    background-size: cover;
                    position:relative;
                    display:block;
                    width:100%;
                    transition:0.12s all ease-in-out;

                    &:hover {
                        transform:scale(1.04);
                        box-shadow:0 4px 8px rgba($dark-blue, 0.52), 0 8px 24px rgba($darkgrey, 0.12);
                    }

                    .promoted-app-blockchain {
                        position:absolute;
                        top:0;
                        right:0;
                        background:white;
                        padding:0 0 3px 4px;
                        border-radius:0 0 0 4px;
                        font-size:1rem;
                        font-weight:bold;
                        color:$black;
                    }
                }

                .promoted-app-info {
                    
                    .ridl-score {
                        width:60px;
                        height:60px;
                        border-radius:30px 30px 6px 30px;
                        border:3px solid $blue;
                        float:left;
                        margin:0 1rem 3rem 0;
                        display: flex;
                        flex-direction: column;
                        align-items:center;
                        justify-content: center;
                        font-size:1rem;
                        font-weight:bold;
                        color:$black;

                        &.red {
                            border:3px solid $red;
                        }

                        &.green {
                            border:3px solid $green;
                        }

                        .ridl-average {
                            align-self:center;
                        }
                    }

                    .promoted-app-title {
                        font-size:1.4rem;
                        line-height:2rem;
                        margin:3rem 0 1rem;
                    }

                    .promoted-app-desc {
                        margin-top: 0.4rem;
                        font-size: 1.2rem;
                        margin:0 0 1rem;
                        text-align:left;
                        line-height: 1.4em;
                        opacity:0.51;
                    }
                }
            }

            
        }

        .app-categories {
            clear:both;
            margin:3rem 0;
        }   
    }

</style>
