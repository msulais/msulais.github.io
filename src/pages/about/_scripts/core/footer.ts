import * as SharedIds from '../shared/ids.enum.js'
import { elementById, setElementStyle } from "../utils/dom.js"

const SPRING_EASING = 'cubic-bezier(.25,0,0,1)'
const _ref_footer = elementById(SharedIds.Footer)

function _animateElement(ref: HTMLElement): void {
	const size = window.innerWidth * Math.random()
	const minDuration = 1000
	setElementStyle(ref, 'left', `calc(${Math.random() * 100}% - ${size / 2}px)`)
	setElementStyle(ref, 'width', `${size}px`)
	ref.animate({
		opacity: [0, 1, 1, 0],
		translate: ['0 0', `${Math.random() * 1 < 0.5? '-' : ''}100% 0`]
	}, {
		duration: minDuration + (Math.random() * (5000 - minDuration)),
		easing: SPRING_EASING
	}).finished.then(() => {
		_animateElement(ref)
	})
}

function _initMovingEffect(): void {
	for (let i = 0; i < 5; i++) {
		const ref = document.createElement('div')
		setElementStyle(ref, 'border', '4px solid')
		setElementStyle(ref, 'height', 'calc(100% - 16px)')
		setElementStyle(ref, 'border-radius', '8px')
		setElementStyle(ref, 'top', '8px')
		setElementStyle(ref, 'position', 'absolute')
		setElementStyle(ref, 'z-index', '-1')
		_ref_footer?.append(ref)
		setTimeout(() => {
			_animateElement(ref)
		}, Math.random() * 3000)
	}
}

function initFooter(): void {
	_initMovingEffect()
}

export default initFooter