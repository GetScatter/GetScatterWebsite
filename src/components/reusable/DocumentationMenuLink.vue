<template>
    <section class="padder" style="padding-left:20px;">
        <figure class="link" :class="{'sub-link':isSubLink, 'active':isActive}" @click="clicked(doc)">
            <figure class="icon" v-if="children.length"><i :class="isActive ? 'fa fa-minus-square' : 'fa fa-plus-square'"></i></figure>
            <figure class="text">{{doc.title}}</figure>
        </figure>
        <section v-if="children.length" class="children" :class="{'open':isActive && active.indexOf(doc.route) < active.length}">
            <doc-menu-link :key="child.route" v-for="child in children" :doc="child" :active="active" :is-sub-link="true" v-on:clicked="x => clicked(x)"></doc-menu-link>
        </section>
    </section>
</template>

<script>

    export default {
        data(){ return {

        }},
        computed:{
            children(){
                return this.doc.hasOwnProperty('children') ? this.doc.children : [];
            },
            isActive(){
                return this.active.includes(this.doc.route);
            }
        },
        methods:{
            clicked(doc){
                this.$emit('clicked', doc)
            }
        },
        props:['doc', 'isSubLink', 'active']
    }
</script>