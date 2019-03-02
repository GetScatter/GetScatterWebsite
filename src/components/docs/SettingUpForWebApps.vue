<template>
    <section class="doc-page">

        <h4>Setting up for Web Applications</h4>
        The easiest way to use Scatter from web and JavaScript applications is to use the official
        <a style="display:inline-block; color:blue; text-decoration: underline" href="https://github.com/GetScatter/scatter-js" target="_blank">Scatter JavaScript SDK</a>.
        <br><br>
        <b style="color:red;">
            If you are still using <b class="code-snippet">scatter-js</b> please move over to <b class="code-snippet">scatterjs-core</b>
            so that you can take advantage of the new features, speed fixes, new blockchains, and support for SSL socket connections which allow
            Scatter Desktop to be used on Safari, Firefox, Edge, Opera, and all other browsers.
        </b>
        <br>


        <br><br>
        <br><br>
        <h4>Installation using NPM</h4>

        First you'll need to get the <b class="code-snippet">scatterjs-core</b> package from NPM. This package provides the base API for using Scatter.
        It doesn't come with any way to interact with blockchains so we'll be adding in <b>plugins</b> as well.


        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">npm i -S scatterjs-core</code></pre>
        </section>

        <br>
        Now that you have the core package you need to select the type of <b>plugins/blockchains</b> you want to interact with and import them.

        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">// eosjs
npm i -S scatterjs-plugin-eosjs     // For using eosjs@16.0.9 and below
npm i -S scatterjs-plugin-eosjs2    // For using eosjs@beta and up

// ethereum
npm i -S scatterjs-plugin-web3

// tron
npm i -S scatterjs-plugin-tron</code></pre>
        </section>

        <br><br>
        <h5>Babel/Webpack issues</h5>
        You might run into babel/webpack issues in some NodeJS frameworks. If you do you can simply run the following command and it will fix them.

        <section class="code-block">
<pre v-highlightjs><code class="javascript">npm i -D @babel/runtime</code></pre>
        </section>

        <h3>Installation for HTML/JS Projects</h3>

        Chose the plugins you want to import and simply leave out the rest, <b>but remember that you must have the core package</b>.

        <section class="code-block">
<pre v-highlightjs><code class="javascript">// Add these to your &lt;head>&lt;/head>
&lt;script src="https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-core.min.js">&lt;/script>
&lt;script src="https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-plugin-eosjs.min.js">&lt;/script>
&lt;script src="https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-plugin-eosjs2.min.js">&lt;/script>
&lt;script src="https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-plugin-web3.min.js">&lt;/script>
&lt;script src="https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-plugin-tron.min.js">&lt;/script>
</code></pre>
        </section>

        <h3>Package Names</h3>
        You can set these yourself in NodeJS but in HTML/JS you will have to use them.
        <br><i>Note that eosjs and eosjs2 have conflicting names, you can not use them both.</i>
        <br><br>

        <table>
            <thead>
            <tr>
                <td>Package Name</td>
                <td>Import Name</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="p in packages">
                <td>scatterjs-plugin-{{p.pname}}</td>
                <td>{{p.iname}}</td>
            </tr>
            </tbody>
        </table>




        <br><br>
        <br><br>
        <h3>Using ScatterJS</h3>
        Now that you have all the required packages import the core package and the plugins you need for your application.

        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';

// Don't forget to tell ScatterJS which plugins you are using.
ScatterJS.plugins( new ScatterEOS() );
</code></pre>
        </section>

        <br>
        <i>
            For HTML/JS these will be bound to the `window`, so you don't have to import them.<br>
            You can simply use them from the import name.
        </i>
        <br><br>



        <br><br>
        <h5>Connecting to Scatter</h5>
        This method connects to all types of Scatter ( classic, desktop, and mobile ) using one simple call.


        <section class="code-block no-bottom">
<pre v-highlightjs><code class="javascript">//
ScatterJS.scatter.connect("Put_Your_App_Name_Here").then(connected => {
    // User does not have Scatter Desktop, Mobile or Classic installed.
    if(!connected) return false;

    const scatter = ScatterJS.scatter;
    -----------------------
    ^^^ See the section below about storing this in state.
    -----------------------

    window.ScatterJS = null;
    -----------------------
    ^^^ See the section below about nulling out the window reference
    -----------------------
});
</code></pre>
        </section>

        <br><br>
        <b>Please remember that in vanilla javascript you can not use the <b class="code-snippet">=></b> operator for lambda functions.</b>
        You will need to write out full functions using <b class="code-snippet">.then(function(connected){ ... });</b>
        <br><br>



        <br><br>
        <h5>Keeping a connected reference to Scatter in state</h5>
        The initial connection with Scatter has a little bit of overhead, so you really only want one persistent reference to the ScatterJS object through-out your application's lifecycle.
        The best practice is to keep a reference to ScatterJS within your state controller, like MobX, Redux, Vuex, or whatever you might be using.

        <section class="code-block">
<pre v-highlightjs><code class="javascript">// This isn't great.
const scatter = ScatterJS.scatter;

-----------------------
Here are some options for various frameworks.
-----------------------

// Redux
dispatch(setScatter(ScatterJS.scatter));

// Vuex ( when using a setScatter action on your store )
store.dispatch('setScatter', ScatterJS.scatter);

// Angular Services
ScatterService.setScatter(ScatterJS.scatter);

// I think you get the point.
</code></pre>
        </section>






        <h2>Remove the window reference!</h2>
        <p>
            Always remember to null out the <b class="code-snippet">window.ScatterJS</b> reference, <b style="color:red; text-decoration: underline;">if you don't extensions will be able to
            catch that reference and make requests to the user's Scatter on behalf of your domain, and you will have to take responsibility</b>.
        </p>
        <section class="code-block">
<pre v-highlightjs><code class="javascript">window.ScatterJS = null;</code></pre>
        </section>



        <h2>What now?</h2>
        <p>
            Continue to the <a href="/docs/signature-providers">Signature Providers</a> documentation to learn how to use various plugins to get signatures
            for transactions from a user's Scatter.
        </p>

    </section>
</template>

<script>


    export default {
        data(){ return {
            packages:[
                {pname:'eosjs', iname:'ScatterEOS'},
                {pname:'eosjs2', iname:'ScatterEOS'},
                {pname:'web3', iname:'ScatterETH'},
                {pname:'tron', iname:'ScatterTron'},
            ]
        }},
        computed:{

        },
        mounted(){

        },
        methods:{

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">


</style>