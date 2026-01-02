import { Ids } from "../../_scripts/shared/ids"

let _isSplashOpen = true

namespace _Refs {
	const fn_id = (id: string) => document.getElementById(id) as Element | undefined

	export const splash = fn_id(Ids.splash) as HTMLDialogElement
	export const checkbox = fn_id(Ids.splash_checkbox) as HTMLInputElement
	export const path1 = fn_id(Ids.splash_path1) as SVGPathElement
	export const path2 = fn_id(Ids.splash_path2) as SVGPathElement
	export const path3 = fn_id(Ids.splash_path3) as SVGPathElement
	export const waveCoordiate = fn_id(Ids.splash_waveCoordinate) as HTMLSpanElement
	export const time = fn_id(Ids.splash_time) as HTMLSpanElement
	export const date = fn_id(Ids.splash_date) as HTMLSpanElement
	export const progressValue = fn_id(Ids.splash_progressValue) as HTMLDivElement
	export const progressText = fn_id(Ids.splash_progressText) as HTMLSpanElement
	export const button = fn_id(Ids.splash_button) as HTMLButtonElement
	export const triangle = fn_id(Ids.splash_triangle) as HTMLSpanElement
}

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
		_Refs.path1.setAttribute('d', generateWavePath(x[0], y[0], s[0]))
		_Refs.path2.setAttribute('d', generateWavePath(x[1], y[1], s[1]))
		_Refs.path3.setAttribute('d', generateWavePath(x[2], y[2], s[2]))

		const fn_coordinate = (v: number[]) => (
			(1 << 24) + ((v[0] & 0xff) << 16) + ((v[1] & 0xff) << 8) + (v[2] & 0xff)
		).toString(16).substring(1).toUpperCase()
		_Refs.waveCoordiate.textContent = `X: ${fn_coordinate(x)} / Y: ${fn_coordinate(y)}`
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
		_Refs.date.textContent = date.toLocaleDateString('en', {
			timeZone: 'Asia/Jakarta',
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		})
		_Refs.time.textContent = date.toLocaleTimeString('en', {
			timeZone: 'Asia/Jakarta',
			minute: '2-digit',
			second: '2-digit',
			hour: '2-digit',
		})
	}
}

namespace _Progress {
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
		if (!value || value !== 'true') {
			return
		}

		_Refs.checkbox.checked = true
	}

	function events(): void {
		_Refs.button.onclick = () => {
			closeSplash()
		}

		_Refs.checkbox.onchange = () => {
			localStorage.setItem(key_autoClose, _Refs.checkbox.checked + '')
		}

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
			_Refs.progressValue.style.setProperty('--c-progress', visualProgress + '%')
			_Refs.progressValue.setAttribute('aria-valuenow', visualProgress + '')
			_Refs.progressValue.setAttribute('aria-valuetext', visualProgress + ' percent')
			_Refs.progressText.textContent = visualProgress + '%'
			if (visualProgress < 100) {
				return
			}

			_Refs.button.disabled = false
			_Refs.button.focus()
			_Refs.triangle.remove()
			if (!_Refs.checkbox.checked) {
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

	function closeSplash(): void {
		// TODO
	}
}

function _main(): void {
	_WavePath.init()
	_Datetime.init()
	_Progress.init()
}

_main()