<template>
  <div id="app" :class="{'ridl':route === 'ridl'}">
    <Navigation ></Navigation>
    <section style="background:#fff; margin-top:-1px;">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
    import Navigation from './components/Navigation'
    import Footer from './components/Footer'
    import ScatterLogo from './components/reusable/ScatterLogo.vue'
    import RIDLLogo from './components/reusable/RIDLLogo.vue'

    export default {
        name: 'app',
        components: {
            Navigation,
            Footer,
            ScatterLogo,
            RIDLLogo
        },
        computed: {
            route(){
                return this.$route.name;
            },
            showHeader(){
              var docs = this.$route.name == 'docs';
              var apps = this.$route.name == 'apps';
              if(docs || apps){
                return false;
              } else {
                return true;
              }
            }
        }
    }

</script>
