import { marked } from 'marked'
import {rawContent as redmerah_desc} from '../projects/redmerah.md'
import {rawContent as artic_desc} from '../projects/artic.md'
import redmerah_img1 from '../assets/images/projects/redmerah/redmerah-1.png'
import redmerah_img2 from '../assets/images/projects/redmerah/redmerah-2.png'
import redmerah_img3 from '../assets/images/projects/redmerah/redmerah-3.png'
import redmerah_img4 from '../assets/images/projects/redmerah/redmerah-4.png'
import redmerah_img5 from '../assets/images/projects/redmerah/redmerah-5.png'
import redmerah_img6 from '../assets/images/projects/redmerah/redmerah-6.png'
import artic_img1 from '../assets/images/projects/artic/artic-1.png'
import artic_img2 from '../assets/images/projects/artic/artic-2.png'
import artic_img3 from '../assets/images/projects/artic/artic-3.png'

export namespace C_Projects {
	type Project = {
		name: string
		url: string
		images: [url: string, alt: string][]
		technology: string[]
		description: string
	}

	export const redmerah: Project = {
		name: 'Redmerah / Productivity Tools',
		url: 'https://redmerah.com',
		images: [
			[redmerah_img1.src, 'Redmerah'],
			[redmerah_img2.src, 'All Redmerah apps'],
			[redmerah_img3.src, 'Randomizer app in Redmerah'],
			[redmerah_img4.src, 'Calculator app in Redmerah'],
			[redmerah_img5.src, 'Emoji Picker app in Redmerah'],
			[redmerah_img6.src, 'QR Code Scanner & Generator app in Redmerah'],
		],
		technology: ['Astro', 'TypeScript', 'SASS'],
		description: marked(redmerah_desc(), {async: false})
	}

	export const artic: Project = {
		name: 'Artic / Blog or News Template',
		url: 'https://artic-delta.vercel.app/',
		images: [
			[artic_img1.src, 'Artic homepage'],
			[artic_img2.src, 'Artic article page'],
			[artic_img3.src, 'Artic category page'],
		],
		technology: ['Next.js', 'React', 'SASS'],
		description: marked(artic_desc(), {async: false})
	}

	export const all: Project[] = [
		redmerah,
		artic
	]
}