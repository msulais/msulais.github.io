import logo_html from '../assets/logos/html.svg'
import logo_css from '../assets/logos/css.svg'
import logo_typescript from '../assets/logos/typescript.svg'
import logo_solid from '../assets/logos/solid.svg'
import logo_react from '../assets/logos/react.svg'
import logo_svelte from '../assets/logos/svelte.svg'
import logo_vue from '../assets/logos/vue.svg'
import logo_figma from '../assets/logos/figma.svg'
import profilePictureImg from '../assets/images/profile-picture.jpg'

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
	export const profilePicture = profilePictureImg.src
	export const fullname = 'Muhammad Sulais'
	export const fullnameHTML = 'Muhammad <br>Sulais'
	export const role = 'Frontend Web Developer'
	export const roleHTML = 'Frontend <br>Web Developer'
	export const location = 'Yogyakarta, Indonesia'
	export const locationURL = 'https://maps.app.goo.gl/bZE8Mq4BN4oqJrDq8'
	export const timezoneValue = +7
	export const timezonePlace = 'Asia/Jakarta'
	export const timezoneText = 'UTC' + (timezoneValue >= 0? '+' : '') + timezoneValue
	export const timezoneURL = 'https://time.is/GMT' + (timezoneValue >= 0? '+' : '') + timezoneValue
	export const webExperienceYear = () => _initExpYear()

	export namespace Languages {
		type Lang = {
			name: string
			difficulty: 'Beginner' | 'Intermediate' | 'Expert' | 'Fluent' | 'Native'
		}

		export const Indonesia: Lang = {
			name: 'Indonesia',
			difficulty: 'Native'
		}

		export const English: Lang = {
			name: 'English',
			difficulty: 'Intermediate'
		}

		export const all: Lang[] = [
			Indonesia,
			English
		]
	}

	export namespace Skills {
		type Skill = {
			name: string
			imgURL: string
		}

		export const HTML: Skill = {
			imgURL: logo_html.src,
			name: 'HTML'
		}

		export const CSS: Skill = {
			imgURL: logo_css.src,
			name: 'CSS'
		}

		export const TypeScript: Skill = {
			imgURL: logo_typescript.src,
			name: 'TypeScript'
		}

		export const SolidJS: Skill = {
			imgURL: logo_solid.src,
			name: 'SolidJS'
		}

		export const React: Skill = {
			imgURL: logo_react.src,
			name: 'React'
		}

		export const Svelte: Skill = {
			imgURL: logo_svelte.src,
			name: 'Svelte'
		}

		export const VueJS: Skill = {
			imgURL: logo_vue.src,
			name: 'VueJS'
		}

		export const Figma: Skill = {
			imgURL: logo_figma.src,
			name: 'Figma'
		}

		export const all: Skill[] = [
			HTML, CSS, TypeScript,
			SolidJS, React, Svelte, VueJS,
			Figma,
		]

		export const allGroup: Skill[][] = [
			[HTML, CSS, TypeScript],
			[SolidJS, React, Svelte, VueJS],
			[Figma]
		]
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
			degree: 'Bachelor of Information System',
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

		export const Hexacompare: Work = {
			company: 'Hexacompare',
			from_year: 2022,
			to_year: 2022,
			role: 'Programming Language Teacher',
		}

		export const all: Work[] = [
			AlItishamPlayen,
			Hexacompare
		]
	}
}