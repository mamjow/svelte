import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(() => {
	return {
		plugins: [sveltekit()],
		server: {
			proxy: {
				'/api': {
					target : 'http://localhost:5233',
					changeOrigin: false,
					rewrite: (path) => path.replace(/^\/api/, ''),
					secure: false,
				},		
			}
		},
	};
});
