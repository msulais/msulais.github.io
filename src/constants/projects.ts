import redmerah_img1 from '../assets/images/projects/redmerah/redmerah-1.png'
import redmerah_img2 from '../assets/images/projects/redmerah/redmerah-2.png'
import redmerah_img3 from '../assets/images/projects/redmerah/redmerah-3.png'
import redmerah_img4 from '../assets/images/projects/redmerah/redmerah-4.png'
import redmerah_img5 from '../assets/images/projects/redmerah/redmerah-5.png'
import redmerah_img6 from '../assets/images/projects/redmerah/redmerah-6.png'
import artic_img1 from '../assets/images/projects/artic/artic-1.png'
import artic_img2 from '../assets/images/projects/artic/artic-2.png'
import artic_img3 from '../assets/images/projects/artic/artic-3.png'
import flutter_img1 from '../assets/images/projects/flutter-apps/flutter-1.png'
import flutter_img2 from '../assets/images/projects/flutter-apps/flutter-2.png'
import flutter_img3 from '../assets/images/projects/flutter-apps/flutter-3.png'
import loripsum_img1 from '../assets/images/projects/loripsum/loripsum-1.png'
import loripsum_img2 from '../assets/images/projects/loripsum/loripsum-2.png'
import { MD_REDMERAH } from '../projects/redmerah'
import { MD_ARTIC } from '../projects/artic'
import { MD_FLUTTER_APPS } from '../projects/flutter-apps'
import { MD_LORIPSUM } from '../projects/loripsum'

export namespace C_Projects {
	export type Project = {
		name: string
		urls: string[]
		images: [url: string, alt: string][]
		technology: string[]
		description: string
	}

	export const redmerah: Project = {
		name: 'Redmerah / Productivity Tools',
		urls: ['https://redmerah.com'],
		images: [
			[redmerah_img1.src, 'Redmerah'],
			[redmerah_img2.src, 'All Redmerah apps'],
			[redmerah_img3.src, 'Randomizer app in Redmerah'],
			[redmerah_img4.src, 'Calculator app in Redmerah'],
			[redmerah_img5.src, 'Emoji Picker app in Redmerah'],
			[redmerah_img6.src, 'QR Code Scanner & Generator app in Redmerah'],
		],
		technology: ['Astro', 'TypeScript', 'SASS'],
		description: MD_REDMERAH
	}

	export const artic: Project = {
		name: 'Artic / Blog or News Template',
		urls: ['https://artic-delta.vercel.app/'],
		images: [
			[artic_img1.src, 'Artic homepage'],
			[artic_img2.src, 'Artic article page'],
			[artic_img3.src, 'Artic category page'],
		],
		technology: ['Next.js', 'React', 'SASS'],
		description: MD_ARTIC
	}

	export const flutterApps: Project = {
		name: 'Flutter Apps',
		urls: [
			'https://github.com/msulais/flutter-sensors',
			'https://github.com/msulais/flutter-tasks',
			'https://github.com/msulais/flutter-baterai',
			'https://github.com/msulais/flutter-randomizer',
			'https://github.com/msulais/flutter-stopwatch',
			'https://github.com/msulais/flutter-calculator',
			'https://github.com/msulais/flutter-notes',
			'https://github.com/msulais/flutter-voice_recorder'
		],
		images: [
			[flutter_img1.src, 'All my flutter apps'],
			[flutter_img2.src, 'Apps schreenshot'],
			[flutter_img3.src, 'Apps schreenshot'],
		],
		technology: ['Flutter'],
		description: MD_FLUTTER_APPS
	}

	export const loripsum: Project = {
		name: 'Loripsum / Figma Plugin',
		urls: [
			'https://www.figma.com/community/plugin/1539232405802126137/loripsum',
			'https://github.com/msulais/figma-plugin-loripsum'
		],
		images: [
			[loripsum_img1.src, 'Loripsum'],
			[loripsum_img2.src, 'Plugin screenshot']
		],
		technology: ['Figma', 'Typescript'],
		description: MD_LORIPSUM
	}

	export const all: Project[] = [
		redmerah,
		artic,
		loripsum,
		flutterApps
	]
}