import { C_Projects } from "../../../../constants/projects"
import { Refs } from "./refs"
import { PageTransition } from "./transition"

async function _openDetail(work: C_Projects.Project): Promise<void> {
	await PageTransition.leftToFull()
	document.body.style.setProperty('overflow', 'hidden')
	Refs.projectDetail_title.textContent = work.name.toUpperCase()
	Refs.projectDetail_content.innerHTML = work.description

	const refs_image: HTMLLIElement[] = []
	for (const image of work.images) {
		const li = document.createElement('li')
		const img = document.createElement('img')
		img.src = image[0]
		img.alt = image[1]
		li.appendChild(img)
		li.tabIndex = 0
		li.onclick = () => {
			li.toggleAttribute('data-fullscreen')
		}
		refs_image.push(li)
	}

	Refs.projectDetail_images.replaceChildren(...refs_image)

	const ref_urls: HTMLLIElement[] = []
	for (const url of work.urls) {
		const li = document.createElement('li')
		const a = document.createElement('a')
		a.textContent = url
		a.href = url
		a.target = '_blank'
		a.rel = 'noopener noreferrer'
		li.appendChild(a)
		ref_urls.push(li)
	}

	Refs.projectDetail_urls.replaceChildren(...ref_urls)

	const ref_tech: HTMLLIElement[] = []
	for (const tech of work.technology) {
		const li = document.createElement('li')
		li.textContent = tech
		ref_tech.push(li)
	}

	Refs.projectDetail_technology.replaceChildren(...ref_tech)
	Refs.projectDetail.open = true
	Refs.projectDetail.focus()
	await PageTransition.fullToRight()
}

async function _closeDetail(): Promise<void> {
	await PageTransition.rightToFull()
	Refs.projectDetail_title.replaceChildren()
	Refs.projectDetail_content.replaceChildren()
	Refs.projectDetail_images.replaceChildren()
	Refs.projectDetail_urls.replaceChildren()
	Refs.projectDetail_technology.replaceChildren()
	Refs.projectDetail.open = false
	document.body.style.removeProperty('overflow')
	await PageTransition.fullToLeft()
}

function _initEvents(): void {
	Refs.projectDetail_close.addEventListener('click', () => {
		_closeDetail()
	})

	Refs.projectDetail.addEventListener('keydown', (ev) => {
		if (ev.key !== 'Escape') {
			return
		}

		_closeDetail()
	})

	Refs.projectDetail_next.addEventListener('click', () => {
		const currentScrollLeft = Refs.projectDetail_images.scrollLeft
		// expected image ratio: 16 / 9
		const additional = Refs.projectDetail_images.getBoundingClientRect().height * 16 / 9
		Refs.projectDetail_images.scroll({
			left: currentScrollLeft + additional
		})
	})

	Refs.projectDetail_prev.addEventListener('click', () => {
		const currentScrollLeft = Refs.projectDetail_images.scrollLeft
		// expected image ratio: 16 / 9
		const additional = Refs.projectDetail_images.getBoundingClientRect().height * 16 / 9
		Refs.projectDetail_images.scroll({
			left: currentScrollLeft - additional
		})
	})

	Refs.projects_list.addEventListener('click', () => {
		const ref_target = document.activeElement as HTMLButtonElement
		if (!ref_target) {
			return
		}

		const index = ref_target.dataset.index
		let parsedIndex = -1
		if (!index
			|| (
				parsedIndex = Number.parseInt(index),
				!C_Projects.all[parsedIndex]
			)
		) {
			return
		}

		const project = C_Projects.all[parsedIndex]
		_openDetail(project)
	})
}

const _ = () => {
	_initEvents()
}

export default _