<svelte:head>
    <link rel="stylesheet" href="/themes/gruvbox.css" />
</svelte:head>
<script>
    export let title
    export let date
</script>

<h1>{title}</h1>

<p><em>Published: {date}</em></p>

<slot />
