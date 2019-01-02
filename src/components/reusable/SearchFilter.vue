<template>
    <div class="filter-wrapper">
        <select><option>test</option></select>
        <select>test</select>
        <select>test</select>
    </div>
</template>

<script>

    export default {
        name:'SearchFilter'
        // data(){
        //     return {
        //         searchterms:'',
        //         viewType: false
        //     }
        // },
        // props:["searchSet","searchSetTitle"],
        // computed: {
        //     filterresults: function () {
        //         return this.searchSet.filter((item) => {
        //             return item.name.toLowerCase().match(this.searchterms.toLowerCase())
        //         })
        //     }
        // },
        // methods:{
        //     setViewTypeClass: function(){
        //         if(this.viewType == true){
        //             this.viewType = false; // icons
        //         } else {
        //             this.viewType = true; // list
        //         }
        //     }
        // }
    }
</script>

<style lang="scss">

@import "../../variables";

    .filter-wrapper {
        
    }

</style>
