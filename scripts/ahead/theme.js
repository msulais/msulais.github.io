(() => {
function init_theme(){
	const theme = localStorage.getItem('theme')
	if (!theme || !['system', 'light', 'dark'].includes(theme)) return

	document.documentElement.setAttribute('data-theme', theme)
}

init_theme()
})()