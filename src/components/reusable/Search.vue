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
                        </div>
                        <div class="item-name">{{ item.name }}</div>
                        <div class="item-type">{{ item.type }}</div>
                        <div class="item-blockchain">{{ item.blockchain }}</div>
                        <!-- <div class="item-desc" v-if="item.description != ''">{{ item.description.substr(0,60) }}{{ item.description.length > 60 ? '...' : '' }}</div> -->
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
        }

        .app-box {
            width:25%;
            float:left;
            margin:0 auto;
            position:relative;
            margin-bottom: 4rem;
            padding:1rem;
            border-radius:20px;

            &:hover {
                background:$background;
            }

            @media(max-width:$breakpoint-tablet){
                width:33.3333%;
            }

            .item-wrapper{
                text-decoration: none;    
            }

            .item-logo-wrapper {
                position:relative;
                height: 60px;
                width: 60px;
                margin: 0 auto;

                .item-logo {
                    height:60px;
                    width:60px;
                    background-repeat:no-repeat;
                    background-size: contain;
                    background-position:center;
                    border-radius:70px;
                    background-size:100%;
                    transition: background-size 0.24s ease-in-out;
                }
            }

            &:hover .item-logo {
                background-size:110% !important;
            }
            
            .item-name {
                font-size:1.4rem;
                font-weight:bold;
                color:$black;
                margin:8px 0 6px;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                text-decoration:none !important;
                font-family: 'Roboto', sans-serif;
            }

            .item-type {
                font-size:1rem;
                color:darken($very-light-blue, 50%);
                margin:4px;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
            }

            .item-blockchain {
                color:darken($very-light-blue, 50%);
                font-size:1rem;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
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

        &.list {
            .app-box {
                width:50%;
                height:auto;
                padding:2rem;
                margin:0;
                border-radius:0;

                @media (max-width: $breakpoint-mobile) {
                    width:100%;
                }

                .item-wrapper {
                    text-align: left;

                    .item-logo-wrapper {
                        width:44px;
                        height:44px;
                        float:left;
                        border-radius:6px;

                        .item-logo {
                            width:44px;
                            height:44px;
                        }

                    }

                    .item-name {
                        margin: 0 0 8px 60px;
                    }

                    .item-type {
                        margin: 0 0 8px 60px;
                    }

                    .item-blockchain {
                        margin: 0 0 8px 60px;
                    }
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
