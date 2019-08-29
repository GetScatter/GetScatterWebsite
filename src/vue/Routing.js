import Home from '../components/Home.vue'
import Support from '../components/Support.vue'
import Docs from '../components/Documentation.vue'
import Founders from '../components/Founders.vue'
import Press from '../components/Press.vue'
import Ridl from '../components/Ridl.vue'
import Vision from '../components/Vision.vue'
import Apps from '../components/Apps.vue'
import Features from '../components/Features.vue'
import Connect from '../components/Connect.vue'
import Download from '../components/Download.vue'
import Bridge from '../components/Bridge.vue'
import Branding from '../components/Branding.vue'
import Careers from '../components/Careers.vue'
import FiatOnramp from '../components/FiatOnramp.vue'
import BlogHome from '../components/BlogHome.vue'
import BlogPost from '../components/BlogPost.vue'
import Vote from '../components/Vote.vue'
import Wallets from '../components/Wallets.vue'


export const RouteNames = {
    Home:'home',
    Docs:'docs',
    Support:'support',
    Founders:'founders',
    Press:'press',
    Ridl:'ridl',
    Vision:'vision',
    Apps:'apps',
    Features:'features',
    Connect:'connect',
    Download:'download',
    Bridge:'bridge',
    Branding:'branding',
    Careers:'careers',
	FiatOnramp:'onramp',
    BlogHome:'blog',
    BlogPost:'blog-post',
	Vote:'vote',
    Wallets:'wallets',
};

const RouteViews = {
    [RouteNames.Home]:Home,
    [RouteNames.Docs]:Docs,
    [RouteNames.Support]:Support,
    [RouteNames.Founders]:Founders,
    [RouteNames.Press]:Press,
    [RouteNames.Ridl]:Ridl,
    [RouteNames.Vision]:Vision,
    [RouteNames.Apps]:Apps,
    [RouteNames.Features]:Features,
    [RouteNames.Connect]:Connect,
    [RouteNames.Download]:Download,
    [RouteNames.Bridge]:Bridge,
    [RouteNames.Branding]:Branding,
    [RouteNames.Careers]:Careers,
    [RouteNames.FiatOnramp]:FiatOnramp,
    [RouteNames.BlogHome]:BlogHome,
    [RouteNames.BlogPost]:BlogPost,
    [RouteNames.Vote]:Vote,
    [RouteNames.Wallets]:Wallets,
};

const RoutePaths = {
    [RouteNames.Home]:'/',
    [RouteNames.Docs]:'/docs/:doc',
    [RouteNames.Features]:'/features/:feature',
    [RouteNames.BlogPost]:'/blog/:slug',
};

export class Routing {

    static builder(){
        const routeNames = Object.keys(RouteNames).map(key => RouteNames[key]);

        let routesBuilder = {};
        routeNames.map(routeName => {
            routesBuilder[routeName] = {
                path:RoutePaths.hasOwnProperty(routeName) ? RoutePaths[routeName] : `/${routeName}`,
                name:routeName,
                component: RouteViews[routeName]
            }
        });

        return routesBuilder;
    }

    static routes(){
        return Object.keys(Routing.builder())
            .map(routeName => Routing.builder()[routeName]);
    }

}