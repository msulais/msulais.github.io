import * as SharedIds from '../shared/ids.enum.js'
import { elementById, setElementStyle } from "../utils/dom.js"

const SPRING_EASING = 'cubic-bezier(.25,0,0,1)'
const _ref_footerDecoration = elementById(SharedIds.FooterDecoration)

function _animateElement(ref: HTMLElement): void {
	const size = Math.min(360 * 2, Math.max(window.innerHeight, window.innerWidth)) * Math.random()
	const minDuration = 1000
	setElementStyle(ref, 'left', `calc(${Math.random() * 100}% - ${size / 2}px)`)
	setElementStyle(ref, 'bottom', `calc(0px - ${size / 2}px)`)
	setElementStyle(ref, 'width', `${size}px`)
	setElementStyle(ref, 'height', `${size}px`)
	ref.animate({
		scale: [0, 1],
		opacity: [0, 1, 1, 0]
	}, {
		duration: minDuration + (Math.random() * (5000 - minDuration)),
		easing: SPRING_EASING
	}).finished.then(() => {
		_animateElement(ref)
	})
}

function _initRippleEffect(): void {
	for (let i = 0; i < 5; i++) {
		const ref = document.createElement('div')
		setElementStyle(ref, 'border', '4px solid')
		setElementStyle(ref, 'border-radius', '50%')
		setElementStyle(ref, 'position', 'absolute')
		setElementStyle(ref, 'z-index', '-1')
		_ref_footerDecoration?.append(ref)
		setTimeout(() => {
			_animateElement(ref)
		}, Math.random() * 3000)
	}
}

function initFooter(): void {
	_initRippleEffect()
}

export default initFooter