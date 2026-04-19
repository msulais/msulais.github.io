import * as SharedIds from '../shared/ids.enum.js'
import * as SharedClasses from '../shared/classes.enum.js'
import { allElementByClass, elementById, setElementStyle } from "../utils/dom.js"

const SPRING_EASING = 'cubic-bezier(.25,0,0,1)'
const _ref_body = elementById<HTMLDivElement>(SharedIds.Body)
const _ref_splash = elementById<HTMLDivElement>(SharedIds.Splash)
const _ref_splashText = elementById<HTMLElement>(SharedIds.SplashText)
const _ref_heroLetterU = elementById(SharedIds.HeroLetterU) as unknown as SVGPathElement
const _refs_decoration = allElementByClass<HTMLDivElement>('.' + SharedClasses.SplashDecoration)
const _progressDelay = 500
let _isLoaded = false
let _progress = 0
let _visualProgress = 0
let _time_progress: ReturnType<typeof setInterval> | undefined

function _animateLetterU(): void {
	const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate")
	animate.setAttribute("attributeName", "d")
	animate.setAttribute("dur", "1s")
	animate.setAttribute("calcMode", "spline")
	animate.setAttribute("keyTimes", "0; 1")
	animate.setAttribute("keySplines", "0.25, 0 0 1")
	const shape1 = "M 94.2688 126 L 94.3351 177.741 V 180.812C94.3351 186.878 95.1313 191.845 96.7236 195.712C98.3917 199.503 100.818 202.308 104.003 204.128 C 107.187 205.948 111.054 206.858 115.604 206.858 C 119.926 206.858 123.679 205.758 126.864 203.559 C 128.944 202.074 130.733 200.184 132.23  197.889 L 132.892 205.493 H 146.995 L 146.929 148.747 H 131.916L131.982 178.424 C 131.982 183.125 130.958 186.727 128.911 189.229 C 126.864 191.655 123.869 192.83 119.926 192.755 C 117.879 192.755 116.021 192.3 114.353 191.39 C 112.76 190.404 111.509 188.85 110.599 186.727 C 109.765 184.528 109.348 181.533 109.348 177.741 L 109.282 126 H 94.2688Z"
	const shape2 = "M 94.2688 0   L 94.3352 177.741 V 180.812C94.3352 186.878 95.1314 191.845 96.7237 195.712C98.3918 199.503 100.818 202.308 104.003 204.128 C 107.187 205.948 111.054 206.858 115.604 206.858 C 119.926 206.858 123.679 205.758 126.864 203.559 C 128.944 202.074 130.733 200.184 132.231 197.889 L 132.892 205.493 H 146.995 L 146.929 22.7473 H 131.916L131.982 178.424 C 131.982 183.125 130.958 186.726 128.911 189.229 C 126.864 191.655 123.869 192.83 119.926 192.755 C 117.879 192.755 116.021 192.3 114.353 191.39 C 112.76 190.404 111.509 188.85 110.599 186.726 C 109.765 184.528 109.348 181.533 109.348 177.741 L 109.282 0   H 94.2688Z"
	animate.setAttribute("values", `${shape1}; ${shape2}`)
	_ref_heroLetterU.appendChild(animate)

	animate.beginElement()
	animate.addEventListener('endEvent', () => {
		_ref_heroLetterU.setAttribute('d', shape2)
	}, false)
}

function _closeSplash(): void {
	_ref_splash?.animate({
		opacity: [1, 0],
	}, {duration: 500, easing: SPRING_EASING}).finished.then(() => {
		_ref_splash.remove()
		setElementStyle(_ref_body!, 'display', 'block')
		_ref_body?.animate({
			opacity: [0, 1]
		}, {duration: 500, easing: SPRING_EASING}).finished.then(() => {
			_animateLetterU()
		})
	})
}

function _updateProgressVisual(value: number): void {
	const counter = value - _visualProgress
	if (counter <= 0) {
		return
	}

	const time = setInterval(() => {
		if (_visualProgress >= value) {
			clearInterval(time)
			return
		}

		++_visualProgress
		if (_visualProgress > 100) {
			_visualProgress = 100
		}

		if (_ref_splashText) {
			_ref_splashText.textContent = (_visualProgress + '%').padStart(4, '0')
		}

		if (_visualProgress < 100) {
			return
		}

		_closeSplash()
	}, Math.max(0, _progressDelay / counter))
}

function _initDecoration(): void {
	for (let i = 0; i < _refs_decoration.length; i++) {
		const ref = _refs_decoration[i]
		setElementStyle(ref, 'border', '4px solid')
		setElementStyle(ref, 'border-radius', '50%')
		setElementStyle(ref, 'position', 'fixed')
		setElementStyle(ref, 'z-index', '-1')
		if (i === 0) {
			setElementStyle(ref, 'border-color', 'rgb(var(--g-color-accent))')
		}

		const fn_animate = () => {
			const size = Math.max(window.innerHeight, window.innerWidth) * Math.random()
			const minDuration = 1000
			setElementStyle(ref, 'left', `calc(${Math.random() * 100}% - ${size / 2}px)`)
			setElementStyle(ref, 'top', `calc(${Math.random() * 100}% - ${size / 2}px)`)
			setElementStyle(ref, 'width', `${size}px`)
			setElementStyle(ref, 'height', `${size}px`)
			ref.animate({
				scale: [0, 1],
				opacity: [0, 1, 1, 0]
			}, {
				duration: minDuration + (Math.random() * (5000 - minDuration)),
				easing: SPRING_EASING
			}).finished.then(() => {
				if (_isLoaded) {
					return
				}

				fn_animate()
			})
		}

		fn_animate()
	}
}

function _initLoaderProgress(): void {
	clearInterval(_time_progress)
	_time_progress = setInterval(() => {
		const remaining = 100 - _progress
		let increment: number

		if (_progress > 90) {
			increment = remaining * 0.05
		}
		else {
			increment = Math.max(0.1, Math.random() * (remaining / 10))
		}

		const nextProgress = _progress + increment
		_progress = nextProgress
		_updateProgressVisual(Math.floor(nextProgress))
	}, _progressDelay)
}

function _initEvents(): void {
	window.addEventListener('load', () => {
		clearInterval(_time_progress)
		_isLoaded = true
		_updateProgressVisual(100)
	})
}

function initSplash(): void {
	_initDecoration()
	_initLoaderProgress()
	_initEvents()
}

export default initSplash