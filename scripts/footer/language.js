(() => {
'use strict'
const btn = document.getElementById('f-language')
const btn_span = btn.firstElementChild
const root = document.documentElement
let g_language = 'en'

/** @param {'id' | 'en'} lang */
function update_language(lang) {
	const animation_options = {
		duration: 200,
		easing: 'cubic-bezier(.15,0,0,1)'
	}
	if (g_language == lang) return

	/** @type HTMLSpanElement[] */
	const spans = document.querySelectorAll('span[lang]')
	const rect_old = btn.getBoundingClientRect()
	let finished_span = 0
	for (const span of spans) {
		span.animate({opacity: [1, 0], translate: ['0 0', '0px -.5em']}, animation_options).onfinish = () => {
			++finished_span
			if (finished_span < spans.length) return

			root.lang = lang
			g_language = lang
			const rect = btn.getBoundingClientRect()
			btn.animate(
				{width: [rect_old.width + 'px', rect.width + 'px']},
				animation_options
			)
			btn_span.animate(
				{opacity: [0, 1], scale: [.85, 1]},
				animation_options
			)
			for (const s of spans) {
				s.animate({opacity: [0, 1], translate: ['0px -.5em', '0 0']}, animation_options)
			}
		}
	}
	localStorage.setItem('language', lang)
	btn_span.animate(
		{opacity: [1, 0], scale: [1, .85]},
		animation_options
	)
}

function init_local_language(){
	const language = localStorage.getItem('language')
	if (language && ['en', 'id'].includes(language)) {
		return g_language = language
	}

	g_language = (navigator.language.startsWith('id')
		? 'id'
		: 'en'
	)
}

function init_language_btn() {
	btn.onclick = () => update_language(g_language === 'en'? 'id' : 'en')
}

init_language_btn()
init_local_language()
})()