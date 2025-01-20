(() => {
'use strict'

function update_year(){
	const f_year = document.getElementById('f-year')
	f_year.innerText = new Date().getFullYear()
}

update_year()
})()