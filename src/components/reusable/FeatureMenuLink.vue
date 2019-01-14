<template>
    <section class="padder" style="padding-left:20px;">
        <figure class="link" :class="{'sub-link':isSubLink, 'active':isActive}" @click="clicked(feature)">
            <figure class="icon" v-if="children.length"><i :class="isActive ? 'fa fa-minus-square' : 'fa fa-plus-square'"></i></figure>
            <figure class="text">{{feature.title}}</figure>
        </figure>
        <section v-if="children.length" class="children" :class="{'open':isActive && active.indexOf(feature.route) < active.length}">
            <feature-menu-link :key="child.route" v-for="child in children" :feature="child" :active="active" :is-sub-link="true" v-on:clicked="x => clicked(x)"></feature-menu-link>
        </section>
    </section>
</template>

<script>

    export default {
        data(){ return {

        }},
        computed:{
            children(){
                return this.feature.hasOwnProperty('children') ? this.feature.children : [];
            },
            isActive(){
                return this.active.includes(this.feature.route);
            }
        },
        methods:{
            clicked(feature){
                this.$emit('clicked', feature)
            }
        },
        props:['feature', 'isSubLink', 'active']
    }
</script>