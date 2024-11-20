import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs', // Output folder for static files
			assets: 'docs', // Assets folder for static files
			// fallback: '200.html' // SPA fallback for dynamic routes
			fallback: null
		}),
		prerender: {
			entries: [
				'*', // Automatically prerender all static pages
				'/design', // Manually include additional routes if dynamic
			]
		}
	}
};

export default config;
