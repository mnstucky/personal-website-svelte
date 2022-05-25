<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="home-grid">
		<h1 class="hero-text">Hi. I'm Matt.</h1>
		<img class="headshot" src="/headshot.png" alt="My smiling face" />
		<article>
			<p>
				I'm a full-stack developer skilled in everything from HTML, CSS, Java, and C++, to Node,
				Nest.js, React, and Next.js. I'm especially knowledgeable in the Typescript/Javascript
				ecosystem (and I built this site using SvelteKit, because I love learning new tech!).
			</p>
			<p>
				I see coding as a craft. To that end, I write <span class="underlined">clean</span>,
				<span class="underlinedalt1">secure</span>, <span class="underlinedalt2">performant</span> code.
			</p>
			<p>I'm always interested in meeting new people, so please get in touch!</p>
			<aside class="icons">
				<a
					href="https://www.linkedin.com/in/matt-stucky-66166339/"
					aria-label="Go to Matt's LinkedIn page"><i class="fab fa-linkedin-in fa-2x" /></a
				>
				<a href="https://github.com/mnstucky" aria-label="Go to Matt's GitHub page"
					><i class="fab fa-github fa-2x" /></a
				>
				<a href="https://discordapp.com/channels/@@me/stupub/" aria-label="Message Matt on Discord"
					><i class="fab fa-discord fa-2x" /></a
				>
			</aside>
		</article>
	</div>
</section>

<style>
	.home-grid {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: 320px auto;
		grid-gap: 1.8rem;
	}

	@media only screen and (max-width: 750px) {
		.home-grid {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}

	.hero-text {
		animation: flow 29s ease-in-out infinite;
		background: linear-gradient(-61deg, #1505aa, #904e95, #e73c7e, #8b0000);
		background-size: 299%;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: clamp(1.9rem, 5vw, 4rem);
		text-align: center;
		grid-row: 1 / span 1;
		grid-column: 1 / span 2;
		margin-bottom: 0;
	}

	.headshot {
		border-radius: 0.5rem;
		width: min(90vw, 318px);
		filter: drop-shadow(0px 0px 8px var(--clr-shadow));
		grid-row: 2 / span 1;
		grid-column: 1 / span 1;
	}

</style>