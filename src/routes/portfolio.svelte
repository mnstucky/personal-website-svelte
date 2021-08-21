<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<article class="portfolioitem">
	<h2 class="blockheading"><a href="https://cartagena-decor.vercel.app/">Cartagena Decor</a></h2>
	<figure>
		<figcaption>A fully custom e-commerce platform with the following features:</figcaption>
		<ul>
			<li>The latest technology: Node, React, Next.js, and MongoDB</li>
			<li>User accounts and authentication</li>
			<li>Clean, responsive design using the Bulma CSS framework</li>
			<li>
				React-based shopping experience, with near-instant responses while using the shopping cart
			</li>
			<li>
				An administrator section for modifying the inventory, all from the same interface shoppers
				see
			</li>
		</ul>
		<figcaption>
			Check it out <a href="https://www.cartagenadecor.com"
				><strong class="underlined">here!</strong></a
			>
		</figcaption>
	</figure>
	<img src="/Cartagena1.png" alt="Shop display for Cartagena Decor website" />
</article>

<hr class="portfoliobar" />

<article class="portfolioitem">
	<h2 class="blockheading">
		<a href="https://competent-jones-24a1bd.netlify.app/">Weather App</a>
	</h2>
	<figure>
		<figcaption>A simple weather app, featuring:</figcaption>
		<ul>
			<li>Vanilla CSS and JavaScript</li>
			<li>Current weather and forecast, based on the user's location (or user input)</li>
		</ul>
		<figcaption>
			Check it out <a href="https://competent-jones-24a1bd.netlify.app/"
				><strong class="underlined">here!</strong></a
			>
		</figcaption>
	</figure>
	<img src="/WeatherApp.png" alt="Weather application in action" />
</article>

<hr class="portfoliobar" />

<article class="portfolioitem">
	<h2 class="blockheading">
		<a href="https://stucky-back-end-week11.herokuapp.com/">Automobile Storefront</a>
	</h2>
	<figure>
		<figcaption>An automobile storefront, featuring:</figcaption>
		<ul>
			<li>Secure, performant, and object-oriented PHP code</li>
			<li>Multiple displays of the available inventory</li>
			<li>A password-protected administration section, allowing full control over the inventory</li>
		</ul>
		<figcaption>
			Check it out <a href="https://stucky-back-end-week11.herokuapp.com/"
				><strong class="underlined">here!</strong></a
			>
		</figcaption>
	</figure>
	<img src="/Zippys.png" alt="Storefront administration section display" />
</article>
