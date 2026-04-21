import type { ImageMetadata } from 'astro'
import redmerah_img1 from '../assets/images/projects/redmerah/redmerah-1.png'
import redmerah_img2 from '../assets/images/projects/redmerah/redmerah-2.png'
import redmerah_img3 from '../assets/images/projects/redmerah/redmerah-3.png'
import redmerah_img4 from '../assets/images/projects/redmerah/redmerah-4.png'
import redmerah_img5 from '../assets/images/projects/redmerah/redmerah-5.png'
import redmerah_img6 from '../assets/images/projects/redmerah/redmerah-6.png'
import artic_img1 from '../assets/images/projects/artic/artic-1.png'
import artic_img2 from '../assets/images/projects/artic/artic-2.png'
import artic_img3 from '../assets/images/projects/artic/artic-3.png'
import loripsum_img1 from '../assets/images/projects/loripsum/loripsum-1.png'
import loripsum_img2 from '../assets/images/projects/loripsum/loripsum-2.png'
import birusqlclient_img1 from '../assets/images/projects/biru-sql-client/biru-sql-client-1.png'
import templatedokumen_img1 from '../assets/images/projects/template-dokumen/template-dokumen-1.png'

type Project = {
	name: string
	description: string
	urls: string[]
	images: [url: ImageMetadata, alt: string][]
	technology: string[]
}

export const Redmerah: Project = {
	name: 'Redmerah (Productivity Tools)',
	description: 'Redmerah is a fast, distraction-free web application offering a comprehensive suite of everyday utilities—such as an advanced calculator, task manager, and QR scanner. I built it for my personal needs to replace bloated, ad-heavy alternatives. Developed using Astro and Typescript, it features a handcrafted UI entirely devoid of third-party libraries, resulting in a lightweight and highly intuitive user experience. By utilizing a local-first architecture powered by the IndexedDB API, the platform ensures rapid performance and enhanced privacy, serving as a strong testament to my passion for creating efficient, user-centric tools.',
	urls: ['https://www.redmerah.com'],
	images: [
		[redmerah_img1, 'Redmerah'],
		[redmerah_img2, 'All Redmerah apps'],
		[redmerah_img3, 'Randomizer app in Redmerah'],
		[redmerah_img4, 'Calculator app in Redmerah'],
		[redmerah_img5, 'Emoji Picker app in Redmerah'],
		[redmerah_img6, 'QR Code Scanner & Generator app in Redmerah'],
	],
	technology: ['Astro', 'TypeScript', 'SASS'],
}

export const Artic: Project = {
	name: 'Artic (Blog or News Template)',
	description: 'Artic is a modern, fully responsive blog and magazine template built with Next.js, featuring dark/light modes, advanced search filtering, and a clean, user-centric design. Although originally developed as a premium product for template marketplaces, it now serves as a strong portfolio piece demonstrating your expertise in front-end development, modular component design, and building scalable, feature-rich web applications.',
	urls: ['https://artic-delta.vercel.app'],
	images: [
		[artic_img1, 'Artic homepage'],
		[artic_img2, 'Artic article page'],
		[artic_img3, 'Artic category page'],
	],
	technology: ['Next.js', 'React', 'SASS'],
}

export const Loripsum: Project = {
	name: 'Loripsum (Figma Plugin)',
	description: 'Loripsum is a Figma plugin developed to eliminate the frustration of repetitive "Lorem ipsum" placeholder text by utilizing a custom algorithm to generate truly randomized, unique sequences. It provides designers with granular control over their layouts by allowing them to generate precise amounts of words, sentences, or paragraphs, alongside automatic text styling options for sentence case, uppercase, and lowercase formatting.',
	urls: [
		'https://www.figma.com/community/plugin/1539232405802126137/loripsum',
		'https://github.com/msulais/figma-plugin-loripsum',
	],
	images: [
		[loripsum_img1, 'Loripsum'],
		[loripsum_img2, 'Plugin screenshot']
	],
	technology: ['Figma', 'Typescript'],
}

export const SQLClient: Project = {
	name: '@biru/sql-client (NPM Package)',
	description: '@biru/sql_client is a lightweight, fully typed TypeScript library designed for managing client-side SQL operations. I built this package because I needed a way to simulate real database behavior without having to set up an actual backend database, making it an ideal tool for rapid prototyping and demo purposes. It provides a clean, developer-friendly API that brings robust data interactions directly into the browser environment.',
	urls: [
		'https://jsr.io/@biru/sql-client',
		'https://github.com/msulais/sql-client',
	],
	images: [
		[birusqlclient_img1, 'Loripsum'],
	],
	technology: ['Typescript'],
}

export const TemplateDokumen: Project = {
	name: 'Template Dokumen / Mailing With HTML',
	description: 'Template Dokumen is a serverless document automation web application designed to replicate the mail merge functionality of Microsoft Word, but modernized to utilize HTML templates. I built this tool to feature multi-column support and direct printing capabilities, all wrapped in a sleek, dedicated dark mode interface. By leveraging a serverless architecture along with the Google Drive API and IndexedDB for local processing and asset management, it provides a fast, privacy-focused solution for seamlessly generating dynamic documents directly within the browser.',
	urls: ['https://template-dokumen.vercel.app'],
	images: [
		[templatedokumen_img1, 'Screenshot Template Dokumen'],
	],
	technology: ['Typescript', 'Svelte', 'SASS'],
}

export const All: Project[] = [
	TemplateDokumen,
	SQLClient,
	Redmerah,
	Loripsum,
	Artic,
]
