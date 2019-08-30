<template>
	<section class="vote body">

		<section class="body-text" data-aos="fade-up" >
			<section class="row">
				<section class="single-column">
					<img src="../assets/love.png" class="loveme">
					<h2>Scatter is a community</h2>
					<h4>
						We're not just a part of your lives, you're a part of ours.
					</h4>
					<p>
						Interacting with the <b>people</b> who use Scatter has been one of the most humbling experiences of our lives and we've
						met some truly kind individuals along the way. A lot of the decisions we've made over the years have been directly influenced by the conversations
						that have gone on in our community chats and we've watched in astonishment as random people on the internet helped other random people through both good times and bad times.

						<br>
						<br>
						We've gotten request after request over the years for us to register as an <i>EOSIO Block Producer</i>, and we're finally ready to
						step into that role and take on yet another responsibility which helps secure users, and the network.

					</p>
					<figure class="box">
						Though we're starting with the <b>EOS Mainnet</b>, we intend to expand this initiative into other chains and networks as well, as we
						fully believe in a broader ecosystem which includes many options with many different structures, each suited best for individual projects.
					</figure>

					<!-- VOTE BOX -->
					<section class="vote-box">
						<section v-if="error">
							<figure class="error">{{error}}</figure>
							<figure @click="vote" class="button button-large">Try Again</figure>
						</section>

						<section v-else-if="!voted">
							<section v-if="!producers">
								<figure @click="vote" class="button button-large">{{voting ? 'Please Wait' : 'Vote for us'}}</figure>
								<p style="font-size: 11px;">For those wishing to vote elsewhere, our BP name is <u><b>vote4scatter</b></u></p>
							</section>

							<section class="manual-voting" v-else>
								<h3>
									You are already voting for 30 block producers.
								</h3>
								<h5> Select one from the list below to replace it with ours</h5>


								<section class="producers">
									<figure class="producer" @click="commitVote(producer)" v-for="producer in producers">
										{{producer}} {{selected[producer]}}
									</figure>
								</section>
							</section>
						</section>

						<section v-else>
							<h3>Thanks for voting for us!</h3>
							<p>
								We appreciate your confidence in our team's ability to keep you and the network safe.
								<b>If you have other accounts you want to vote with, just click the button below.</b>
							</p>
							<figure @click="vote" class="button button-large">Vote Again</figure>
						</section>
					</section>

				</section>

			</section>

			<section class="row">
				<section class="single-column" style="text-align:center;">
					<h2>Scatter's ecosystem contributions</h2>
				</section>
			</section>

			<div class="flex-row">
				<div class="half">
					<h3>Scatter Desktop</h3>
					<p>The desktop wallet you trust and love, which we've invested hundreds of man hours into building. It is a safe and secure place to manage your keys and the accounts that are associated with them.</p>
				</div>
				<div class="half with-image">
					<img src="../assets/scatter_desktop.png">
				</div>
			</div>

			<div class="flex-row">
				<div class="half with-image">
					<img src="../assets/scatter_extension.jpg">
				</div>
				<div class="half">
					<h3>Scatter Extension</h3>
					<p>Though we've now closed this down in favor of Scatter Desktop, it would be tragic not to mention the first ever EOS wallet (preceding all others by 6 months) which helped launch the mainnet.</p>
				</div>
			</div>

			<div class="flex-row">
				<div class="half">
					<h3>Reputation and Identity Layer</h3>
					<p>Our reputation &amp; identity solution which helps keep you safe, and is <a href="https://ridl.network" target="_blank">currently in testing phases</a> and integrated into Scatter 11+.</p>
				</div>
				<div class="half with-image">
					<img src="../assets/ridl.png">
				</div>
			</div>

			<div class="flex-row thirds">
				<div class="third">
					<h3>ScatterJS</h3>
					<p>The JavaScript library that hundreds of web applications use to allow users to connect to 15+ wallets (not just ours) on multiple blockchains. Even wrappers like Block.one's UAL and EOS New York's Transit use/support ScatterJS.</p>
				</div>
				<div class="third">
					<h3>Scatter Sharp &amp; EOS Sharp</h3>
					<p>The C# libraries that Unity3d games are using to build blockchain enabled games.</p>
				</div>
				<div class="third">
					<h3>WalletPack</h3>
					<p>A JavaScript library for creating multi-blockchain wallets. This is what we're now using to run Scatter wallets.</p>
				</div>
			</div>

			<div class="flex-row thirds">
				<div class="third">
					<h3>Tokenwrap</h3>
					<p>A JavaScript library that wraps various EOSIO based NFT tokens and allows developers easy setup and usage on their apps.</p>
				</div>
				<div class="third">
					<h3>Morpheos</h3>
					<p>A JavaScript library that helps EOSIO JavaScript libraries support both eosjs1 and eosjs2.</p>
				</div>
				<div class="third">
					<h3>Watcheosio</h3>
					<p>A tiny lightweight JavaScript watcher for EOSIO chains.</p>
				</div>
			</div>

			<section class="single-column">
				<h2>Tell us what we can be doing better</h2>
				<p>
					We take community input very seriously at Scatter. If there's something we aren't already doing which you think the network needs, let us know.
					<br>
					<br>
					<a href="mailto:bp.suggestions@get-scatter.com">Email us at bp.suggestions@get-scatter.com</a>
				</p>
			</section>
		</section>

		<br>
		<br>
		<br>
		<br>
		<br>
	</section>
</template>

