(() => {
'use strict'

const max_block_size = 108
const min_block_size = 36

/** @type HTMLDivElement[] */
let blocks = []

/** @type number | null */
let resize_timeout_id = null

/**
 * @param {boolean} opacity
 */
function reposition_blocks(p_opacity=true){
	const screen_width = document.body.clientWidth
	const screen_height = window.innerHeight

	/**
	 * Make sure no block stacking each other
	 * @type [X1: number, X2: number, Y1: number, Y2: number][]
	 */
	const prohibited_area = []
	for (const block of blocks) {
		const width = Math.floor(
			min_block_size
			+ Math.random()
			* (max_block_size - min_block_size)
		)
		const height = width
		block.style.setProperty('width', width + 'px')
		block.style.setProperty('height', height + 'px')
		const rect = block.getBoundingClientRect()
		let [top, left] = [0, 0]
		let is_prohibited = false
		let j = 0
		do {
			is_prohibited = false
			top = Math.random() * (screen_height - rect.height)
			left = Math.random() * (screen_width - rect.width)
			const right = left + rect.width
			const bottom = top + rect.height
			check: for (const area of prohibited_area) {
				const [X1, X2, Y1, Y2] = area
				is_prohibited = (
					// current block
					   (left  >= X1 && left  <= X2 && top    >= Y1 && top    <= Y2) // left-top
					|| (right >= X1 && right <= X2 && top    >= Y1 && top    <= Y2) // right-top
					|| (left  >= X1 && left  <= X2 && bottom >= Y1 && bottom <= Y2) // left-bottom
					|| (right >= X1 && right <= X2 && bottom >= Y1 && bottom <= Y2) // right-bottom

					// other block
					|| (X1 >= left && X1 <= right && Y1 >= top && Y1 <= bottom) // left-top
					|| (X2 >= left && X2 <= right && Y1 >= top && Y1 <= bottom) // right-top
					|| (X1 >= left && X1 <= right && Y2 >= top && Y2 <= bottom) // left-bottom
					|| (X2 >= left && X2 <= right && Y2 >= top && Y2 <= bottom) // right-bottom
				)
				if (is_prohibited) break check
			}
			++j
		} while (is_prohibited && j < 0xf)

		const opacity = Math.min(Math.max(Math.random(), .25), .85)
		prohibited_area.push([left, left + rect.width, top, top + rect.height])
		block.style.setProperty('top', top + 'px')
		block.style.setProperty('left', left + 'px')
		if (p_opacity) block.style.setProperty('opacity', opacity + '')
	}
}

function generate_blocks(){
	const easing = 'cubic-bezier(.15, 0, 0, 1)'
	const screen_width = document.body.clientWidth
	const screen_height = window.innerHeight
	const size = screen_height * screen_width
	const block_count = Math.floor(size / 40000)

	if (blocks.length > block_count) {
		const deleted_blocks = blocks.slice(block_count)
		blocks = blocks.slice(0, block_count)

		let i = 0
		for (const block of deleted_blocks) {
			block.animate({opacity: [1, 0],
				transform: ['translateY(0px)', 'translateY(-16px)', 'translateY(0px)']}, {
				duration: 1000,
				easing,
				delay: Math.min(Math.floor(Math.random() * deleted_blocks.length) * 50, 1000)
			}).finished.then(() => block.remove())
			++i
		}
	}
	else if (blocks.length < block_count) {
		const get_random_size = () => Math.floor(
			min_block_size
			+ Math.random()
			* (max_block_size - min_block_size)
		)
		for (let i = 0; i < block_count - blocks.length; i++) {
			const div = document.createElement('div')
			div.classList.add('block-effect')

			const size = get_random_size()
			div.style.setProperty('width', size + 'px')
			div.style.setProperty('height', size + 'px')
			div.style.setProperty('opacity', '0')
			document.body.append(div)
			blocks.push(div)

			const opacity = Math.min(Math.max(Math.random(), .25), .85)
			div.animate({
				opacity: [0, opacity],
				transform: ['translateY(0px)', 'translateY(-16px)', 'translateY(0px)']
			}, {
				duration: 1000,
				easing,
				delay: Math.min(Math.floor(Math.random() * (block_count - blocks.length)) * 50, 1000)
			}).finished.then(() => div.style.setProperty('opacity', opacity + ""))
		}
	}
}

function init_route_change(){
	const route = document.getElementById('g-route-listener')
	route.addEventListener(
		'custom:routechange',
		() => reposition_blocks()
	)
}

function init_window_resize_listener(){
	window.addEventListener('resize', () => {
		if (typeof resize_timeout_id == 'number') {
			clearTimeout(resize_timeout_id)
		}

		resize_timeout_id = setTimeout(() => {
			generate_blocks()
			reposition_blocks(false)
			resize_timeout_id = null
		}, 300)
	})
}

function init_visibility_change() {
	let timeout_id = null
	document.addEventListener('visibilitychange', () => {
		if (document.hidden) return
		if (typeof timeout_id === 'number') clearTimeout(timeout_id)

		timeout_id = setTimeout(() => {
			reposition_blocks()
			timeout_id = null
		}, 200)
	})
}

generate_blocks()
reposition_blocks(false)
init_window_resize_listener()
init_route_change()
init_visibility_change()
})()