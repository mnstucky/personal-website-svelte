<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="homegrid">
		<h1 class="herotext">Hi. I'm Matt.</h1>
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
