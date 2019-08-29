<template>
    <div id="wallets">

        <section class="body">
            <div class="body-text">
                <div class="row">
                    <div class="single-column">
                        <h2>Partnered Wallets</h2>
                        <h4>Scatter-js, our awesome SDK for developers, allows some of your favorite wallets to seamlessly interact with any application who uses our protocol.</h4>
                        <a class="button button-primary" href="mailto:business@get-scatter.com">Add your wallet</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <table>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/mathwallet.png" alt="Math Wallet" class="partner" /></div></td>
                                <td>Math Wallet</td>
                                <td><a class="button button-small" href="https://www.mathwallet.org/en/">Learn more</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/sqrl.png" alt="Sqrl" class="partner" /></div></td>
                                <td>SQRL</td>
                                <td><a class="button button-small" href="https://telosfoundation.io/downloads">Learn more</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/meetone.png" alt="MEET.ONE" class="partner" /></div></td>
                                <td>MEET.ONE</td>
                                <td><a class="button button-small" href="https://meet.one/">Learn more</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/lynx.png" alt="EOS Lynx" class="partner" /></div></td>
                                <td>Lynx</td>
                                <td><a class="button button-small" href="https://eoslynx.com/">Learn more</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/pocketeos.png" alt="PocketEOS" class="partner" /></div></td>
                                <td>PocketEOS</td>
                                <td><a class="button button-small" href="http://pocketeos.com/">Learn more</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/tokenpocket.png" alt="TokenPocket" class="partner" /></div></td>
                                <td>TokenPocket</td>
                                <td><a class="button button-small" href="https://www.tokenpocket.pro/">Learn more</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/bitpie.png" alt="More" class="partner" /></div></td>
                                <td>BitPie</td>
                                <td><a class="button button-small" href="https://bitpie.com/">Learn more</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/nova.png" alt="NOVA" class="partner" /></div></td>
                                <td>NOVA</td>
                                <td><a class="button button-small" href="https://eosnova.io/">Learn more</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/imtoken.png" alt="imToken" class="partner" /></div></td>
                                <td>imToken</td>
                                <td><a class="button button-small" href="https://www.mathwallet.org/en/">Learn more</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/more.png" alt="More" class="partner" /></div></td>
                                <td>More</td>
                                <td><a class="button button-small" href="https://www.mathwallet.org/en/">Learn more</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/bitkeep.png" alt="Bitkeep" class="partner" /></div></td>
                                <td>BitKeep</td>
                                <td><a class="button button-small" href="https://www.mathwallet.org/en/">Learn more</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/buckwallet.png" alt="Buckwallet" class="partner" /></div></td>
                                <td>Buckwallet</td>
                                <td><a class="button button-small" href="https://www.mathwallet.org/en/">Learn more</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>

    export default {
        name: 'Founders'
    }

</script>
<style lang="scss">

@import "../variables";

#wallets {
    table {
        width:100%;
        text-align:left;

        td {
            padding:20px;
            border-bottom:1px solid $lightgrey;
        }

        td:nth-child(1) {
            width:140px;
            text-align:center;

            .image-wrap {
                background:$blue;
                width:120px;
                height:120px;
                border-radius:20px;
                display:flex;
                align-items:center;

                img {
                    margin:15px;
                    width:100%;
                    height:auto;
                }
            }
        }

        td:nth-child(3) {
            width:140px;
            text-align:right;
        }
    }
}


</style>