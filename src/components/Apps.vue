<template>
  <div id="apps">
    <section class="body">
      <div class="body-text" data-aos="fade-up">
        <div class="">
          <div>
            
            <tabs
              :tabs="tabs"
              :currentTab="currentTab"
              :wrapper-class="'default-tabs'"
              :tab-class="'default-tabs__item'"
              :tab-active-class="'default-tabs__item_active'"
              :line-class="'default-tabs__active-line'"
              @onClick="handleClick"
            />
            <div class="app-browser-content">
              <div v-if="currentTab === 'explore'">
                <Promoted :apps="Apps"></Promoted>
              </div>
              <!-- <div v-if="currentTab === 'new'">
                <NewApps :apps="Apps"></NewApps>
              </div> -->
              <div v-if="currentTab === 'search'">
                <Search :search-set="Apps" :search-set-title="'Apps'"></Search>
                <Filter></Filter>
              </div>
            </div>
          </div>
          <!-- <div class="tools-section">
            <div class="apps-notice blue">
                <i class="fal fa-address-card"></i> 
                <h5>Create your EOS Account</h5>
                <p>Did you know you can create an EOS account from right inside Scatter now?</p>
                <router-link class="button button-small" to="/download">Download Scatter</router-link>
            </div>
            <div class="apps-notice blue">
                <i class="fal fa-layer-plus"></i>
                <h5>Add your App</h5>
                <p>If you would like to add your project here, we have an easy way for you to do it! Just add a pull request to our github repository.</p>
                <a class="button button-small" href="https://github.com/GetScatter/ScatterApps">Submit your App</a>
            </div>
            <div class="apps-notice blue">
                <i class="fal fa-toolbox"></i>
                <h5>Ecosystem Tools</h5>
            </div>
            <div class="tool-box">
                <a href="https://eostoolkit.io/home"><span class="title">Bloks.io</span><span class="desc">EOS Block Explorer</span></a>
                <a href="https://cpuemergency.com/"><span class="title">CPU Emergency</span><span class="desc">Where to get some spare CPU or NET if you are stuck.</span></a>
                <a href="https://eostoolkit.io/home"><span class="title">EOS Toolkit</span><span class="desc">Grab your airdrops, manage your EOS account.</span></a>
                <a href="https://eosvotes.io/"><span class="title">EOS Votes</span><span class="desc">Help decide what EOS will be.</span></a>
            </div>
        </div> -->
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

  import Tabs from 'vue-tabs-with-active-line';

  export default {
    metaInfo: {
      title: "This is Home page",    meta: [
        { name: "description", content: "Learn coding with our free tutorials" },      { name: "keywords", content: "react,vue,angular" }      //you can also add open graph tags here
      ]
    },
    name: 'Apps',
    data () {
      return {
        Apps: [],
        tabs: [
          { title: 'Explore', value: 'explore' },
          // { title: 'New', value: 'new' },
          { title: 'Search', value: 'search' }
        ],
    currentTab: 'explore',
      }
    },
    components: {
      Tabs
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
      handleClick(newTab) {
        this.currentTab = newTab;
      },
    }
  }

</script>

<style lang="scss">

@import "../variables";

  #apps {
    text-align:center;
    min-height:660px;
    background-color:white;

    .app-browser-content {
      padding:3rem 0;
    }

  }

  .header-wrap {
      clear:both;
      border-bottom:1px solid $lightgrey;
      margin-bottom:1.2rem;
      overflow:auto;
      text-align:left;

      h5 {
        margin-top:0;
      }
  }

  .apps-notice {
        text-align:left;
        margin:3rem 0;

        .fal {
            font-size:44px;
            margin:0 0 1.5rem;
            color:$blue;
        }

        &.blue {
            border-color:$blue;

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

  .app-info {
    max-width:600px;
    margin:0 auto;
  }

.default-tabs {
  position: relative;
  text-align: left;
  border-bottom: 2px solid $lightgrey;

  @media (max-width: $breakpoint-tablet) {
    text-align:center;
  }

  &__item {
    display: inline-block;
    margin: 0 1.5rem;
    padding: 1.5rem 0;
    font-weight: normal;
    color: #252729;
    font-size: 1.8rem;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;
    &_active {
      color: $blue;
    }
    &:hover {
      color: $blue;
    }
    &:focus {
      outline: none;
      border-bottom: 2px solid gray;
      color: $blue;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__active-line {
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 2px;
    background-color: $blue;
    transition: transform 0.4s ease, width 0.4s ease;
  }
}
.content {
  margin-top: 30px;
  font-size: 20px;
}

.tool-box {
    a {
        display:block;
        padding:1rem 0;
        text-align:left;
        text-decoration:none;

        .title {
            font-size:16px;
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
