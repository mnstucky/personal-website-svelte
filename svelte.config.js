import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import {mdsvex} from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), mdsvex({extensions: ['.md'], layout: { blog: 'src/routes/blog/_post.svelte'}})],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel()
	},

	extensions: ['.svelte', '.md']
};

export default config;
