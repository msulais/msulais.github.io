(() => {
'use strict'

/**
 * @param {Date} date1
 * @param {Date} date2
 */
function date_diff_in_days(date1, date2) {
	const MS_PER_DAY = 1000 * 60 * 60 * 24
	const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())
	const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate())

	return Math.floor((utc2 - utc1) / MS_PER_DAY)
}

function init_experience_year(){
	const start_date = new Date(2022, 7)
	const current_date = new Date()
	const diff_year = date_diff_in_days(start_date, current_date) / 365.25

	for (const span of document.querySelectorAll('.mp-about-year')) {
		span.textContent = Number.parseFloat(diff_year.toFixed(2)) + ''
	}
}

init_experience_year()
})()