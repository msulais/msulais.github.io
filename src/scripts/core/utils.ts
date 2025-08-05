import { FancyMode, RootAttributes } from "../shared/enums"

let _time: ReturnType<typeof setTimeout> | null = null
let _isFancy = false
let _baseFontSize = 16
let _timeBaseFontSizeId: ReturnType<typeof setTimeout> | null = null

export function isFancyMode(): boolean {
	if (_time !== null) {
		return _isFancy
	}

	_time = setTimeout(() => _time = null, 1000)
	_isFancy = document.documentElement.getAttribute(RootAttributes.fancyMode) === FancyMode.on
	return _isFancy
}

export function getBaseFontSize(): number {
	if (_timeBaseFontSizeId !== null) {
		return _baseFontSize
	}

	const root = document.documentElement
	const fontSize = getComputedStyle(root).fontSize
	const parsed = Number.parseFloat(fontSize)
	_baseFontSize = Number.isNaN(parsed) || !Number.isFinite(parsed)? _baseFontSize : parsed
	_timeBaseFontSizeId = setTimeout(() => _timeBaseFontSizeId = null, 1000)
	return _baseFontSize
}

export function remToPx(rem: number): number {
	return rem * getBaseFontSize()
}

export function pxToRem(px: number) {
	return px / getBaseFontSize()
}