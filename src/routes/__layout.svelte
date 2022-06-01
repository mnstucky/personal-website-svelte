<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Header />

<main class="container">
	<slot />
</main>

<footer>
	<aside>&copy; 2021 - Matt Stucky</aside>
	<aside>(Thanks to <a href="https://twemoji.twitter.com/">Twemoji</a> for the cool favicon!)</aside>
</footer>

<style>
	footer {
		margin-top: 1rem;
		text-align: center;
		font-family: 'Noto Sans JP', sans-serif;
	}

	main {
		margin-top: 1rem;
	}
</style>