(() => {
'use strict'
let selected_route = '/'
let selected_page = document.querySelector('main>[data-selected]')

/**
 * @param {`/${string}`} pathname
 * @param {boolean} animation
 */
function update_page(pathname, animation=true){
	if (pathname == selected_route) return

	document.querySelector('nav>[data-selected]').removeAttribute('data-selected')
	document.querySelector(`nav>[href="${CSS.escape(pathname)}"]`).setAttribute('data-selected', '')

	selected_route = pathname
	selected_page.removeAttribute('data-selected')
	selected_page = document.querySelector(`main>div[data-page-target="${CSS.escape(pathname)}"]`)
	selected_page.setAttribute('data-selected', '')
	pathname = pathname.replace('/', '#').replace(/^#$/g, '')
	if (pathname == '') pathname = '/'
	window.history.pushState({}, "", pathname)
}

function init_navigation_btn() {
	const nav_element = document.getElementById('h-navigation')
	nav_element.onclick = (ev) => {
		ev.preventDefault()

		/** @type HTMLAnchorElement */
		const target = document.activeElement
		if (target.tagName !== 'A') return

		update_page(target.getAttribute('href'))
	}
}

function init_navigation(){
	const hash = location.hash
	if (!['#about', '#works', '#contact'].includes(hash)) {
		document.querySelector('main').classList.remove('no-view')
		return
	}

	update_page(hash.replace('#', '/'), false)
	document.querySelector('main').classList.remove('no-view')
}

function init_custom_btn() {
	const btn = document.getElementById('mp-home-btn')
	btn.onclick = () => update_page('/contact')
}

init_navigation()
init_navigation_btn()
init_custom_btn()
})()