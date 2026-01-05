import { C_About } from "../../../../constants/about"
import { Refs } from "./refs"

function _startInterval(): void {
	setInterval(() => {
		_updateDatetime()
	}, 300)
	setInterval(() => {
		_updateFrequency()
	}, 1000)
}

function _updateFrequency(): void {
	const value = Math.round(Math.random() * 0xff)
	Refs.contact_frequency.textContent = value + 'Hz'
	Refs.contact_status.style.setProperty('--frequency', Math.round(value / 0xff * 100) + '%')
}

function _updateDatetime(): void {
	const date = new Date()
	const utcHours = date.getUTCHours()
	let localHours = utcHours + C_About.timezoneValue
	while (localHours > 24) {
		localHours = localHours - 24
	}

	Refs.splash_date.textContent = date.toLocaleDateString('en', {
		timeZone: C_About.timezonePlace,
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})
	Refs.splash_time.textContent = date.toLocaleTimeString('en', {
		timeZone: C_About.timezonePlace,
		minute: '2-digit',
		second: '2-digit',
		hour: '2-digit',
		hour12: false
	})
	Refs.contact_onOff.textContent = localHours >= 22 || localHours <= 6? 'OFFLINE' : 'ONLINE'
	Refs.contact_time.textContent = date.toLocaleTimeString('en', {
		timeZone: C_About.timezonePlace,
		minute: '2-digit',
		hour: '2-digit',
	})
}

const _ = () => {
	_updateDatetime()
	_startInterval()
}

export default _