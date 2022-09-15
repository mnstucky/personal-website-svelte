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
	<title>Resume</title>
</svelte:head>

<article class="portfolio-item">
	<h2 class="blockheading">INTRUST Bank</h2>
	<p>Wichita, KS - June 2022 to Present</p>
	<ul>
		<li>Led the development team’s transition from .NET Framework to .NET Core</li>
		<li>Designed a template Blazor Server app architecture for use across the bank</li>
		<li>Created and deployed a NuGet class library for use with internal apps</li>
		<li>
			Developed a Blazor UI component library, complete with form inputs, layout helpers, and data
			displays
		</li>
	</ul>
</article>

<hr class="portfolio-bar" />

<article class="portfolio-item">
	<h2 class="blockheading">LP Technologies</h2>
	<p>Wichita, KS - June 2021 to June 2022</p>
	<ul>
		<li>Designed, implemented, and deployed a web-based inventory-management platform</li>
		<li>Built features for a data-intensive application using TypeScript, React, and C++</li>
		<li>
			Created an analysis suite, complete with historical tools and live alerts, that allowed
			customers to track historical and real-time weather effects on satellite signals
		</li>
		<li>Led the refactor of the company codebase into TypeScript and NestJS</li>
		<li>
			Redesigned and rebuilt the entire user interface of the company’s primary product to improve
			the user experience across device types and sizes
		</li>
		<li>
			Implemented application-wide search functionality to allow easy access to application features
		</li>
		<li>Constructed test suites and interactive API documentation to aid development</li>
		<li>Created Linux ports and installers for company software</li>
		<li>
			Developed a CI/CD pipeline using Docker for the testing and deployment of web applications
		</li>
	</ul>
</article>

<style>
	.portfolio-item {
		font-family: 'Noto Sans JP', sans-serif;
		display: flex;
		flex-direction: column;
	}

	.portfolio-bar {
		margin-top: 1.5rem;
	}

	.portfolio-item p {
		margin: 0;
	}
</style>
