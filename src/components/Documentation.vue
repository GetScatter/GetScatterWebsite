<template>
    <section id="documentation" class="body padded padded-large" style="text-align:left;">
        <section class="docs">

            <section class="sidebar" :class="{'show':mobileMenu}">

                <section class="head">
                    {{menu.head}}
                    <div></div>
                </section>

                <section class="links">
                    <doc-menu-link :key="doc.route" v-for="doc in menu.docs" :doc="doc" :active="activeLinks" v-on:clicked="clickedMenuLink"></doc-menu-link>
                </section>

            </section>

            <section class="page">
                <component v-if="pageComponent" :is="pageComponent"></component>
            </section>

        </section>
    </section>

</template>

<script>

    const findRoute = (docs, route) => {
        let res = null;
        if(!route) return null;
        docs.map(doc => {
            if(!doc.hasOwnProperty('children')) return null;
            if(doc.route === route) res = doc;
            const found = findRoute(doc.children, route);
            if(found) return res = found;
        });
        return res;
    };

    const rebuildActiveLinks = (docs, lastRoute) => {
        let links = [];
        let done = false;
        docs.map(doc => {
            if(done) return false;
            if(doc.route === lastRoute) return links.push(lastRoute);

            if(doc.hasOwnProperty('children') && doc.children.length){
                const found = rebuildActiveLinks(doc.children, lastRoute);
                if(found.length){
                    links.push(doc.route);
                    links = links.concat(found);
                }
            }

            done = links.includes(lastRoute);
        });
        return links;
    };

    import {devDocs} from '../data/devDocs';

    export default {
        data(){ return {
            menu:devDocs,
            activeLinks:[],
            mobileMenu:false,
        }},
        computed:{
            breadcrumbs(){
                let crumbs = [];
                this.activeLinks.reduce((lastObj,route) => {
                    if(lastObj === null) lastObj = this.menu.docs.find(x => x.route === route);
                    else lastObj = lastObj.children.find(x => x.route === route)
                    crumbs.push(lastObj);
                    return lastObj;
                }, null);
                return crumbs.slice(crumbs.length - 2, crumbs.length);
            },
            pageComponent(){
                return this.activeLinks.length ? `${this.menu.base}-${this.activeLinks[this.activeLinks.length-1]}` : null;
            }
        },
        mounted(){
            this.activeLinks = rebuildActiveLinks(this.menu.docs, this.$route.params.doc);
        },
        methods:{
            clickedMenuLink(doc){
                this.$router.push({name:'docs', params:{type:this.menu.base, doc:doc.route}});
                if(!this.activeLinks.length) this.activeLinks.push(doc.route);
                else {
                    let index = 0;
                    const found = () => findRoute(this.menu.docs, this.activeLinks[index]);
                    while(found()){
                        const possible = found();
                        if(!!possible && possible.hasOwnProperty('children') && possible.children.map(x => x.route).includes(doc.route)){
                            this.activeLinks = this.activeLinks.splice(0, index+1);
                            return this.activeLinks.push(doc.route);
                        }
                        index++;
                    }
                    this.activeLinks = [doc.route];
                }
            }
        },
        watch:{
            pageComponent(){
                window.scrollTo(0, 0)
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../_variables.scss";

    #documentation {
        text-align:center;
        background-color:white;
    }

    .docs {
        width:100%;
        height:100%;
        min-height:800px;

        .sidebar {
            /*position: fixed;*/
            /*left: 0;*/
            /*top: 80px;*/
            /*bottom: 0;*/
            float:left;
            overflow-y: auto;
            width: 320px;
            border-right: 1px solid rgba(0, 0, 0, 0.05);
            padding-bottom: 50px;

            @media (max-width:600px){
                left:-100%;
                width:100%;
                border-bottom:1px solid rgba(0,0,0,0.1);

                &.show {
                    left:0;
                    position: relative;
                }
            }

            .head {
                padding:30px;
                padding-top:0;
                font-size: 22px;
                color:$black;
                font-weight: 600;

                div {
                    margin-top:30px;
                    border-bottom:1px solid rgba(0,0,0,0.05);
                }
            }

            .links {
                padding:0 30px 0 10px;
                font-size: 13px;

                .link {
                    cursor: pointer;
                    padding:10px;

                    &.active {
                        font-weight: 800;
                        background:$very-light-blue;
                    }

                    .icon {
                        display:inline-block;
                        padding-right:10px;
                        vertical-align: top;
                    }

                    .text {
                        display:inline-block;
                    }

                    .icon ~ .text {
                        width:calc(100% - 26px);
                    }

                }

                .children {
                    max-height:0;
                    overflow: hidden;

                    &.open {
                        max-height:1000px;
                    }
                }
            }
        }

        .page {
            width:calc(100% - 320px);
            float:left;

            @media (max-width:600px){
                margin-left:0;
                width:100%;
            }

            .breadcrumbs {
                float:left;
                height:50px;
                background:$very-light-blue;
                font-size: 14px;
                line-height:50px;
                padding:0 20px;
                box-shadow:0 1px 0 #fff;
                width:100%;
                margin-bottom:50px;

                .menu-toggler {
                    display:none;
                }

                @media (max-width:600px){
                    left:0;

                    .menu-toggler {
                        display:inline-block;
                        float:left;
                        padding-right:15px;
                        cursor: pointer;
                    }
                }

                .breadcrumb {
                    cursor: pointer;
                    float:left;
                    color:$black;
                    transition: color 0.2s ease;

                    i {
                        padding:0 10px;
                        font-size: 11px;
                    }

                    &:not(:last-child){
                        color: rgba(255,255,255,0.7);

                        &:hover {
                            text-decoration: underline;
                            color:$black;
                        }
                    }

                    &:last-child {
                        font-weight: 600;
                    }
                }
            }

            .doc-page {
                padding:0 50px 50px;

                table {
                    min-width:600px;
                    border: 1px solid rgba(0,0,0,0.1);

                    ul {
                        padding-left:20px;
                    }

                    td {
                        padding:10px;
                        border-bottom:1px solid rgba(0,0,0,0.1);
                        border-right:1px solid rgba(0,0,0,0.1);
                        font-size: 18px;

                        &:nth-child(1) {
                            min-width: 100px;
                        }

                        &:nth-child(2) {
                            min-width: 180px;
                        }
                    }

                    thead {
                        padding:10px;

                        td {
                            font-size: 13px;
                        }
                    }
                }

                .code-snippet {
                    padding:5px 10px;
                    background:$very-light-blue;
                    color:rgba(0,0,0,0.7);

                  &.red {
                    background:red;
                    color:#fff;
                  }
                }

                .switcher {

                    .switch {
                        cursor: pointer;
                        background:$very-light-blue;
                        border:2px solid rgba(0,0,0,0.1);
                        display:inline-block;
                        height:40px;
                        line-height:37px;
                        font-size: 13px;
                        padding:0 20px;
                        font-weight: 600;

                        &:first-child {
                            border-right:0;
                            border-top-left-radius:4px;
                            border-bottom-left-radius:4px;
                        }

                        &:last-child {
                            border-left:0;
                            border-top-right-radius:4px;
                            border-bottom-right-radius:4px;
                        }

                        &:hover {
                            background: transparent;
                        }

                        &.active {
                            background: transparent;
                        }
                    }
                }

                .code-block {
                    padding:10px 0 50px;
                    margin:0 0 80px;
                    border-bottom:1px solid rgba(0,0,0,0.05);

                    pre {
                        background:$very-light-blue;
                        padding:20px;
                        border-radius:4px;
                    }

                    code {
                        padding:0;
                        margin:0;
                    }

                    .hljs {
                        background:transparent;

                        .hljs-comment {
                            color:rgba(0,0,0,0.25);
                        }
                    }
                }
            }
        }
    }

</style>
