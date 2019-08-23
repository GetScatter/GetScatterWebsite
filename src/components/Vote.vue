<template>
	<section class="vote body">

		<section class="body-text" data-aos="fade-up" >
			<section class="row">
				<section class="single-column">
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

					<figure class="button button-primary button-large">Vote for us</figure>
				</section>
			</section>

			<section class="row">
				<section class="single-column">
					<h2>We do whatever we can here at Scatter to help various ecosystems, because we truly believe in the world we're all building together.</h2>

					<ul>
						<li><b>Scatter Desktop</b> - The desktop wallet most of you trust and love, this one really needs no explanation.</li>
						<li><b>Scatter Extension</b> - Though we've now closed this down temporarily, it would be tragic not to mention the first ever EOS wallet which helped launch the mainnet.</li>
						<li><b>ScatterJS</b> - The JavaScript library that over 500 web applications use to allow users to connect to 15+ wallets (not just ours) on multiple blockchains. Even wrappers like Block.one's UAL and EOS New York's Transit use/support ScatterJS.</li>
						<li><b>RIDL</b> - Our reputation & identity solution which is currently in testing phases and integrated into Scatter 11+.</li>
						<li><b>Scatter Sharp & EOS Sharp</b> - The C# libraries that Unity3d games are using to build blockchain enabled games.</li>
						<li><b>WalletPack</b> - A JavaScript library for creating multi-blockchain wallets. This is what we're now using to run Scatter wallets.</li>
						<li><b>Tokenwrap</b> - A JavaScript library that wraps various EOSIO based NFT tokens and allows developers easy setup and usage on their apps.</li>
						<li><b>Morpheos</b> - A JavaScript library that helps EOSIO JavaScript libraries support both eosjs1 and eosjs2.</li>
						<li><b>Watcheosio</b> - A tiny lightweight JavaScript watcher for EOSIO chains.</li>
					</ul>

					<p>
						There's many more things we've done which aren't technological achievements; like contests, bounty programs, cross chain and no-chain developer outreach, fud-fighting,
						community moderation, and lots more.
					</p>
				</section>
			</section>

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
	export default {

	}
</script>

<style lang="scss">
	@import "../variables";

	.vote {
		h3 {
			padding-top:20px;
			margin-top:50px;
			border-top:1px solid rgba(0,0,0,0.1);
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
	}


</style>



