(() => {
'use strict'
let hour = 0
let minute = 0
let second = 0
let timezone = +7
let interval_id = null

/** @param {HTMLTimeElement} element */
function update_time(element) {
	element.innerText = [
		(hour > 12? hour - 12 : hour).toString().padStart(2, '0'),
		minute.toString().padStart(2, '0'),
		second.toString().padStart(2, '0')
	].join(':') + (hour > 12? ' PM ' : ' AM ') + ' (WIB)'
	element.dateTime = [hour, minute, second].map(v => v.toString().padStart(2, '0')).join(':')
}

/** @param {HTMLTimeElement} element */
function sync_time(element) {
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
	hour = this_date.getUTCHours() + timezone
	minute = this_date.getUTCMinutes()
	second = this_date.getUTCSeconds()
}

function init_time(){
	/** @type HTMLTimeElement */
	const time_element = document.getElementById('f-time')
	reset_time()
	update_time(time_element)
	sync_time(time_element)

	// handle inactive tab
	document.addEventListener('visibilitychange', ev => {
		if (document.hidden) {
			if (interval_id !== null) clearInterval(interval_id)

			return
		}

		reset_time()
		update_time(time_element)
		sync_time(time_element)
	})
}

init_time()
})()