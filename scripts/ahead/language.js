(() => {
'use strict'

function update_language(lang) {
	document.documentElement.lang = lang
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

init_local_language()
})()