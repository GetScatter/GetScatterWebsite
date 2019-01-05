<template>
    <div class="app-wrapper" :class="{ list: viewType }">
        <input type="text" name="search-component" class="search-component" v-model="searchterms" placeholder="Search" />
        <div class="col-4">
            <div class="header-wrap">
                <h4>{{ searchSetTitle }}</h4>
                <Toggle v-on:toggle-view-type="setViewTypeClass"></Toggle>
            </div>
            <div class="app-wrap">
                <div class="app-box" v-for="item in filterresults" >
                    <a target="_blank" :href="item.url" class="item-wrapper">
                        <div class="">
                            <div class="item-logo-wrapper">
                                <div class="item-logo" v-if="item.hasOwnProperty('hasimage')" :style="{ backgroundImage: `url(https://rawgit.com/GetScatter/ScatterApps/master/logos/${item.applink}.svg)` }"></div>
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
        <div class="col-2">
            <div class="apps-notice blue">
                <i class="fal fa-address-card"></i>
                <h5>Create your<br>EOS Account</h5>
                <p>Did you know you can create an EOS account from right inside Scatter now?</p>
                <a class="button" href="/download">Download Scatter</a>
            </div>
            <div class="apps-notice blue">
                <i class="fal fa-layer-plus"></i>
                <h5>Add your App</h5>
                <p>If you would like to add your project here, we have an easy way for you to do it! Just add a pull request to our github repository.</p>
                <a class="button">Submit your App</a>
            </div>
            <div class="header-wrap">
                <h4>Tools</h4>
            </div>
            <div class="tool-box">
                <ul>
                    <li><a href="">EOS Toolkit</a></li>
                </ul>
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
                color:$black;
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
            border-bottom:3px solid $very-light-blue;
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
                height: 72px;
                width: 72px;
                margin: 0 auto;
                margin: 0 auto;
                border-radius: 20px;
                overflow: hidden;

                .item-logo {
                    height:72px;
                    width:72px;
                    background-image:url('../../assets/default.png');
                    background-repeat:no-repeat;
                    background-size: contain;
                    background-position:center;
                    background-color: #f7f7f7;
                    
                }
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
                width:100%;
                height:auto;
                border-bottom:1px solid rgba(0,0,0,.12);
                padding:20px 0;
                margin:0;

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

                    .item-desc {
                        margin: 0 0 0 60px;
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
        margin-bottom:6rem;
        transition:all 0.12s ease-in-out;
        border-radius:60px;
        border: 3px solid $very-light-blue;

        &:hover,
        &:active,
        &:focus {
            border-color:$blue;
        }
    }
</style>
