(() => {
'use strict';

/** @type HTMLDivElement | null */
const tabs = document.getElementById('m-tabs-id')

/** @type HTMLDivElement | null */
const tabPanelAbout = document.getElementById('about')

/** @type HTMLDivElement | null */
const tabPanelWorks = document.getElementById('works')

/** @type HTMLDivElement | null */
const tabPanelContact = document.getElementById('contact')

tabs?.addEventListener('keydown', (ev) => {
	const code = ev.code
	const button = document.activeElement
	if (!button || button.tagName !== 'BUTTON' || !tabs.contains(button)) return

	/** @type Element | null */
	let sibling = null
	switch (code) {
	case 'ArrowLeft':
		sibling = button.previousElementSibling
		while (sibling && sibling.tagName !== 'BUTTON') {
			sibling = sibling.previousElementSibling
		}

		if (!sibling) {
			const buttons = tabs.querySelectorAll('button')
			sibling = buttons[buttons.length - 1]
		}
		break
	case 'ArrowRight':
		sibling = button.nextElementSibling
		while (sibling && sibling.tagName !== 'BUTTON') {
			sibling = sibling.nextElementSibling
		}

		if (!sibling) {
			sibling = tabs.querySelectorAll('button')[0]
		}
		break
	}

	if (!sibling) return

	sibling.focus()
	sibling.click()
})

tabs?.addEventListener('click', () => {
	const button = document.activeElement
	if (!button || button.tagName !== 'BUTTON' || !tabs.contains(button)) return

	const controls = button.getAttribute('aria-controls')
	switch (controls) {
	case 'about':
		tabPanelAbout.style.removeProperty('display')
		tabPanelWorks.style.setProperty('display', 'none')
		tabPanelContact.style.setProperty('display', 'none')
		break
	case 'works':
		tabPanelAbout.style.setProperty('display', 'none')
		tabPanelWorks.style.removeProperty('display')
		tabPanelContact.style.setProperty('display', 'none')
		break
	case 'contact':
		tabPanelAbout.style.setProperty('display', 'none')
		tabPanelWorks.style.setProperty('display', 'none')
		tabPanelContact.style.removeProperty('display')
		break
	}

	const children = tabs.children
	for (let i = 0; i < children.length; i++) {
		const item = children.item(i)
		if (item && item.tagName === 'BUTTON') {
			if (item === button) {
				tabs.style.setProperty('--selected-index', i + '')
				item.setAttribute('aria-selected', 'true')
				item.setAttribute('tabindex', '0')
			} else {
				item.setAttribute('aria-selected', 'false')
				item.setAttribute('tabindex', '-1')
			}
		}
	}
})
})()