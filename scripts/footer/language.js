(() => {
'use strict'
const btn = document.getElementById('f-language')
const btn_span = btn.firstElementChild
const root = document.documentElement
let language = 'en'

/** @param {'id' | 'en'} lang */
function update_language(lang) {
	const animation_options = {
		duration: 200,
		easing: 'cubic-bezier(.15,0,0,1)'
	}
	language = lang
	root.lang = lang
	localStorage.setItem('language', lang)
	btn_span.animate(
		{opacity: [1, 0]},
		animation_options
	).finished.then(() => {
		const rect_old = btn.getBoundingClientRect()
		btn_span.textContent = lang === 'id'? 'Indonesia' : 'English'

		const rect = btn.getBoundingClientRect()
		btn.animate(
			{width: [rect_old.width + 'px', rect.width + 'px']},
			animation_options
		)
		btn_span.animate(
			{opacity: [0, 1]},
			animation_options
		)
	})
}

function init_local_language(){
	const language = localStorage.getItem('language')
	if (language && ['en', 'id'].includes(language)) {
		return update_language(language)
	}

	update_language(navigator.language.startsWith('id')
		? 'id'
		: 'en'
	)
}

function init_language_btn() {
	btn.onclick = () => update_language(language === 'en'? 'id' : 'en')
}

init_language_btn()
init_local_language()
})()