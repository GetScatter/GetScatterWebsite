<template>
    <div class="app-wrapper" :class="{ list: viewType }">
        <input v-if="!withoutSearch" type="text" name="search-component" class="search-component" v-model="searchterms" placeholder="Search" />
        <div class="app-wrap">
            <div class="app-box" v-for="item in filterresults" >
                <a target="_blank" :href="item.url" class="item-wrapper">
                    <div class="">
                        <div class="item-logo-wrapper">
                            <!--<div class="item-logo" v-if="item.hasOwnProperty('hasimage')" :style="{ backgroundImage: `url(https://rawgit.com/GetScatter/ScatterApps/master/logos/${item.applink}.svg)` }"></div>-->
                            <div class="item-logo" v-if="item.hasOwnProperty('hasimage')">
                                <clazy-load :src="`https://rawgit.com/GetScatter/ScatterApps/master/logos/${item.applink}.svg`">
                                    <img :src="`https://rawgit.com/GetScatter/ScatterApps/master/logos/${item.applink}.svg`">
                                </clazy-load>
                            </div>
                            <div v-else class="item-logo"></div>
                            <div class="item-blockchain">{{ item.blockchain }}</div>
                            <!-- <div class="item-ridl-score green">4.0</div> -->
                        </div>
                        <div class="item-info">
                            <div class="item-name">{{ item.name }}</div>
                            <div v-if="item.description != ''" class="item-type">{{ item.description.substr(0,60) }}{{ item.description.length > 60 ? '...' : '' }}</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        
    </div>
</template>

<script>

    export default {
        name:'Search',
        data(){
            return {
                searchterms:'',
                viewType: false
            }
        },
        props:["searchSet","searchSetTitle", "withoutSearch"],
        computed: {
            filterresults: function () {
                return this.searchSet.filter((item) => {
                    return `${item.name.toLowerCase()} ${item.blockchain.toLowerCase()}`.match(this.searchterms.toLowerCase())
                })
            },
            bycategory(){
            	return this.filterresults.reduce((acc,x) => {
            		if(!acc[x.type]) acc[x.type] = [];
            		acc[x.type].push(x);
            		return acc;
                }, {})
            }
        },
        methods:{
            setViewTypeClass: function(){
                if(this.viewType == true){
                    this.viewType = false; // icons
                } else {
                    this.viewType = true; // list
                }
            }
        }
    }
</script>

<style lang="scss">

@import "../../variables";

    .app-wrapper {
        overflow:hidden;

        h4 {
            float:left;
            font-size:2rem;
            line-height:34px;
        }

        .app-wrap {
            clear:both;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
        }

        .app-box {
            width:33.333%;
            position:relative;
            margin-bottom: 3rem;
            padding:0 3rem 0 0;

            @media(max-width:$breakpoint-small-desktop){
                width:50%;
            }

            @media(max-width:$breakpoint-mobile){
                width:100%;
            }

            .item-wrapper{
                text-decoration: none;    
            }

            .item-logo-wrapper {
                position:relative;
                height: 80px;
                width: 80px;
                margin: 0 auto;
                background-color:$background;
                border-radius:10px 0 6px 10px;;
                overflow:hidden;
                float:left;
                margin:0 1rem 1rem 0;

                .item-logo {
                    height:80px;
                    width:80px;
                    background-repeat:no-repeat;
                    background-size: contain;
                    background-position:center;
                    border-radius:70px;
                    background-size:100%;
                    transition: background-size 0.24s ease-in-out;
                    position:relative;

                }

                .item-blockchain {
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

                .item-ridl-score {
                    border:3px solid $blue;
                    position:absolute;
                    right:3px;
                    bottom:3px;
                    padding:3px;
                    border-radius:20px 20px 3px 20px;
                    font-size:1rem;
                    font-weight:bold;
                    color:$black;
                    background-color:white;

                    &.red {
                        border:3px solid $red;
                    }

                    &.green {
                        border:3px solid $green;
                    }
                }
            }

            &:hover .item-logo {
                background-size:110% !important;
            }

            .item-info {
                text-align:left;

                .item-name {
                    font-size:1.4rem;
                    font-weight:bold;
                    color:$blue;
                    margin:8px 0 6px;
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    text-decoration:none !important;
                    font-family: 'Roboto', sans-serif;
                }

                .item-type {
                    font-size: 1.2rem;
                    margin: 0 0 1rem;
                    text-align: left;
                    line-height: 1.4em;
                    opacity: 0.51;
                    color:$black;
                }
            }

            .item-desc {
                width:100%;
                color:#666;
                font-size:1.34rem;
                line-height:1.44rem;

                .no-description {
                    opacity:0.24;
                }

                p {
                    margin:0;
                    align-self:center;
                    text-align:center;
                    width: 100%;
                    text-shadow:0 4px 10px white;
                }

            }
        }
    }

    .search-component {
        padding:10px 24px;
        font-size:1.4rem;
        clear:both;
        width:100%;
        margin:0 auto 3rem;
        transition:all 0.12s ease-in-out;
        border-radius:60px;
        border: 1px solid $very-light-blue;

        @media (max-width: $breakpoint-tablet) {
            line-height:44px;
            padding:6px 24px;
            font-size:2.4rem;
            margin-bottom:-2rem;
            font-size:1.8rem;
        }

        &:hover,
        &:active,
        &:focus {
            border-color:$blue;
        }
    }

</style>
