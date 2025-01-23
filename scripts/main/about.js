(() => {
'use strict'

function init_details(){
	/** @type KeyframeAnimationOptions */
	const animation_options = {
		duration: 300,
		easing: 'cubic-bezier(.15, 0, 0, 1)',
	}

	/** @type HTMLDetailsElement[] */
	const details = document.querySelectorAll('[data-page-target="#about"] details')
	if (details.length == 0) return

	for (const detail of details) {
		let animation_done = true

		/** @type HTMLDivElement */
		const div = detail.children.item(1)
		if (!div) continue

		/** @type HTMLSummaryElement */
		const summary = detail.children.item(0)
		if (!summary) continue

		summary.addEventListener('click', ev => {
			ev.preventDefault()
			if (!animation_done) return

			const is_open = detail.open
			const rect = div.getBoundingClientRect()
			animation_done = false
			if (is_open) {
				div.animate({
					opacity: [1, 0],
					height: [rect.height + 'px', '0px']
				}, animation_options).finished.then(() => {
					animation_done = true
					detail.open = false
				})
			} else {
				detail.open = true
				div.animate({
					opacity: [0, 1],
					height: ['0px', rect.height + 'px']
				}, animation_options).finished.then(() => animation_done = true)
			}
		})

		detail.addEventListener('toggle', ev => {
			if (detail.open) {
				return
			}
		})
	}
}

init_details()
})()