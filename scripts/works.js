(() => {
'use strict';
const dialogTransitionOptions = {
	duration: 300,
	easing: 'cubic-bezier(.15,0,0,1)',
}
/** @type HTMLDialogElement */
const dialog = document.getElementById('m-works-dialog-id')
const dialogImages = dialog.querySelector('.m-works-dialog-images')
const dialogImageIndicator = dialog.querySelector('.m-works-dialog-images-indicator')
const dialogTitle = dialog.querySelector('h2')
const dialogTags = dialog.querySelector('.m-works-dialog-tags')
const dialogLink = dialog.querySelector('a')
const dialogDescription = dialog.querySelector('.m-works-dialog-description')
let stopGlobalClick = false

function openDialog(){
	dialog?.showModal()
	dialog?.firstElementChild?.scroll({top: 0, behavior: 'instant'})
	dialog?.animate({
		translate: ['-50% 50dvh', '-50% -50%'],
	}, dialogTransitionOptions)
}

function closeDialog(){
	dialog?.animate({
		translate: ['-50% -50%', '-50% 50dvh'],
	}, dialogTransitionOptions).finished.then(() => dialog?.close())
}

function initButtonClick() {
	const worksPanel = document.getElementById('works')
	worksPanel?.addEventListener('click', () => {

		/** @type HTMLButtonElement */
		const button = document.activeElement
		if (!button || button.tagName !== 'BUTTON' || !worksPanel.contains(button)) return

		const dataset = button.dataset
		const tags = dataset.tags
		const url = dataset.url
		const h3 = button.querySelector('h3')
		const descriptionTemplate = button.querySelector('div[data-description]')
		const imagesTemplate = button.querySelector('div[data-images]')
		if (!tags || !url || !imagesTemplate || !descriptionTemplate || !h3) return

		dialogTitle.textContent = h3.textContent
		dialogLink.href = url
		dialogLink.textContent = url
		dialogTags.replaceChildren(...tags.split(',').map(v => {
			const li = document.createElement('li')
			li.textContent = v.trim()
			return li
		}))

		/** @type string[][] */
		const ids = []
		let selectedIndex = 0
		dialogImages.replaceChildren(...[...imagesTemplate.children].map((v, i) => {
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
		dialogImageIndicator.replaceChildren(...[...imagesTemplate.children].map((v, i) => {
			const img = v.cloneNode(true)
			const button = document.createElement('button')
			const selectPanel = (nextIndex = i) => {
				if (selectedIndex === nextIndex) return

				/** @type HTMLDivElement | null */
				const previousPanel = dialogImages.children.item(selectedIndex)
				const previousTab = dialogImageIndicator.children.item(selectedIndex)

				/** @type HTMLDivElement | null */
				const targetPanel = dialogImages.children.item(nextIndex)
				const targetTab = dialogImageIndicator.children.item(nextIndex)

				if (previousPanel && targetPanel) {
					const fromLeft = nextIndex < selectedIndex
					previousPanel.animate(
						{
							opacity: [1, 0],
							translate: ['0 0', fromLeft? '32px 0' : '-32px 0']
						},
						{duration: 150, easing: 'cubic-bezier(.15,0,0,1)'}
					).finished.then(() => {
						previousPanel.hidden = true
						targetPanel.hidden = false
						targetPanel.animate({
							opacity: [0, 1],
							translate: [fromLeft? '-32px 0' : '32px 0', '0 0']
						}, {duration: 150, easing: 'cubic-bezier(.15,0,0,1)'})
					})
				}
				previousTab?.setAttribute('tabindex', '-1')
				previousTab?.setAttribute('aria-selected', 'false')
				targetTab?.setAttribute('tabindex', '0')
				targetTab?.setAttribute('aria-selected', 'true')
				targetTab?.focus()
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
					if (nextIndex < 0) {
						nextIndex = ids.length - 1
					}
					break
				case 'ArrowRight':
					nextIndex = selectedIndex + 1
					if (nextIndex > ids.length - 1) {
						nextIndex = 0
					}
				}

				if (nextIndex === Infinity) return

				selectPanel(nextIndex)
			})
			return button
		}))

		dialogDescription.replaceChildren(...[...descriptionTemplate.children].map(v => v.cloneNode(true)))
		openDialog()
		stopGlobalClick = true
	})
}

function initDialogClickOutside() {
	document.addEventListener('click', ev => {
		if (stopGlobalClick || !dialog?.open) {
			stopGlobalClick = false
			return
		}

		const clickInRange = ev.target !== dialog
		if (clickInRange) return

		closeDialog()
	})
}

function initDialogCloseButton() {
	const button = document.getElementById('m-works-dialog-close-id')
	button?.addEventListener('click', () => closeDialog())
}

initButtonClick()
initDialogClickOutside()
initDialogCloseButton()
})()