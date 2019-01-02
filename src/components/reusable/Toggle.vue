<template>
    <div class="toggle-wrapper" @click="setToggle" v-bind:class="{ active: isList }">
        <div class="toggle-select" v-bind:class="{ active: isIcons }">Icons</div>
        <div class="toggle-select" v-bind:class="{ active: isList }">List</div>
    </div>
</template>

<script>
    export default {
        name:'Toggle',
        data(){
            return {
                checked:'',
                isIcons:true,
                isList:false,
                viewing:'icons'
            }
        },
        props: {
            viewtype: {
                type: String,
                required: false
            }
        },  
        methods: {
            setToggle() {
                if(this.viewing == 'list'){
                    this.viewing = 'icons';
                    this.isList = false;
                    this.isIcons = true;
                    this.$emit('toggle-view-type','icons');
                } else {
                    this.viewing = 'list';
                    this.isList = true;
                    this.isIcons = false;
                    this.$emit('toggle-view-type','list');
                }  
            }
        }
    }
</script>

<style lang="scss">

    @import "../../variables";

    .toggle-wrapper {
        float:right;
        margin:2rem 0;
        width:7.05rem;
        background:$lightgrey;
        height:3rem;
        cursor:pointer;
        padding:0.1rem;
        position:relative;
        transition:all 0.18s ease-in-out;

        &:after {
            content:'';
            width:3.2rem;
            position:absolute;
            z-index:1;
            background:white;
            height:2.6rem;
            left:.2rem;
            top:.2rem;
            transition:all 0.18s ease-in-out;
            display:block;
        }

        &.active {
            
            &:after {
                margin-left:3.4rem;
                top:.2rem;
                transition:all 0.18s ease-in-out;
            }
        }
        
        .toggle-select {
            width:3.2rem;
            height:2.6rem;
            line-height:2.6rem;
            margin:.1rem;
            font-size:1rem;
            float:left;
            transition:all 0.18s ease-in-out;
            position:relative;
            z-index:2;
            color:#999;
            
            &.active {
                color:black;
            }

            &:last-child {
                right:0;
            }
        }
    }


</style>