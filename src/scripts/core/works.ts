import { ElementIds } from "../shared/ids"
import { pxToRem } from "./utils"

const dialogTransitionOptions = {
	duration: 250,
	easing: 'cubic-bezier(.15,0,0,1)',
}
const worksRef = document.getElementById(ElementIds.works)
const dialog = document.getElementById(ElementIds.worksDialog) as HTMLDialogElement
const _dlg_imagesRef = dialog.querySelector('.m-works-dialog-images')
const _dlg_imgIndicatorRef = dialog.querySelector('.m-works-dialog-images-indicator')
const _dlg_titleRef = dialog.querySelector('h2')
const _dlg_tagsRef = dialog.querySelector('.m-works-dialog-tags')
const _dlg_linkRef = dialog.querySelector('a')
const _dlg_descRef = dialog.querySelector('.m-works-dialog-description')
const _dlg_closeBtnRef = document.getElementById('m-works-dialog-close-id')
let _stopGlobalClick = false

function _openDialog(){
	dialog?.showModal()
	dialog?.firstElementChild?.scroll({top: 0, behavior: 'instant'})
	dialog?.animate({
		translate: ['-50% 50dvh', '-50% -50%'],
	}, dialogTransitionOptions)
}

function _closeDialog(){
	dialog?.animate({
		translate: ['-50% -50%', '-50% 50dvh'],
	}, dialogTransitionOptions).finished.then(() => dialog?.close())
}

function _initEvents(){
	_dlg_closeBtnRef?.addEventListener('click', () => _closeDialog())

	document.addEventListener('click', ev => {
		if (_stopGlobalClick || !dialog?.open) {
			_stopGlobalClick = false
			return
		}

		const clickInRange = ev.target !== dialog
		if (clickInRange) return

		_closeDialog()
	})

	worksRef?.addEventListener('click', () => {
		const button = document.activeElement as HTMLButtonElement
		if (!button || button.tagName !== 'BUTTON' || !worksRef.contains(button)) return

		const dataset = button.dataset
		const tags = dataset.tags
		const url = dataset.url
		const h3 = button.querySelector('h3')
		const descriptionTemplate = button.querySelector('div[data-description]')
		const imagesTemplate = button.querySelector('div[data-images]')
		if (!tags || !url || !imagesTemplate || !descriptionTemplate || !h3) return

		// update title
		if (_dlg_titleRef) {
			_dlg_titleRef.textContent = h3.textContent
		}

		// update link
		if (_dlg_linkRef) {
			_dlg_linkRef.href = url
			_dlg_linkRef.textContent = url
		}

		// update tags
		_dlg_tagsRef?.replaceChildren(...tags.split(',').map(v => {
			const li = document.createElement('li')
			li.textContent = v.trim()
			return li
		}))

		const ids: string[][] = []
		let selectedIndex = 0

		// update images
		_dlg_imagesRef?.replaceChildren(...[...imagesTemplate.children].map((v, i) => {
			const id = ['m-dialog-tabpanel-' + (i+1), 'm-dialog-tab-' + (i+1)]
			const img = v.cloneNode(true)
			const div = document.createElement('div')
			div.setAttribute('role', 'tabpanel')
			div.setAttribute('aria-labelledby', id[1])
			div.setAttribute('tabindex', '0')
			div.setAttribute('id', id[0])
			div.append(img)
			ids.push(id)
			if (i > 0) {
				div.hidden = true
			}
			return div
		}))

		// update images indicator
		_dlg_imgIndicatorRef?.replaceChildren(...[...imagesTemplate.children].map((v, i) => {
			const img = v.cloneNode(true)
			const button = document.createElement('button')
			const selectPanel = (nextIndex = i) => {
				if (selectedIndex === nextIndex) return

				const previousPanel = _dlg_imagesRef?.children.item(selectedIndex) as HTMLDivElement | null
				const previousTab = _dlg_imgIndicatorRef.children.item(selectedIndex)
				const targetPanel = _dlg_imagesRef?.children.item(nextIndex) as HTMLDivElement | null
				const targetTab = _dlg_imgIndicatorRef.children.item(nextIndex)

				if (previousPanel && targetPanel) {
					const fromLeft = nextIndex < selectedIndex
					previousPanel.animate({
						clipPath: [
							`xywh(0 0 100% 100% round ${pxToRem(8)}rem)`,
							`xywh(${fromLeft? '100%' : '0%'} 0 0% 100% round ${pxToRem(8)}rem)`
						],
						translate: ['0 0', fromLeft? `${pxToRem(32)}rem 0` : `${pxToRem(-32)}rem 0`]
					}, {duration: 250, easing: 'cubic-bezier(.15,0,0,1)'}).finished.then(() => {
						previousPanel.hidden = true
						targetPanel.hidden = false
						targetPanel.animate({
							clipPath: [
								`xywh(${fromLeft? '0%' : '100%'} 0 0% 100% round ${pxToRem(8)}rem)`,
								`xywh(0 0 100% 100% round ${pxToRem(8)}rem)`
							],
							translate: [fromLeft? `-${pxToRem(32)}rem 0` : `${pxToRem(32)}rem 0`, '0 0']
						}, {duration: 250, easing: 'cubic-bezier(.15,0,0,1)'})
					})
				}
				previousTab?.setAttribute('tabindex', '-1')
				previousTab?.setAttribute('aria-selected', 'false')
				targetTab?.setAttribute('tabindex', '0')
				targetTab?.setAttribute('aria-selected', 'true')
				if (targetTab instanceof HTMLElement) {
					targetTab?.focus()
				}

				selectedIndex = nextIndex
			}
			button.setAttribute('role', 'tab')
			button.setAttribute('id', ids[i][1])
			button.setAttribute('aria-selected', i === 0? 'true' : 'false')
			button.setAttribute('tabindex', i === 0? '0' : '-1')
			button.setAttribute('aria-controls', ids[i][0])
			button.append(img)
			button.addEventListener('click', () => selectPanel())
			button.addEventListener('keydown', ev => {
				const code = ev.code
				let nextIndex = Infinity
				switch (code) {
				case 'ArrowLeft':
					nextIndex = selectedIndex - 1
					if (nextIndex < 0) { nextIndex = ids.length - 1 }
					break
				case 'ArrowRight':
					nextIndex = selectedIndex + 1
					if (nextIndex > ids.length - 1) { nextIndex = 0 }
				}

				if (nextIndex === Infinity) return

				selectPanel(nextIndex)
			})
			return button
		}))

		_dlg_descRef?.replaceChildren(
			...[...descriptionTemplate.children].map(v => v.cloneNode(true))
		)
		_openDialog()
		_stopGlobalClick = true
	})
}

export default () => {
	_initEvents()
}