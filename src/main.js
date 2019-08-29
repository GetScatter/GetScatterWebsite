import 'highlight.js/styles/atelier-seaside-light.css';
import App from './App.vue'
import './styles.scss'
import VueInitializer from './vue/VueInitializer';
import {Routing} from './vue/Routing';
import Search from './components/reusable/Search';
import Promoted from './components/reusable/Promoted';
import NewApps from './components/reusable/NewApps';
import SearchFilter from './components/reusable/SearchFilter';
import Toggle from './components/reusable/Toggle';

import Footer from './components/Footer.vue'
import DocumentationMenuLink from './components/reusable/DocumentationMenuLink.vue'
import FeatureMenuLink from './components/reusable/FeatureMenuLink.vue'

// DOCUMENTATION FRAGMENTS
import SettingUpForWebApps from './components/docs/SettingUpForWebApps.vue'
import SettingUpForNativeApps from './components/docs/SettingUpForNativeApps.vue'
import DevGettingStarted from './components/docs/DevGettingStarted.vue'
import Networks from './components/docs/Networks.vue'
import SupportedBlockchains from './components/docs/SupportedBlockchains.vue'
import RequirableFields from './components/docs/RequirableFields.vue'
import Identities from './components/docs/Identities.vue'
import SignatureProviders from './components/docs/SignatureProviders.vue'
import ApiReference from './components/docs/ApiReference.vue'
import IdentityFromPermissions from './components/docs/api/IdentityFromPermissions.vue'
import CreateTransaction from './components/docs/api/CreateTransaction.vue'
import GetIdentity from './components/docs/api/GetIdentity.vue'
import ForgetIdentity from './components/docs/api/ForgetIdentity.vue'
import Authenticate from './components/docs/api/Authenticate.vue'
import SuggestNetwork from './components/docs/api/SuggestNetwork.vue'
import RequestTransfer from './components/docs/api/RequestTransfer.vue'
import RequestSignature from './components/docs/api/RequestSignature.vue'
import RequestArbitrarySignature from './components/docs/api/RequestArbitrarySignature.vue'
import GetPublicKey from './components/docs/api/GetPublicKey.vue'
import LinkAccount from './components/docs/api/LinkAccount.vue'
import GetVersion from './components/docs/api/GetVersion.vue'
import Examples from './components/docs/Examples.vue'
import InteractionFlow from './components/docs/examples/InteractionFlow.vue'
import NativeConnections from './components/docs/native/NativeConnections.vue'
import NativePairing from './components/docs/native/NativePairing.vue'
import NativeCatchingResponses from './components/docs/native/NativeCatchingResponses.vue'
import NativeSendingRequests from './components/docs/native/NativeSendingRequests.vue'
import NativePromises from './components/docs/native/NativePromises.vue'

// FEATURES FRAGMENTS
import FeaturesOverview from './components/features/Overview.vue'
import FeaturesStablecoins from './components/features/Stablecoins.vue'
import FeaturesAssetmanagement from './components/features/Assetmanagement.vue'
import FeaturesTokenexchange from './components/features/Tokenexchange.vue'
import FeaturesHardwarewallets from './components/features/Hardwarewallets.vue'

class Main {

    constructor(){
        const components = [
            {tag:'App', vue:App},
            {tag:'Footer', vue:Footer},
            {tag:'doc-menu-link', vue:DocumentationMenuLink},
            {tag:'dev-getting-started', vue:DevGettingStarted},
            {tag:'dev-setting-up-for-web-apps', vue:SettingUpForWebApps},
            {tag:'dev-setting-up-for-native-apps', vue:SettingUpForNativeApps},
            {tag:'dev-networks', vue:Networks},
            {tag:'dev-examples', vue:Examples},
            {tag:'dev-examples-interaction-flow', vue:InteractionFlow},
            {tag:'dev-supported-blockchains', vue:SupportedBlockchains},
            {tag:'dev-requirable-fields', vue:RequirableFields},
            {tag:'dev-identities', vue:Identities},
            {tag:'dev-signature-providers', vue:SignatureProviders},
            {tag:'dev-api-reference', vue:ApiReference},
            {tag:'dev-api-identity-from-permissions', vue:IdentityFromPermissions},
            {tag:'dev-api-create-transaction', vue:CreateTransaction},
            {tag:'dev-api-get-identity', vue:GetIdentity},
            {tag:'dev-api-forget-identity', vue:ForgetIdentity},
            {tag:'dev-api-authenticate', vue:Authenticate},
            {tag:'dev-api-suggest-network', vue:SuggestNetwork},
            {tag:'dev-api-request-signature', vue:RequestSignature},
            {tag:'dev-api-request-transfer', vue:RequestTransfer},
            {tag:'dev-api-request-arbitrary-signature', vue:RequestArbitrarySignature},
            {tag:'dev-api-get-public-key', vue:GetPublicKey},
            {tag:'dev-api-link-account', vue:LinkAccount},
            {tag:'dev-api-get-version', vue:GetVersion},
            {tag:'dev-native-connect', vue:NativeConnections},
            {tag:'dev-native-pairing', vue:NativePairing},
            {tag:'dev-native-catching-responses', vue:NativeCatchingResponses},
            {tag:'dev-native-sending-requests', vue:NativeSendingRequests},
            {tag:'dev-native-promises', vue:NativePromises},
            {tag:'features-overview', vue:FeaturesOverview},
            {tag:'features-stablecoins', vue:FeaturesStablecoins},
            {tag:'features-assetmanagement', vue:FeaturesAssetmanagement},
            {tag:'features-hardwarewallets', vue:FeaturesHardwarewallets},
            {tag:'features-tokenexchange', vue:FeaturesTokenexchange},
            {tag:'feature-menu-link', vue:FeatureMenuLink},
            {tag:'Search', vue:Search},
            {tag:'Promoted', vue:Promoted},
            {tag:'NewApps', vue:NewApps},
            {tag:'SearchFilter', vue:SearchFilter},
            {tag:'Toggle', vue:Toggle}
        ];

        new VueInitializer(Routing.routes(), components);


    }

}

new Main();
