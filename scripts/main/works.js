(() => {
'use strict'
const NON_ACTIVE_WORK_WIDTH = 192
const MAX_WORKS_SHOW = 4
const image_fallback_source = 'https://cdn.pixabay.com/photo/2020/04/28/13/18/tulips-5104497_640.jpg'

/** @type {{id: string, name: string, images: string[]}[]} */
const works = [
	{ id: generate_id(), name: 'Redmerah',
	  images: [
		'https://cdn.pixabay.com/photo/2020/04/28/13/18/tulips-5104497_640.jpg'
	] },
	{ id: generate_id(), name: 'Artic',
	  images: [
		'https://cdn.pixabay.com/photo/2024/07/01/10/50/flycatcher-8864922_640.jpg'
	] },
	{ id: generate_id(), name: 'Portfolio',
	  images: [
		'https://cdn.pixabay.com/photo/2024/12/13/14/45/real-estate-9265386_640.jpg'
	] },
	{ id: generate_id(), name: 'UI/UX Design',
	  images: [
		'https://cdn.pixabay.com/photo/2020/09/19/23/42/architecture-5585737_640.jpg'
	] },
]

function init_works() {
	const animation_options = {
		duration: 300,
		easing: 'cubic-bezier(.15, 0, 0, 1)',
	}
	/**@type HTMLDivElement */
	const div = document.querySelector('.mp-works-portfolio')

	/**@type HTMLDivElement[] */
	const containers = []
	const update = () => {
		const skeletons = div.querySelectorAll('[data-none]')
		for (let i = 0; i < skeletons.length; i++) {
			const d = skeletons.item(i)
			d
			.animate({scale: [1, .85], opacity: [1, 0]}, animation_options)
			.onfinish = () => {
				d.remove()
				if (i < skeletons.length - 1) return

				div.append(...containers)
				for (const c of containers) c.animate({
					scale: [.85, 1],
					opacity: [0, 1]
				}, animation_options)
			}
		}
	}
	let is_animating = false

	div.addEventListener('keydown', ev => {
		/**@type HTMLElement */
		const active = document.activeElement
		if (!active || !div.contains(active)) return

		const code = ev.code
		if (code !== 'Space' && code !== 'Enter') return
		if (!active.dataset.workId) return

		active.click()
	})

	div.addEventListener('click', ev => {

		/**@type HTMLDivElement */
		const active = document.activeElement
		if (!active || !div.contains(active)) return

		const children = div.children
		const child1 = children.item(0)
		if (!child1) return
		if (child1 === active) {
			// TODO: show details
			return
		}

		const index = [...children].findIndex(el => el === active)
		if (index < 0 || is_animating) return

		if (window.matchMedia("(max-width: 700px)").matches) {
			// TODO: show details
			return
		}

		is_animating = true
		const non_active_width = children.item(1)?.clientWidth ?? NON_ACTIVE_WORK_WIDTH
		const width_child1 = child1.clientWidth
		const width = non_active_width
		for (let i = 1; i < children.length; i++) {
			/** @type HTMLElement */
			const c = children.item(i)

			if (c === active) continue
			c.style.setProperty('min-width', non_active_width + 'px')
			c.style.setProperty('max-width', non_active_width + 'px')
		}

		active.style.setProperty('min-width', width_child1 + 'px')
		active.style.setProperty('max-width', width_child1 + 'px')
		active.animate({
			minWidth: [width + 'px', width_child1 + 'px'],
			maxWidth: [width + 'px', width_child1 + 'px'],
		}, animation_options)

		let j = 0
		let k = 0

		/**
		 * @param {HTMLElement} child
		 */
		function animate_done_1(child){
			++j
			child.remove()
			div.append(child)

			const is_last = j == index

			if (is_last && containers.length > MAX_WORKS_SHOW) {
				const children = div.children
				const start_index = MAX_WORKS_SHOW - index
				const leftover = containers.length - MAX_WORKS_SHOW
				const n = leftover > index? index : leftover
				for (let i = start_index; i < (start_index + n); i++) {
					/**@type HTMLElement */
					const child = children.item(i)
					child.style.setProperty('min-width', non_active_width + 'px')
					child.style.setProperty('max-width', non_active_width + 'px')
					child.querySelector('h3').animate({
						opacity: [0, 1],
					}, animation_options)

					child.animate(
						{
							minWidth: ['0px', non_active_width + 'px'],
							maxWidth: ['0px', non_active_width + 'px']
						},
						animation_options
					).finished.then(() => {
						child.style.removeProperty('min-width')
						child.style.removeProperty('max-width')
					})
				}
			}

			child.querySelector('h3').animate({
				opacity: [0, 1],
			}, animation_options)

			child.animate({
				minWidth: ['0px', non_active_width + 'px'],
				maxWidth: ['0px', non_active_width + 'px'],
				marginRight: ['0px', is_last? '0px' : '16px'],
			}, animation_options).finished.then(() => animate_done_2())
		}

		function animate_done_2(){
			++k
			if (k < index) return
			active.style.removeProperty('min-width')
			active.style.removeProperty('max-width')
			is_animating = false
			const children = div.children
			for (let i = 1; i < children.length; i++) {
				/** @type HTMLElement */
				const c = children.item(i)
				c.style.removeProperty('min-width')
				c.style.removeProperty('max-width')
			}
		}

		for (let i = 0; i < index; i++) {
			const child = children.item(i)
			const width = i == 0? width_child1 : non_active_width
			child.querySelector('h3').animate({
				opacity: [1, 0],
			}, animation_options)
			child.animate({
				minWidth: [width + 'px', '0px'],
				maxWidth: [width + 'px', '0px'],
				marginRight: ['16px', '0px'],
			}, animation_options).finished.then(() => animate_done_1(child))
		}
	})

	for (const work of works) {
		const container = document.createElement('div')
		const header = document.createElement('h3')
		const image = document.createElement('img')
		image.src = work.images[0]
		image.alt = work.name
		image.onload = () => {
			containers.push(container)
			if (containers.length < works.length) return

			update()
		}
		image.onerror = () => image.src = image_fallback_source
		header.textContent = work.name
		container.tabIndex = 0
		container.setAttribute('data-work-id', work.id) // mark for parent click
		container.append(image, header)
	}
}

init_works()
})()