type Theme = 'system' | 'light' | 'dark'

const root = document.documentElement
const btn = document.getElementById('f-theme') as HTMLButtonElement
const btn_span = btn.firstElementChild as HTMLSpanElement
let g_theme: Theme = 'system'

function change_theme(theme: Theme) {
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

function init_theme(){
	const theme = localStorage.getItem('theme') as Theme
	if (!theme || !['system', 'light', 'dark'].includes(theme)) return

	document.documentElement.setAttribute('data-theme', theme)
	g_theme = theme
}

function init_theme_button() {
	btn.onclick = () => change_theme({
		system: 'light' as Theme,
		light: 'dark' as Theme,
		dark: 'system' as Theme
	}[g_theme])
}

const _ = () => {
	init_theme()
	init_theme_button()
}

export default _