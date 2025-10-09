import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
	plugins: [react(), tailwind()],
	base: '/AW_Lab/', // <= имя репозитория
	build: {
		outDir: 'docs',
		rollupOptions: {
			input: {
				home: resolve(__dirname, 'index.html'),
				intro_it: resolve(__dirname, 'courses/intro-it/index.html'),
				lab1_intro_it: resolve(
					__dirname,
					'courses/intro-it/labs/lab-1-self-presentation/index.html'
				),
				lab2_intro_it: resolve(
					__dirname,
					'courses/intro-it/labs/lab-2-team-idea/index.html'
				),
				about: resolve(__dirname, 'about/index.html'),
				olympiads: resolve(__dirname, 'olympiads/index.html'),
				scholarships: resolve(__dirname, 'scholarships/index.html'),
				vr_tools: resolve(__dirname, 'courses/vr-tools/index.html'),
				vrtools_lab2: resolve(
					__dirname,
					'courses/vr-tools/labs/lab-2-scene/index.html'
				),
				lab1_vr_tools: resolve(
					__dirname,
					'courses/vr-tools/labs/lab-1-concept/index.html'
				),
			},
		},
	},
})
