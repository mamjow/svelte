import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(() => {
	return {
		plugins: [sveltekit()],
		server: {
			proxy: {
				'/api': {
					target : 'http://api.moshiri.nl',
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, '')
				},
				
			}
		},
	};
});
