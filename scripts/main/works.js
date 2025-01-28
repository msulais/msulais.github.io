(() => {
'use strict'
const NON_ACTIVE_WORK_WIDTH = 192
const MAX_WORKS_SHOW = 4
const IMAGE_SOURCE_FALLBACK = '/images/no-image.png'
const animation_options = {
	duration: 300,
	easing: 'cubic-bezier(.15, 0, 0, 1)',
}

/** @type {{id: string, name: string, images: string[], link: string, description: {en: string, id: string}[], tags: string[]}[]} */
const works = [
	{
		id: generate_id(),
		name: 'Redmerah',
		images: [
			'/images/works/redmerah/redmerah-cover.png',
			'/images/works/redmerah/redmerah-1.png',
			'/images/works/redmerah/redmerah-2.png',
			'/images/works/redmerah/redmerah-3.png',
		],
		description: [
{
en: `Redmerah is a web app I created to bring together a suite of powerful tools in one efficient
platform—advanced calculator, task manager, color maker/picker/gradient generator, QR code
reader/scanner, randomizer, and so much more. Frustrated with apps that charge fees for basic
features, bombard users with ads, and have clunky interfaces that waste time, I wanted to build
something different: fast, user-friendly, and free of unnecessary distractions.`,

id: `Redmerah adalah aplikasi web yang saya buat untuk menghimpun serangkaian alat yang kuat dalam
satu platform yang efisien. Alat-alatnya meliputi kalkulator canggih, manajer tugas, pembuat/pemilih
warna/gradasi, pembaca/pemindai kode QR, pengacak, dan masih banyak lagi. Frustrasi dengan aplikasi
yang mengenakan biaya untuk fitur dasar, membombardir pengguna dengan iklan, dan memiliki antarmuka
yang tidak efisien, saya ingin membangun sesuatu yang berbeda: cepat, ramah pengguna, dan bebas dari
gangguan yang tidak perlu.`
},

{
en: `What sets Redmerah apart is that everything runs and saving the data locally in your browser
using IndexedDB API, eliminating the need for server-side operations. This means lightning-fast
performance without constant page reloads or waiting for server responses. Your data stays with you,
enhancing both speed and privacy. Developed with Astro and SolidJS, every UI component is
handcrafted by me without relying on third-party libraries, allowing for a seamless and intuitive
user experience.`,

id: `Yang membedakan Redmerah adalah semuanya berjalan dan menyimpan data secara lokal di browser
Anda menggunakan API IndexedDB, menghilangkan kebutuhan untuk operasi sisi server. Ini berarti
kinerja yang sangat cepat tanpa sering memuat ulang halaman atau menunggu respons server. Data Anda
tetap berada pada perangkat Anda, meningkatkan kecepatan dan privasi. Dikembangkan dengan Astro dan
SolidJS, setiap komponen UI dibuat secara manual oleh saya tanpa bergantung pada pustaka pihak
ketiga, memungkinkan pengalaman pengguna yang mulus dan intuitif.`
}
],
		link: 'https://redmerah.com',
		tags: [
			'Astro',
			'SolidJS',
			'SCSS'
		]
	},
	{
		id: generate_id(),
		name: 'Artic',
		images: [
			'/images/works/artic/artic-cover.png',
			'/images/works/artic/artic-1.png',
			'/images/works/artic/artic-2.png',
			'/images/works/artic/artic-3.png',
		],
		description: [],
		link: 'https://artic-delta.vercel.app',
		tags: [
			'Next.js',
			'React',
			'SCSS'
		]
	},
	{
		id: generate_id(),
		name: 'Portfolio',
	  	images: [
			'/images/works/portfolio/portfolio-cover.png',
			'/images/works/portfolio/portfolio-1.png',
			'/images/works/portfolio/portfolio-2.png',
			'/images/works/portfolio/portfolio-3.png',
		],
		description: [],
		link: 'https://msulais.github.io',
		tags: [
			'HTML',
			'CSS',
			'JavaScript'
		]
	},
	{
		id: generate_id(),
		name: 'UI/UX Design',
		images: [
			'/images/works/ui-ux-design/ui-ux-design-cover.png',
		],
		description: [],
		link: 'https://pin.it/Mjb3lapM2',
		tags: [
			'Figma'
		]
	},
]

/**@type HTMLDivElement[] */
const containers = []

/**@type HTMLDivElement */
const div = document.querySelector('.mp-works-portfolio')
let is_animating = false

/**@type HTMLDialogElement */
const dialog = document.getElementById('mp-works-dialog')

/**
 * @param {string} id
 */
function show_detail_work(id) {
	const work = works.find(v => v.id === id)
	const images = dialog.firstElementChild.firstElementChild
	const images_indicator = images.nextElementSibling
	const h2 = images_indicator.nextElementSibling
	const ul = h2.nextElementSibling

	/**@type HTMLAnchorElement */
	const a = ul.nextElementSibling
	const description = a.nextElementSibling

	/**@type HTMLImageElement[] */
	const images_elements = []

	/**@type HTMLButtonElement */
	let selected_image_indicator

	/**@type HTMLImageElement */
	let selected_image

	images.replaceChildren(...work.images.map((v, i) => {
		const img = document.createElement('img')
		img.src = v
		images_elements.push(img)
		if (i == 0) {
			img.setAttribute('data-selected', '')
			selected_image = img
		}

		return img
	}))
	images_indicator.replaceChildren(...work.images.map((v, i) => {
		const button = document.createElement('button')
		const img = document.createElement('img')
		img.src = v
		button.onclick = () => {
			if (selected_image_indicator === button) return

			selected_image_indicator.removeAttribute('data-selected')
			button.setAttribute('data-selected', '')
			selected_image_indicator = button
			selected_image.animate({
				scale: [1, .9],
				opacity: [1, 0]
			}, {...animation_options, duration: 200}).finished.then(() => {
				selected_image.removeAttribute('data-selected')
				selected_image = images_elements[i]
				selected_image.setAttribute('data-selected', '')
				selected_image.animate({
					scale: [.9, 1],
					opacity: [0, 1]
				}, {...animation_options, duration: 200})
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
	ul.replaceChildren(...work.tags.map(v => {
		const li = document.createElement('li')
		li.textContent = v
		return li
	}))
	a.href = work.link
	description.replaceChildren(...work.description.map(d => {
		const p = document.createElement('p')
		const span_en = document.createElement('span')
		span_en.lang = 'en'
		span_en.textContent = d.en.replaceAll('\n', ' ')

		const span_id = document.createElement('span')
		span_id.lang = 'id'
		span_id.textContent = d.id.replaceAll('\n', ' ')
		p.append(span_en, span_id)
		return p
	}))
	dialog.showModal()
	dialog.animate({
		scale: [.85, 1],
		opacity: [0, 1]
	}, animation_options)
}

/**
 * @param {MouseEvent} ev
 */
function handle_click(ev) {
	/**@type HTMLDivElement */
	const active = document.activeElement
	if (!active || !div.contains(active)) return

	const children = div.children
	const child1 = children.item(0)
	const work_id = active.dataset.workId
	if (!child1) return
	if (child1 === active) {
		ev.stopImmediatePropagation()
		show_detail_work(work_id)
		return
	}

	const index = [...children].findIndex(el => el === active)
	if (index < 0 || is_animating) return

	if (window.matchMedia("(max-width: 700px)").matches) {
		ev.stopImmediatePropagation()
		show_detail_work(work_id)
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
}

/**
 * @param {KeyboardEvent} ev
 */
function handle_keydown(ev) {
	/**@type HTMLElement */
	const active = document.activeElement
	if (!active || !div.contains(active)) return

	const code = ev.code
	if (code !== 'Space' && code !== 'Enter') return
	if (!active.dataset.workId) return

	active.click()
}

function init_works() {
	div.addEventListener('keydown', handle_keydown)
	div.addEventListener('click', handle_click)

	for (const work of works) {
		const container = document.createElement('div')
		const header = document.createElement('h3')
		const image = document.createElement('img')
		const paragraph = document.createElement('p')
		image.src = work.images[0]
		image.alt = work.name
		image.onload = () => {
			containers.push(container)
			if (containers.length < works.length) return

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
		image.onerror = () => image.src = IMAGE_SOURCE_FALLBACK
		header.textContent = work.name
		paragraph.innerHTML = [
			'<span lang="en">Click to see more</span>',
			'<span lang="id">Klik untuk lebih detail</span>',
		].join('')
		container.tabIndex = 0
		container.setAttribute('data-work-id', work.id) // mark for parent click
		container.append(image, header, paragraph)
	}
}

function init_work_dialog() {
	document.addEventListener('click', ev => {
		const is_clicked_inside = dialog !== ev.target
		if (is_clicked_inside) return;

		dialog.animate({
			scale: [1, .85],
			opacity: [1, 0]
		}, animation_options).finished.then(() => dialog.close())
	})

	const close_dialog_btn = document.getElementById('mp-works-dialog-close')
	close_dialog_btn.onclick = () => {
		dialog.animate({
			scale: [1, .85],
			opacity: [1, 0]
		}, animation_options).finished.then(() => dialog.close())
	}
}

init_works()
init_work_dialog()
})()