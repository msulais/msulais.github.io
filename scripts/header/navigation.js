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

	for (const el of document.querySelectorAll('header>:is(nav,dialog)>[data-selected]')){
		el.removeAttribute('data-selected')
	}
	for (const el  of document.querySelectorAll(`header>:is(nav,dialog)>[href="${CSS.escape(pathname)}"]`)){
		el.setAttribute('data-selected', '')
	}

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
	const mp_home_btn = document.getElementById('mp-home-btn')
	mp_home_btn.onclick = () => update_page('/contact')

	const h_logo_btn = document.getElementById('h-logo-btn')

	// el.onclick already in used in logo.js
	h_logo_btn.addEventListener('click', () => update_page('/'))
}

function init_dialog_navigation() {
	const menu_btn = document.getElementById('h-menu')

	/** @type HTMLDialogElement */
	const navigation_dialog = document.getElementById('h-dialog')
	const close_dialog_btn = document.getElementById('h-dialog-close')

	menu_btn.onclick = () => navigation_dialog.showModal()
	close_dialog_btn.onclick = () => navigation_dialog.close()
	navigation_dialog.onclick = (ev) => {
		ev.preventDefault()

		/** @type HTMLAnchorElement */
		const target = document.activeElement
		if (target.tagName !== 'A') return

		update_page(target.getAttribute('href'))
		navigation_dialog.close()
	}
}

init_navigation()
init_navigation_btn()
init_custom_btn()
init_dialog_navigation()
})()