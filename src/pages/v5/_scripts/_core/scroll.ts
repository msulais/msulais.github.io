import { Refs } from "./refs"

const FULL_DOCUMENT_SCROLL_HEIGHT = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
)

function _updatePercentage(): void {
	const percentage = Math.min(100, Math.max(0, Math.round(
		window.scrollY
		/ Math.max(1, FULL_DOCUMENT_SCROLL_HEIGHT - window.innerHeight)
		* 100
	)))
	Refs.topInfo_scroll.textContent = percentage.toString().padStart(3, '0') + '%'
}

function _initEvents() {
	document.addEventListener('scroll', () => {
		_updatePercentage()
	})

	window.addEventListener('resize', () => {
		_updatePercentage()
	})
}

const _ = () => {
	_updatePercentage()
	_initEvents()
}

export default _