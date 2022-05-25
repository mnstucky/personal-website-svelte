<script lang="ts">
</script>

<header>
	<nav class="container">
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/portfolio">Portfolio</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		top: 0;
		right: 0;
		left: 0;
		width: 100vw;
		height: 5rem;
		background: var(--clr-alt-background);
		filter: drop-shadow(0px 3px 12px #e1e1e1);
	}

	nav {
		height: 100%;
	}

	nav ul {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	nav li {
		margin-right: 1rem;
		padding: 10px;
	}

	nav li a {
		text-transform: uppercase;
		font-weight: bold;
		letter-spacing: 0.05rem;
		position: relative;
	}

	nav li a:hover {
		color: unset;
	}

	nav li a::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 3px;
		bottom: -3px;
		left: 0;
		background-color: var(--clr-textlight);
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.3s ease-in-out 0s;
	}

	nav li a:hover::before {
		visibility: visible;
		transform: scaleX(1);
	}

	nav li:nth-child(3n + 1) {
		color: var(--clr-primary);
	}

	nav li:nth-child(3n + 2) {
		color: var(--clr-secondary);
	}

	nav li:nth-child(3n + 3) {
		color: var(--clr-highlight);
	}
</style>
