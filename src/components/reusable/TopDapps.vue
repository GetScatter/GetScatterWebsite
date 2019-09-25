<template>
    <div class="promoted-wrapper">
        <h3>Popular Apps</h3>
        <section class="promoted-apps">
           <div class="single-app">
                <a href="https://eosbet.io/?ref=scatterrefer&utm_campaign=eos+bet+standard" class="promoted-app-background" style="background-image:url(./promos/eosbet.io.jpg)">
                   <div class="promoted-app-blockchain">EOSIO</div>
                </a>
            </div>  
           <div class="single-app">
                <a href="https://mycryptovegas.io/?ref=354625577968&utm_campaign=crypto+vegas+slot+wars" class="promoted-app-background" style="background-image:url(./promos/mycryptovegas.jpg)">
                   <div class="promoted-app-blockchain">EOSIO</div>
                </a>
            </div>
            <div class="single-app">
                <a href="https://www.hirevibes.io/?utm_campaign=hirevibes+standard" class="promoted-app-background" style="background-image:url(./promos/hirevibes.jpg)">
                   <div class="promoted-app-blockchain">EOSIO</div>
                </a>
            </div> 
            <div class="single-app">
                <a href="https://prospectors.io?ref=scatterrefer&utm_campaign=prospectors+standard" class="promoted-app-background" style="background-image:url(./promos/prospectors.jpg)">
                   <div class="promoted-app-blockchain">EOSIO</div>
                </a>
            </div>
            <div class="single-app">
                <a href="https://cryptomaniaslots.com/?ref=scatterrefer&utm_source=scatter.com/apps&utm_medium=banner&utm_campaign=blck" class="promoted-app-background" style="background-image:url(./promos/cryptomania.jpg)">
                   <div class="promoted-app-blockchain">EOSIO</div>
                </a>
            </div> 

           <div class="single-app">
                <a href="https://bethash.io/?ref=scatterrefer&utm_campaign=bethash+standard" class="promoted-app-background" style="background-image:url(./promos/bethash.jpg)">
                   <div class="promoted-app-blockchain">EOSIO</div>
                </a>
            </div> 
            <div class="single-app">
                <a href="https://trustdice.win/faucet?coinbox&ref=scatterrefer&utm_campaign=trustdice+standard" class="promoted-app-background" style="background-image:url(./promos/trustdice.win.jpg)">
                   <div class="promoted-app-blockchain">EOSIO</div>
                </a>
            </div> 
            
            <div class="single-app">
                <a href="https://dice.one/?ref=scatterrefer&utm_campaign=dice+standard" class="promoted-app-background" style="background-image:url(./promos/dice.one.jpg)">
                   <div class="promoted-app-blockchain">EOSIO</div>
                </a>
            </div>
        </section>

    </div>
</template>

<script>

    export default {
        name:'Promoted',
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
                    console.log(acc);
                    return acc;
                }, {})
            }
        }
}
</script>

<style lang="scss">

@import "../../variables";

    .promoted-wrapper {

        padding:0rem 4rem 0;
        width:100%;

        .promoted-apps {
            overflow:visible;
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:space-between;

            .single-app {
                overflow:visible;
                width:50%;
                margin-bottom:2rem;

                @media (max-width: $breakpoint-small-desktop) {
                    width:33.3333%;
                }

                @media (max-width: $breakpoint-tablet) {
                    width:50%;
                }

                @media (max-width: $breakpoint-mobile) {
                    width:100%;
                }

                .promoted-app-background {
                    height:180px;
                    border-radius:20px;
                    background-position:center;
                    background-size: cover;
                    position:relative;
                    display:block;
                    width:96%;
                    margin:0 2%;
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
                        margin:0 1rem 1rem 0;
                        text-align:left;
                        line-height: 1.4em;
                        opacity:0.51;
                    }
                }
            }

            
        }

        .app-categories {
            clear:both;
            margin:0 0 3rem;
        }   
    }

</style>
