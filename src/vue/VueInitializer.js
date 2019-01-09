import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'
import VueHighlightJS from 'vue-highlightjs'
import App from '../App.vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueCarousel from 'vue-carousel'
import Carousel3d from 'vue-carousel-3d'

Vue.productionTip = false;
Vue.devtools = false

/***
 * Sets up an instance of Vue.
 * This is shared between the popup.js and prompt.js scripts.
 */
export default class VueInitializer {

    constructor(routes,
                components){
        this.setupVuePlugins();
        this.registerComponents(components);
        const router = this.setupRouting(routes);

        const languages = {
            WEB:'Web',
            JSON:'JSON'
        };

        Vue.mixin({
            data(){ return {
                downloadLink:'https://github.com/GetScatter/ScatterDesktop/releases/',
                languages,
                language:languages.WEB
            }},
            methods: {

            }
        })

        this.setupVue(router);
        return router;
    }

    setupVuePlugins(){
        Vue.use(VueRouter);
        Vue.use(VueHighlightJS);
        Vue.use(VueYouTubeEmbed);
        Vue.use(VueCarousel);
        Vue.use(Carousel3d);
    }

    registerComponents(components){
        components.map(component => {
            Vue.component(component.tag, component.vue);
        });
    }

    setupRouting(routes){
        return new VueRouter({routes, mode: 'history'});
    }

    setupVue(router){
        const app = new Vue({router, template:'<App/>'});
        app.$mount('#scatter');
    }

}