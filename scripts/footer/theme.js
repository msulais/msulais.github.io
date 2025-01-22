(() => {
'use strict'

const root = document.documentElement
const btn = document.getElementById('f-theme')
const btn_span = btn.firstElementChild
let g_theme = 'system'

/**
 * @param {'system' | 'light' | 'dark'} theme
 * @param {boolean} animation
 */
function change_theme(theme) {
	const animation_options = {
		duration: 200,
		easing: 'cubic-bezier(.15,0,0,1)'
	}
	g_theme = theme
	localStorage.setItem('theme', theme)

	btn_span.animate(
		{opacity: [1, 0], scale: [1, .85]},
		animation_options
	).finished.then(() => {
		const rect_old = btn.getBoundingClientRect()
		root.setAttribute('data-theme', theme)

		const rect = btn.getBoundingClientRect()
		btn.animate(
			{width: [rect_old.width + 'px', rect.width + 'px']},
			animation_options
		)
		btn_span.animate(
			{opacity: [0, 1], scale: [.85, 1]},
			animation_options
		)
	})
}

function init_theme() {
	const theme = localStorage.getItem('theme')
	if (!theme || !['system', 'light', 'dark'].includes(theme)) return

	g_theme = theme
}

function init_theme_button() {
	btn.onclick = () => change_theme({
		system: 'light',
		light: 'dark',
		dark: 'system'
	}[g_theme])
}

init_theme()
init_theme_button()
})()