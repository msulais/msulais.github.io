import { Refs } from "./refs"

function _startInterval(): void {
	setInterval(() => {
		_updateDatetime()
	}, 300)
}

function _updateDatetime(): void {
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

const _ = () => {
	_updateDatetime()
	_startInterval()
}

export default _