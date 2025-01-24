(() => {
'use strict'
const route_listener = document.getElementById('g-route-listener')
const route_order = ['#', '#about', '#works', '#contact']
let selected_route = '#'
let selected_page = document.querySelector('main>[data-selected]')
let is_animate = false

/**
 * @param {`#${string}`} pathname
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

	const callback = () => {
		selected_page.removeAttribute('data-selected')
		selected_page = document.querySelector(`main>div[data-page-target="${CSS.escape(pathname)}"]`)
		selected_page.setAttribute('data-selected', '')
		route_listener.dispatchEvent(new CustomEvent('custom:routechange'))
		if (pathname == '') pathname = '#'
		window.history.pushState({}, "", pathname)
		selected_route = pathname
	}

	if (!animation) return callback()
	if (is_animate) return

	const animation_options = {
		duration: 200,
		easing: 'cubic-bezier(.15, 0, 0, 1)',
	}
	const prev_index = route_order.findIndex(v => v === selected_route)
	const next_index = route_order.findIndex(v => v === pathname)
	if (prev_index < 0 || next_index < 0) return

	const reverse = prev_index > next_index
	is_animate = true
	document.body.style.setProperty('overflow', 'hidden')
	selected_page.animate({
		translate: ['0 0', reverse? '32px 0' : '-32px 0'],
		opacity: [1, 0]
	}, animation_options).finished.then(() => {
		callback()
		selected_page.animate({
			translate: [reverse? '-32px 0' : '32px 0', '0 0'],
			opacity: [0, 1]
		}, animation_options).finished.then(() => {
			is_animate = false
			document.body.style.removeProperty('overflow')
		})
	})
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

	update_page(hash, false)
	document.querySelector('main').classList.remove('no-view')
}

function init_custom_btn() {
	const mp_home_btn = document.getElementById('mp-home-btn')
	mp_home_btn.onclick = () => update_page('#contact')

	const h_logo_btn = document.getElementById('h-logo-btn')

	// el.onclick already in used in logo.js
	h_logo_btn.addEventListener('click', () => update_page('#'))
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