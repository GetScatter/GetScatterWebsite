<template>
  <div id="Apps">
    <section id="leadin" class="body padded padded-large">
      <div class="body-text">
        <div class="row">
          <Search :search-set="Apps" :search-set-title="'Apps'"></Search>
          <Filter></Filter>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  export default {
    name: 'Apps',
    data () {
      return {
        Apps: []
      }
    },
    computed: {

    },
    mounted() {
      const getAppsFromGithub = () => {
        fetch("https://rawgit.com/GetScatter/ScatterApps/master/apps.json?random="+parseInt(Math.random()*100+1).toString()).then(r => r.json()).then(result => {
          this.Apps = Object.keys(result).reduce((acc, blockchain) => {
            result[blockchain].map(app => {
              acc.push(Object.assign(app, {blockchain}));
            })
            return acc;
          }, []);
          shuffleArray(this.Apps);
        }, error => {
          console.error(error);
        });
      };

      const getAppsFromAPI = () => {
        fetch('https://api.get-scatter.com/v1/apps?flat=true').then(r => r.json()).then(apps => {
          this.Apps = apps;
          shuffleArray(this.Apps);
        }).catch(err => {
          getAppsFromGithub();
          console.error(err);
        })
      };

      getAppsFromAPI();


    },
    methods: {

    }
  }

</script>

<style lang="scss">

  .app-info {
    max-width:600px;
    margin:0 auto;
  }

</style>
