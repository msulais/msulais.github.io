(() => {
/**
 * @param {Date} date1
 * @param {Date} date2
 */
function dateDiffInDays(date1, date2) {
	const MS_PER_DAY = 1000 * 60 * 60 * 24
	const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())
	const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate())

	return Math.floor((utc2 - utc1) / MS_PER_DAY)
}

function initExperienceYear(){
	const startDate = new Date(2022, 7)
	const currentDate = new Date()
	const diffYear = dateDiffInDays(startDate, currentDate) / 365.25
	const year = Number.parseFloat(diffYear.toFixed(2))
	const d = document.getElementById('m-about-year-id')
	if (!d) return

	d.textContent = year + ''
}

initExperienceYear()
})()