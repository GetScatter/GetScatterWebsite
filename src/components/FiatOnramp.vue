<template>
    <section class="onramp body">
        <section class="body-text">
            <section class="row">
                <h2>Pay with Credit Cards</h2>
                <h4>Do you need an EOS account?<br>Or maybe just some more tokens?</h4>
                <p>We're integrating our services with Moonpay to allow you to easily purchase EOS accounts and tokens with minimal effort.</p>
            </section>

            <section class="row iframe-container">
                <iframe
                        frameborder="0"
                        height="100%" width="100%"
                        :src="moonpaySrcPath"
                />
            </section>
        </section>
    </section>
</template>

<script>

	export default {
		name: 'FiatOnramp',
		data () {return {
			creatingNewAccount:false,
            accountName:'',
            publicKey:'',
        }},
		components: {

		},
		computed: {
            moonpaySrcPath(){
            	return `https://buy.moonpay.io?apiKey=pk_live_NuTKeMYegyaGK6Puxk7Pn89RbvDgG3P`;
            	// const base = `https://buy-staging.moonpay.io`;
            	// const params = {
		        //     apiKey:'pk_test_uQlwYQs3jLbrl53VWKv1xW1XZ7eHsr65',
                //     currencyCode:'eos',
                //     walletAddress:'createbridje',
		        //     walletAddressTag:'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV,test1111user'
	            // };
            	// return base + Object.keys(params).reduce((acc,x,i) => {
		        //     acc += i === 0 ? '?' : '&';
		        //     acc += `${x}=${params[x]}`;
		        //     return acc;
                // }, '');
            }
		},
		mounted() {

		},
		methods: {

		}
	}

</script>

<style lang="scss">

    @import "../variables";

    .onramp {
        text-align: center;

        h4 {
            text-align: center;
        }

        .iframe-container {
            width:100%;
            height:800px;
            border-radius:10px;
            overflow: hidden;
            position: relative;
        }

        iframe {
            height:800px;
        }
    }

</style>
