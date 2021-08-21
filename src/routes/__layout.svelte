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
	<script src="https://kit.fontawesome.com/216d5e86f9.js" crossorigin="anonymous"></script>
</svelte:head>

<Header />

<main class="container">
	<slot />
</main>

<footer>
	<aside>&copy; 2021 - Matt Stucky</aside>
</footer>
