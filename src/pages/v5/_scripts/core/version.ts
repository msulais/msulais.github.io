import { Refs } from "./refs"
import { PageTransition } from "./transition"

function _initEvents(): void {
	Refs.header_version.addEventListener('click', async () => {
		await PageTransition.rightToFull()
		Refs.version.open = true
		document.body.style.setProperty('overflow', 'hidden')
		await PageTransition.fullToLeft()
	})

	Refs.version_close.addEventListener('click', async () => {
		await PageTransition.leftToFull()
		Refs.version.open = false
		document.body.style.removeProperty('overflow')
		await PageTransition.fullToRight()
	})
}

const _ = () => {
	_initEvents()
}

export default _