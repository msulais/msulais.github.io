import { ElementIds } from "../shared/ids"
import { pxToRem } from "./utils"

const _tabsRef = document.getElementById(ElementIds.tabs)
const _aboutRef = document.getElementById(ElementIds.about)
const _worksRef = document.getElementById(ElementIds.works)
const _contractRef = document.getElementById(ElementIds.contact)
let _selectedPageIndex = 0

function _initEvents(): void {
	_tabsRef?.addEventListener('keydown', (ev) => {
		const code = ev.code
		const button = document.activeElement
		if (!button || button.tagName !== 'BUTTON' || !_tabsRef.contains(button)) return

		let sibling: Element | null = null
		switch (code) {
		case 'ArrowLeft':
			sibling = button.previousElementSibling
			while (sibling && sibling.tagName !== 'BUTTON') {
				sibling = sibling.previousElementSibling
			}

			if (!sibling) {
				const buttons = _tabsRef.querySelectorAll('button')
				sibling = buttons[buttons.length - 1]
			}
			break
		case 'ArrowRight':
			sibling = button.nextElementSibling
			while (sibling && sibling.tagName !== 'BUTTON') {
				sibling = sibling.nextElementSibling
			}

			if (!sibling) {
				sibling = _tabsRef.querySelectorAll('button')[0]
			}
			break
		}

		if (!sibling || !(sibling instanceof HTMLElement)) return

		sibling.focus()
		sibling.click()
	})

	_tabsRef?.addEventListener('click', () => {
		const btnRef = document.activeElement
		if (!btnRef || btnRef.tagName !== 'BUTTON' || !_tabsRef.contains(btnRef)) return

		const controls = btnRef.getAttribute('aria-controls') ?? ''
		const prevSelectedPageIndex = _selectedPageIndex
		let selectedRef: HTMLElement | null = null
		switch (controls) {
		case 'about':
			_aboutRef?.style.removeProperty('display')
			_worksRef?.style.setProperty('display', 'none')
			_contractRef?.style.setProperty('display', 'none')
			selectedRef = _aboutRef
			_selectedPageIndex = 0
			break
		case 'works':
			_aboutRef?.style.setProperty('display', 'none')
			_worksRef?.style.removeProperty('display')
			_contractRef?.style.setProperty('display', 'none')
			selectedRef = _worksRef
			_selectedPageIndex = 1
			break
		case 'contact':
			_aboutRef?.style.setProperty('display', 'none')
			_worksRef?.style.setProperty('display', 'none')
			_contractRef?.style.removeProperty('display')
			selectedRef = _contractRef
			_selectedPageIndex = 2
			break
		}

		if (selectedRef && prevSelectedPageIndex !== _selectedPageIndex) {
			selectedRef.animate({
				translate: [
					prevSelectedPageIndex < _selectedPageIndex
						? `${pxToRem(64)}rem 0`
						: `-${pxToRem(64)}rem 0`,
					'0 0'
				],
				opacity: [0, 1],
			}, {duration: 250, easing: 'cubic-bezier(.15,0,0,1)'})
		}

		const children = _tabsRef.children
		for (let i = 0; i < children.length; i++) {
			const item = children.item(i)
			if (item && item.tagName === 'BUTTON') {
				const sameBtnRef = item === btnRef
				item.setAttribute('aria-selected', String(sameBtnRef))
				item.setAttribute('tabindex', sameBtnRef? '0' : '-1')
				if (sameBtnRef) {
					_tabsRef.style.setProperty('--selected-index', i + '')
				}
			}
		}
	})
}

export default () => {
	_initEvents()
}