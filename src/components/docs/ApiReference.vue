<template>
  <section class="doc-page">

    <h4>API Reference</h4>
    <p>
      Here you can find examples and in-depth information about Scatter's API.
      The API can be reached through the <b class="code-snippet">window.scatter</b> object that is injected on Web Applications <b>( Web )</b>, or through
      the local WebSocket via JSON requests <b>( JSON )</b>.
    </p>
    <br>

    <section class="api-links">
      <a class="link" :key="link.route" :href="`/docs/${link.route}`" v-for="link in links" >{{link.title}}</a>
    </section>


  </section>
</template>

<script>
  import {devDocs} from '../../data/devDocs';


  export default {
    data(){ return {

    }},
    computed:{
      links(){
        return devDocs.docs.find(x => x.route === 'api-reference').children;
      }
    },
    mounted(){

    },
    methods:{

    },
  }
</script>
