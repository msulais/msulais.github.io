import { C_Projects } from "../../../constants/projects"

const NON_ACTIVE_WORK_WIDTH = 192
const MAX_WORKS_SHOW = 4
const IMAGE_SOURCE_FALLBACK = '/images/no-image.png'
const animation_options = {
	duration: 300,
	easing: 'cubic-bezier(.15, 0, 0, 1)',
}
const containers: HTMLDivElement[] = []
const div = document.querySelector('.mp-works-portfolio') as HTMLDivElement
const dialog = document.getElementById('mp-works-dialog') as HTMLDialogElement
let is_animating = false

function show_detail_work(index: number) {
	const work = C_Projects.All[index]
	if (!work) {
		return
	}

	const images = dialog.firstElementChild!.firstElementChild as HTMLDivElement
	const images_indicator = images.nextElementSibling as HTMLDivElement
	const h2 = images_indicator.nextElementSibling as HTMLHeadingElement
	const technology = h2.nextElementSibling as HTMLUListElement
	const links = technology.nextElementSibling as HTMLUListElement
	const description = links.nextElementSibling as HTMLDivElement
	const images_elements: HTMLImageElement[] = []
	let selected_image_indicator: HTMLButtonElement
	let selected_image_index = 0
	let is_image_animating = false

	images.replaceChildren(...work.images.map((v, i) => {
		const img = document.createElement('img')
		img.src = v[0]
		img.alt = v[1]
		images_elements.push(img)
		if (i == 0) {
			img.setAttribute('data-selected', '')
		}

		return img
	}))
	images_indicator.replaceChildren(...work.images.map((v, i) => {
		const button = document.createElement('button')
		const img = document.createElement('img')
		img.src = v[0]
		img.alt = v[1]
		button.onclick = () => {
			if (selected_image_indicator === button || is_image_animating) return

			selected_image_indicator.removeAttribute('data-selected')
			button.setAttribute('data-selected', '')
			selected_image_indicator = button
			is_image_animating = true

			let image = images_elements[selected_image_index]
			const reverse = i < selected_image_index
			const width = image.clientWidth
			image.animate({
				left: ['0px', reverse? width + 'px' : '0px'],
				width: [width + 'px', '0px']
			}, animation_options).finished.then(() => {
				image.removeAttribute('data-selected')
				selected_image_index = i
				image = images_elements[selected_image_index]
				image.setAttribute('data-selected', '')
				const width = image.clientWidth
				image.animate({
					left: [reverse? '0px' : width + 'px', '0px'],
					width: ['0px', width + 'px']
				}, animation_options).finished.then(() => is_image_animating = false)
			})
		}
		if (i === 0) {
			button.setAttribute('data-selected', '')
			selected_image_indicator = button
		}

		button.appendChild(img)
		return button
	}))
	h2.textContent = work.name
	technology.replaceChildren(...work.technology.map(v => {
		const li = document.createElement('li')
		li.textContent = v
		return li
	}))
	links.replaceChildren(...work.urls.map(v => {
		const li = document.createElement('li')
		const a = document.createElement('a')
		a.href = v
		a.textContent = v
		a.rel = 'noopener noreferrer'
		a.target = '_blank'
		li.appendChild(a)
		return li
	}))
	description.innerHTML = work.description
	dialog.showModal()
	dialog.animate({
		top: ['100%', '50%'],
		translate: ['-50% 0', '-50% -50%'],
	}, animation_options)
}

