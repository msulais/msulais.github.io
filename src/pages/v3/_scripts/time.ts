import { C_About } from "../../../constants/about"

let hour = 0
let minute = 0
let second = 0
let interval_id: ReturnType<typeof setInterval> | undefined

function update_time(element: HTMLTimeElement) {
	element.innerText = [
		(hour > 12? hour - 12 : hour).toString().padStart(2, '0'),
		minute.toString().padStart(2, '0'),
		second.toString().padStart(2, '0')
	].join(':') + (hour > 12? ' PM ' : ' AM ') + ` (${C_About.TimezoneText})`
	element.dateTime = [hour, minute, second].map(v => v.toString().padStart(2, '0')).join(':')
}

function sync_time(element: HTMLTimeElement) {
	if (interval_id !== null) clearInterval(interval_id)

	interval_id = setInterval(() => {
		second += 1
		if (second >= 60) {
			second = 0
			minute += 1
		}
		if (minute >= 60) {
			minute = 0
			hour += 1
		}
		if (hour >= 24) {
			hour = 0
		}
		update_time(element)
	}, 1000)
}

function reset_time() {
	const this_date = new Date()
	hour = this_date.getUTCHours() + C_About.TimezoneValue
	minute = this_date.getUTCMinutes()
	second = this_date.getUTCSeconds()
}

function init_time(){
	const time_element = document.getElementById('f-time') as HTMLTimeElement
	reset_time()
	update_time(time_element)
	sync_time(time_element)

	// handle inactive tab
	document.addEventListener('visibilitychange', () => {
		if (document.hidden) {
			if (interval_id !== null) clearInterval(interval_id)

			return
		}

		reset_time()
		update_time(time_element)
		sync_time(time_element)
	})
}

function update_copyright_year(){
	const f_year = document.getElementById('f-year') as HTMLSpanElement
	f_year.innerText = new Date().getFullYear() + ''
}

const _ = () => {
	init_time()
	update_copyright_year()
}

export default _