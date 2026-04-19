// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	vite: { css: { modules: { generateScopedName: '[hash:base64:8]' }}},
	output: 'static',
	server: { port: 3400 }
})