function handle_click(ev: MouseEvent) {
	const active = document.activeElement as HTMLDivElement
	if (!active || !div.contains(active)) return

	const children = div.children
	const child1 = children.item(0)
	const work_index = active.dataset.workIndex
	const parsedIndex = Number.parseInt(work_index ?? '')
	if (!child1) return
	if (child1 === active) {
		ev.stopImmediatePropagation()
		show_detail_work(parsedIndex)
		return
	}

	const index = [...children].findIndex(el => el === active)
	if (index < 0 || is_animating) return

	if (window.matchMedia("(max-width: 700px)").matches) {
		ev.stopImmediatePropagation()
		show_detail_work(parsedIndex)
		return
	}

	is_animating = true
	const non_active_width = children.item(1)?.clientWidth ?? NON_ACTIVE_WORK_WIDTH
	const width_child1 = child1.clientWidth
	const width = non_active_width
	for (let i = 1; i < children.length; i++) {
		const c = children.item(i) as HTMLElement

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
	function animate_done_1(child: HTMLElement){
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
				const child = children.item(i) as HTMLElement
				child.style.setProperty('min-width', non_active_width + 'px')
				child.style.setProperty('max-width', non_active_width + 'px')
				child.querySelector('h3')?.animate({
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

		child.querySelector('h3')?.animate({
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
			const c = children.item(i) as HTMLElement
			c.style.removeProperty('min-width')
			c.style.removeProperty('max-width')
		}
	}

	for (let i = 0; i < index; i++) {
		const child = children.item(i) as HTMLElement
		const width = i == 0? width_child1 : non_active_width
		child?.querySelector('h3')?.animate({
			opacity: [1, 0],
		}, animation_options)
		child?.animate({
			minWidth: [width + 'px', '0px'],
			maxWidth: [width + 'px', '0px'],
			marginRight: ['16px', '0px'],
		}, animation_options).finished.then(() => animate_done_1(child))
	}
}

function handle_keydown(ev: KeyboardEvent) {
	const active = document.activeElement as HTMLElement
	if (!active || !div.contains(active)) return

	const code = ev.code
	if (code !== 'Space' && code !== 'Enter') return
	if (!active.dataset.workIndex) return

	active.click()
}

function init_works() {
	div.addEventListener('keydown', handle_keydown)
	div.addEventListener('click', handle_click)

	for (let i = 0; i < C_Projects.All.length; i++) {
		const work = C_Projects.All[i]
		const container = document.createElement('div')
		const header = document.createElement('h3')
		const image = document.createElement('img')
		const paragraph = document.createElement('p')
		image.src = work.images[0][0]
		image.alt = work.name
		image.onload = () => {
			containers.push(container)
			if (containers.length < C_Projects.All.length) return

			const skeletons = div.querySelectorAll('[data-none]')
			for (let i = 0; i < skeletons.length; i++) {
				const d = skeletons.item(i)
				d
				.animate({scale: [1, .85], opacity: [1, 0]}, animation_options)
				.onfinish = () => {
					d.remove()
					if (i < skeletons.length - 1) return

					div.append(...containers.sort((a, b) => (a.dataset.workIndex ?? '').localeCompare(b.dataset.workIndex ?? '')))
					for (const c of containers) c.animate({
						scale: [.85, 1],
						opacity: [0, 1]
					}, animation_options)
				}
			}
		}
		image.onerror = () => image.src = IMAGE_SOURCE_FALLBACK
		header.textContent = work.name
		paragraph.innerHTML = '<span lang="en">Click to see more</span>'
		container.tabIndex = 0
		container.setAttribute('data-work-index', i + '') // mark for parent click
		container.append(image, header, paragraph)
	}
}

function init_work_dialog() {
	document.addEventListener('click', ev => {
		const is_clicked_inside = dialog !== ev.target
		if (is_clicked_inside) return;

		dialog.animate({
			top: ['50%', '100%'],
			translate: ['-50% -50%', '-50% 0'],
		}, animation_options).finished.then(() => dialog.close())
	})

	dialog.oncancel = (ev) => {
		ev.preventDefault()
		dialog.animate({
			top: ['50%', '100%'],
			translate: ['-50% -50%', '-50% 0'],
		}, animation_options).finished.then(() => dialog.close())
	}

	const close_dialog_btn = document.getElementById('mp-works-dialog-close') as HTMLButtonElement
	close_dialog_btn.onclick = () => {
		dialog.animate({
			top: ['50%', '100%'],
			translate: ['-50% -50%', '-50% 0'],
		}, animation_options).finished.then(() => dialog.close())
	}
}

const _ = () => {
	init_works()
	init_work_dialog()
}

export default _