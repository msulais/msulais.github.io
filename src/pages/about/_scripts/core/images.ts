import * as SharedIds from '../shared/ids.enum'
import { elementById, setElementStyle } from '../utils/dom'

const SPRING_EASING = 'cubic-bezier(.25,0,0,1)'
const _ref_project = elementById(SharedIds.ProjectSection)
const _ref_dialog = document.createElement('dialog')
let _selected_ref: HTMLImageElement | null = null

function _insertDialog(): void {
	setElementStyle(_ref_dialog, 'border', 'none')
	setElementStyle(_ref_dialog, 'outline', 'none')
	setElementStyle(_ref_dialog, 'margin', 'auto')
	setElementStyle(_ref_dialog, 'cursor', 'zoom-out')
	document.body.append(_ref_dialog)
}

function _initEvents(): void {
	_ref_dialog.addEventListener('close', () => {
		_selected_ref?.remove()
		_selected_ref = null
		document.body.style.removeProperty('overflow')
	})

	_ref_dialog.addEventListener('click', () => {
		_selected_ref?.remove()
		_selected_ref = null
		_ref_dialog.close()
	})

	_ref_project?.addEventListener('click', (ev) => {
		if (_selected_ref) {
			_selected_ref.remove()
			_selected_ref = null
			_ref_dialog.close()
		}
		else {
			const target = ev.target as HTMLImageElement
			if (!(ev.target instanceof HTMLImageElement)) {
				return
			}

			_selected_ref = target.cloneNode(true) as HTMLImageElement
			_selected_ref.loading = 'eager'
			_selected_ref.fetchPriority = 'high'
			setElementStyle(_selected_ref, 'width', '100%')
			setElementStyle(_selected_ref, 'object-fit', 'contain')
			_ref_dialog.replaceChildren(_selected_ref)
			_ref_dialog.showModal()
			setElementStyle(document.body, 'overflow', 'clip')
			_ref_dialog.animate({
				scale: [0.85, 1],
				opacity: [0, 1]
			}, {duration: 250, easing: SPRING_EASING})
		}
	})
}

function initImages(): void {
	_initEvents()
	_insertDialog()
}

export default initImages