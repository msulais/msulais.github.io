import { Refs } from "./refs"
import { PageTransition } from "./transition"

let _isSplashOpen = true

namespace _WavePath {
	const SVG_WIDTH = 1280
	const SVG_HEIGHT = 252
	const ONE_THIRD_OF_SVG_HEIGHT = SVG_HEIGHT / 3

	export function init(): void {
		idleAnimation()
		updateWavePath()
	}

	function generateWavePath(peakX: number, peakY: number, spread: number): string {
		const fn_ceil = (v: number) => Math.ceil(v)
		const startX = peakX - spread
		const endX = peakX + spread
		const floorY = SVG_HEIGHT
		const topY = SVG_HEIGHT - peakY
		const floorHandleWidth = spread * 0.54
		const peakHandleWidth = spread * 0.31
		const path = [
			`M0 ${floorY}`,
			`L${fn_ceil(startX)} ${floorY}`,
			`C${fn_ceil(startX + floorHandleWidth)} ${floorY} ${fn_ceil(peakX - peakHandleWidth)} ${fn_ceil(topY)} ${fn_ceil(peakX)} ${fn_ceil(topY)}`,
			`C${fn_ceil(peakX + peakHandleWidth)} ${fn_ceil(topY)} ${fn_ceil(endX - floorHandleWidth)} ${floorY} ${fn_ceil(endX)} ${floorY}`,
			`L${SVG_WIDTH} ${floorY}`
		].join('')
		return path
	}

	function updateWavePath(): void {
		const x = [
			Math.random() * SVG_WIDTH,
			Math.random() * SVG_WIDTH,
			Math.random() * SVG_WIDTH,
		]
		const strokeWidth = 4
		const minY = ONE_THIRD_OF_SVG_HEIGHT
		const maxY = SVG_HEIGHT - strokeWidth
		const rangeY = maxY - minY
		const y = [
			ONE_THIRD_OF_SVG_HEIGHT + (Math.random() * rangeY),
			ONE_THIRD_OF_SVG_HEIGHT + (Math.random() * rangeY),
			ONE_THIRD_OF_SVG_HEIGHT + (Math.random() * rangeY)
		]

		const minS = 100
		const maxS = 500
		const rangeS = maxS - minS
		const s = [
			minS + (Math.random() * rangeS),
			minS + (Math.random() * rangeS),
			minS + (Math.random() * rangeS),
		]
		Refs.splash_path1.setAttribute('d', generateWavePath(x[0], y[0], s[0]))
		Refs.splash_path2.setAttribute('d', generateWavePath(x[1], y[1], s[1]))
		Refs.splash_path3.setAttribute('d', generateWavePath(x[2], y[2], s[2]))

		const fn_coordinate = (v: number[]) => (
			(1 << 24) + ((v[0] & 0xff) << 16) + ((v[1] & 0xff) << 8) + (v[2] & 0xff)
		).toString(16).substring(1).toUpperCase()
		Refs.splash_waveCoordinate.textContent = `X: ${fn_coordinate(x)} / Y: ${fn_coordinate(y)}`
	}

	function idleAnimation(): void {
		setInterval(() => {
			if (!_isSplashOpen) {
				return
			}

			updateWavePath()
		}, 1000)
	}
}

namespace _Datetime {
	export function init(): void {
		updateDatetime()
		startInterval()
	}

	function startInterval(): void {
		setInterval(() => {
			if (!_isSplashOpen) {
				return
			}

			updateDatetime()
		}, 300)
	}

	function updateDatetime(): void {
		const date = new Date()
		Refs.splash_date.textContent = date.toLocaleDateString('en', {
			timeZone: 'Asia/Jakarta',
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		})
		Refs.splash_time.textContent = date.toLocaleTimeString('en', {
			timeZone: 'Asia/Jakarta',
			minute: '2-digit',
			second: '2-digit',
			hour: '2-digit',
		})
	}
}

export namespace SplashProgress {
	const key_autoClose = 'auto-close-splash'
	const delay = 500
	let progress = 0
	let visualProgress = 0
	let time_progress: ReturnType<typeof setInterval> | undefined

	export function init(): void {
		checkIsAutoClose()
		start()
		events()
	}

	function checkIsAutoClose(): void {
		const value = localStorage.getItem(key_autoClose)
		if (!value || value !== 'false') {
			return
		}

		Refs.splash_checkbox.checked = false
	}

	function events(): void {
		Refs.splash_button.onclick = () => {
			closeSplash()
		}

		Refs.splash_checkbox.onchange = () => {
			localStorage.setItem(key_autoClose, Refs.splash_checkbox.checked + '')
		}

		Refs.topInfo_idle.addEventListener('click', () => {
			openSplash()
		})

		window.addEventListener('load', () => {
			finish()
		})
	}

	function updateVisual(value: number): void {
		const counter = value - visualProgress
		if (counter <= 0) {
			return
		}

		const time = setInterval(() => {
			if (visualProgress >= value) {
				clearInterval(time)
				return
			}

			++visualProgress
			Refs.splash_progressValue.style.setProperty('--c-progress', visualProgress + '%')
			Refs.splash_progressValue.setAttribute('aria-valuenow', visualProgress + '')
			Refs.splash_progressValue.setAttribute('aria-valuetext', visualProgress + ' percent')
			Refs.splash_progressText.textContent = visualProgress + '%'
			if (visualProgress < 100) {
				return
			}

			Refs.splash_button.disabled = false
			Refs.splash_button.focus()
			Refs.splash_triangle.remove()
			if (!Refs.splash_checkbox.checked) {
				return
			}

			closeSplash()
		}, Math.max(0, delay / counter))
	}

	function start(): void {
		clearInterval(time_progress)
		time_progress = setInterval(() => {
			const remaining = 100 - progress
			let increment: number

			if (progress > 90) {
				increment = remaining * 0.05
			}
			else {
				increment = Math.max(0.1, Math.random() * (remaining / 10))
			}

			const nextProgress = progress + increment
			progress = nextProgress
			updateVisual(Math.floor(nextProgress))
		}, delay)
	}

	function finish(): void {
		clearInterval(time_progress)
		updateVisual(100)
	}

	export async function closeSplash(): Promise<void> {
		if (!_isSplashOpen) {
			return
		}

		_isSplashOpen = false
		await PageTransition.topToFull()
		Refs.splash.style.setProperty('display', 'none')
		PageTransition.fullToBottom()
	}

	export async function openSplash(): Promise<void> {
		if (_isSplashOpen) {
			return
		}

		_isSplashOpen = true
		await PageTransition.bottomToFull()
		Refs.splash.style.removeProperty('display')
		PageTransition.fullToTop()
		Refs.splash_button.focus()
	}
}

const _ = () => {
	_WavePath.init()
	_Datetime.init()
	SplashProgress.init()
}

export default _