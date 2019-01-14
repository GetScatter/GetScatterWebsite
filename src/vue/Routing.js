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
    Download:'download'
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
};

const RoutePaths = {
    [RouteNames.Home]:'/',
    [RouteNames.Docs]:'/docs/:doc',
    [RouteNames.Features]:'/features/:feature',
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