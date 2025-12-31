function _dateDiffInDays(date1: Date, date2: Date) {
	const MS_PER_DAY = 1000 * 60 * 60 * 24
	const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())
	const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate())

	return Math.floor((utc2 - utc1) / MS_PER_DAY)
}

function _initExpYear() {
	const startDate = new Date(2022, 7)
	const currentDate = new Date()
	const diffYear = _dateDiffInDays(startDate, currentDate) / 365.25
	const year = Number.parseFloat(diffYear.toFixed(2))
	return year
}

export namespace C_About {
	export const fullname = 'Muhammad Sulais'
	export const role = 'Frontend Web Developer'
	export const roleHTML = 'Frontend<br>Web Developer'
	export const location = 'Yogyakarta, Indonesia'
	export const locationURL = 'https://maps.app.goo.gl/bZE8Mq4BN4oqJrDq8'
	export const timezone = 'GMT+7'
	export const timezoneURL = 'https://time.is/GMT+7'
	export const webExperienceYear = () => _initExpYear()

	export enum Languages {
		Indonesia = 'Indonesia',
		English = 'English'
	}

	export enum Skills {
		HTML = 'HTML',
		CSS = 'CSS',
		JavaScript = 'JavaScript',
		TypeScript = 'TypeScript',
		SolidJS = 'SolidJS',
		React = 'React',
		Svelte = 'Svelte',
		VueJS = 'VueJS',
		Figma = 'Figma'
	}

	export namespace Educations {
		type Education = {
			university: string
			degree: string
			from_year: number
			to_year: number
			grade: string
		}

		export const OpenUniversity: Education = {
			degree: 'Information System',
			from_year: 2023,
			grade: '3.52',
			to_year: 2027,
			university: 'Indonesia Open University'
		}

		export const all: Education[] = [
			OpenUniversity
		]
	}

	export namespace Works {
		type Work = {
			company: string,
			role: string
			from_year: number

			/** `-1` if still in this company */
			to_year: number
		}

		export const AlItishamPlayen: Work = {
			company: 'Al-I\'tisham Playen High School',
			from_year: 2023,
			role: 'Administrative Assistant',
			to_year: -1
		}

		export const all: Work[] = [
			AlItishamPlayen
		]
	}
}