<template>
    <div class="app-wrapper" :class="{ list: viewType }">
        <input type="text" name="search-component" class="search-component" v-model="searchterms" placeholder="Search" data-aos="fade-up" />
        <div class="col-4" data-aos="fade-up">
            <div class="header-wrap">
                <h4>{{ searchSetTitle }}</h4>
                <Toggle v-on:toggle-view-type="setViewTypeClass"></Toggle>
            </div>
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
        <div class="col-2" data-aos="fade-up">
            <div class="apps-notice blue">
                <i class="fal fa-address-card"></i>
                <h5>Create your<br>EOS Account</h5>
                <p>Did you know you can create an EOS account from right inside Scatter now?</p>
                <router-link class="button" to="/download">Download Scatter</router-link>
            </div>
            <div class="apps-notice blue">
                <i class="fal fa-layer-plus"></i>
                <h5>Add your App</h5>
                <p>If you would like to add your project here, we have an easy way for you to do it! Just add a pull request to our github repository.</p>
                <a class="button" href="https://github.com/GetScatter/ScatterApps">Submit your App</a>
            </div>
            <div class="header-wrap">
                <h4>Tools</h4>
            </div>
            <div class="tool-box">
                <a href="https://eostoolkit.io/home"><span class="title">Bloks.io</span><span class="desc">EOS Block Explorer</span></a>
                <a href="https://cpuemergency.com/"><span class="title">CPU Emergency</span><span class="desc">Where to get some spare CPU or NET if you are stuck.</span></a>
                <a href="https://eostoolkit.io/home"><span class="title">EOS Toolkit</span><span class="desc">Grab your airdrops, manage your EOS account.</span></a>
                <a href="https://eosvotes.io/"><span class="title">EOS Votes</span><span class="desc">Help decide what EOS will be.</span></a>
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
        props:["searchSet","searchSetTitle"],
        computed: {
            filterresults: function () {
                return this.searchSet.filter((item) => {
                    return `${item.name.toLowerCase()} ${item.blockchain.toLowerCase()}`.match(this.searchterms.toLowerCase())
                })
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

    .apps-notice {
        border-radius:20px;
        padding:2rem;
        background:$background;
        margin-bottom:2rem;
        overflow:auto;

        .fal {
            font-size:60px;
            margin-bottom:1rem;
            color:$blue;
        }

        &.blue {
            border-color:$blue;
            padding:4rem 2rem 4rem 2rem;

            h5,p {
                color:$black !important;
                display:block;
                width:100%;
            }

            h5 {
                margin:0;
            }

            p {
                margin-top:0.4rem;
                font-size:1.2rem;
            }

            .button {
                border-color:$blue;
                margin-top:2rem;
            }  
        }

        
    }

    .app-wrapper {
        overflow:hidden;

        h4 {
            float:left;
            font-size:2rem;
            line-height:34px;
        }

        .header-wrap {
            clear:both;
            border-bottom:1px solid $very-light-blue;
            margin-bottom:2.4rem;
            overflow:auto;
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
        line-height:60px;
        padding:10px 24px;
        font-size:2.4rem;
        clear:both;
        width:100%;
        margin:6rem auto;
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

    .tool-box {
        a {
            display:block;
            padding:1rem 0;
            text-align:left;
            text-decoration:none;

            .title {
                font-size:17.5px;
                line-height:24px;
                display:block;
            }
            .desc {
                font-size:14px;
                opacity:0.44;
                display:block;
                color:$black;
            }
        }
    }

</style>
