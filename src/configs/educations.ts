import universitasterbuka from '../assets/logos/universitas-terbuka.png'

type Education = {
	university: string
	logo: ImageMetadata | null
	grade: string
	degree: string
	from_year: number
	to_year: number
}

export const UniversitasTerbuka: Education = {
	university: 'Universitas Terbuka',
	logo: universitasterbuka,
	degree: 'Bachelor of System Information',
	grade: '3.52',
	from_year: 2023,
	to_year: 2027
}

export const All: Education[] = [
	UniversitasTerbuka
]