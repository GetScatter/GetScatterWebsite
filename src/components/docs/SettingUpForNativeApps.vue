<template>
    <section class="doc-page">

        <h4>Setting up for Native Applications</h4>
        <p>
            <span class="red">
                <b>Warning: This is quite complex and will take some patience and focus to accomplish.</b><br>
                Plugins for various languages like Java, C++, C#, and Swift will come out that provide this functionality out-of-the-box, but right now
                they are not readily available. If you want to incorporate Scatter natively into your app it won't be as easy as importing a package and setting it up.
            </span>
            <br><br>
            Native Desktop and Mobile applications can interface with Scatter directly using WebSockets.
            Because Scatter supports both socket-io and standard WebSockets there is a bit of extra work necessary to spoof the socket-io handshake when using standard WebSockets.
        </p>
        <ul>
            <li>
                Check out the sub-menu items for more information about the process of interacting with Scatter natively.
            </li>
            <li>
                <i>This documentation is written in <b>JavaScript</b> as it's assumed most will either already know the language, or be able to use it as pseudo-code to understand the concepts.</i>
            </li>
            <li>
                If you want to see a full working implementation of this head over to the
                <u><a href="https://github.com/GetScatter/scatter-js/blob/master/packages/core/src/services/SocketService.js" target="_blank">scatter-js SocketService.js</a></u> source.
            </li>
            <li>
                The <b>API Reference</b> sub-menu items also have a <b>JSON</b> switch which reveals what each API route expects in JSON format.
            </li>
        </ul>
    </section>
</template>

<script>


    export default {
        data(){ return {

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