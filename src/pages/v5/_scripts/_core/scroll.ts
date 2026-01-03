import { Refs } from "./refs"

function getDocumentScrollHeight(): number {
	return Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight,
		document.body.clientHeight,
		document.documentElement.clientHeight
	)
}

function _updatePercentage(): void {
	const percentage = Math.min(100, Math.max(0, Math.round(
		window.scrollY
		/ Math.max(1, getDocumentScrollHeight() - window.innerHeight)
		* 100
	)))
	let text = percentage.toString().padStart(3, '0') + '%'
	if (getDocumentScrollHeight() <= window.innerHeight) {
		text = '100%'
	}

	Refs.topInfo_scroll.textContent = text
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