<script>

	import {mapActions, mapState} from "vuex";
	import ScatterJS from '@scatterjs/core';
	import ScatterEOS from '@scatterjs/eosjs2';
	import {JsonRpc, Api} from 'eosjs';

	ScatterJS.plugins(new ScatterEOS());




	const network = ScatterJS.Network.fromJson({
		blockchain:'eos',
		chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
		host:'nodes.get-scatter.com',
		port:443,
		protocol:'https'
	});
	const rpc = new JsonRpc(network.fullhost());

	export default {
		data(){return {
			scatter:null,
			producers:null,
			voterInfo:null,

			error:null,
			voting:false,
			voted:false,
		}},
		computed:{
			identity(){
				if(!this.scatter) return;
				return this.scatter.identity;
			},
			account(){
				if(!this.identity) return;
				return this.scatter.identity.accounts[0];
			}
		},
		methods:{
			async vote(){
				if(this.voting) return;
				this.voting = true;
				this.selected = {};
				this.producer = null;
				this.voted = false;
				this.error = false;
				this.producers = null;


				const proxies = [
					'brockpierce1',
					'madeofstarks',
					'colintcrypto',
					'eosdtbpproxy',
					'investingwad',
					'lukeeosproxy',
					'eostitanvote',
				]
				const randomProxy = proxies[Math.floor(Math.random()*proxies.length)];

				const connected = await new Promise(resolve => {
					ScatterJS.connect('ScatterWebsite', {network}).then(async _connected => {
						if(!_connected) return resolve(false);
						this.scatter = ScatterJS;
						resolve(true);
					})
				})

				if(connected){
					await this.scatter.logout().catch(() => null);
					await this.scatter.login().catch(() => null);
				}

				if(!this.account) {
					this.error = 'You must log in first.';
					return this.voting = false;
				}

				const voterInfo = await fetch(`${network.fullhost()}/v1/chain/get_account`, {
					method:"POST",
					body:JSON.stringify({
						"account_name":this.account.name,
					})
				}).then(x => x.json())
				.then(x => x.voter_info);

				if(!voterInfo) {
					this.voting = false;
					return this.error = 'Could not get voter info from chain.';
				}
				this.voterInfo = voterInfo;

				const isForProxy = !!voterInfo.proxy;
				if(isForProxy){
					return this.commitVote(null, proxies.includes(voterInfo.proxy) ? voterInfo.proxy : randomProxy);
				}

				if(voterInfo.producers.length >= 30){
					this.producers = voterInfo.producers;
					// Triggers UI change, don't need to return an error.
					return;
				}

				if(voterInfo.producers.length === 0){
					this.commitVote(null, randomProxy);
				}

				this.commitVote();
			},

			async commitVote(replacingProducer = null, randomProxy = null){
				this.producers = null;

				let producers = this.voterInfo.producers;
				let proxy = '';

				if(randomProxy){
					producers = [];
					proxy = randomProxy;
				} else {
					producers.push('vote4scatter');
					if(replacingProducer) producers = producers.filter(x => x !== replacingProducer);
					producers.sort();
				}

				const eos = ScatterJS.eos(network, Api, {rpc});

				await eos.transact({
					actions:[{
						account: 'eosio',
						name:'voteproducer',
						authorization: [{
							actor: this.account.name,
							permission: this.account.authority,
						}],
						data:{
							voter: this.account.name,
							proxy,
							producers,
						},
					}]
				}, {
					blocksBehind: 3,
					expireSeconds: 30,
				})
					.then(trx => {
						this.voted = true;
						this.voting = false;
					})
					.catch(res => {

						if(typeof res === 'object' && res.hasOwnProperty('isError') && res.isError){
							this.error = res.message;
						}
						else this.error = res.toString().replace('Error: assertion failure with message: ', '');
						this.voting = false;
						this.voted = true;
						console.log(res);
					})
			},


			...mapActions([
				'setScatter'
			])
		},
		watch:{
			['selected'](){
				console.log('changed', this.selected);
			}
		}
	}
</script>

<style lang="scss">
	@import "../variables";

	.vote {

		.loveme {
			max-width:100%;
			margin:0 auto 4rem;
			display:block;
		}

		h3 {
			margin-top:50px;
		}

		h5 {
			margin:0;
			margin-bottom:30px;
		}

		.box {
			border-radius:4px;
			margin-bottom:20px;
			padding:15px;
			background:lighten($blue, 45%);
			border:1px solid lighten($blue, 35%);
			font-size: 11px;
		}

		.vote-box {
			margin-top:80px;
			padding:15px;
			text-align:center;

			h1,h2,h3,h4,h5 {
				text-align:center;
				margin-top:0;
			}

			p {
				max-width:600px;
				margin:0 auto;
			}

			.button {
				max-width:400px;
				width:100%;
				padding: 3rem 3.8rem !important;
				font-size:3rem;
			}

			.error {
				background:red;
				color:#fff;
				padding:15px;
				font-weight: bold;
				border-radius:4px;
				margin:0 auto;
				margin-bottom:15px;
				max-width:400px;

			}
		}

		.producers {
			display:flex;
			flex-wrap: wrap;

			.producer {
				width:50%;
				font-size: 22px;
				padding:3px 0;
				cursor: pointer;

				&:hover {
					text-decoration: underline;
					color:red;
				}
			}
		}

		.manual-voting {
			border:1px solid $blue;
			padding:25px;
			border-radius:4px;
		}

		.half {

			img {
				border-radius:6px;
                box-shadow: 0 10px 20px 0 rgba(7,83,123,0.19);
			}

			h3 {
				margin-top:0;
			}
		}
	}


</style>



