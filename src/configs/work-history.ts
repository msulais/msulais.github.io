import hexacompare from '../assets/logos/hexacompare.png'
import masalitisham from '../assets/logos/mas-al-itisham.png'

type Work = {
	institute: string
	logo: ImageMetadata | null
	role: string
	start_date: Date
	end_date: Date | null
}

export const MASAlItisham: Work = {
	institute: 'MAS Al Itisham Playen',
	role: 'Administrative Assistant',
	logo: masalitisham,
	end_date: null,
	start_date: new Date(2023, 7)
}

export const Hexacompare: Work = {
	institute: 'Hexacompare',
	role: 'Programming Language Teacher',
	logo: hexacompare,
	start_date: new Date(2022, 7),
	end_date: new Date(2022, 11)
}

export const All: Work[] = [
	MASAlItisham,
	Hexacompare
]