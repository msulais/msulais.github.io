import fallbackImg from '../../_assets/images/image-not-available.png'

const _refs_images = document.querySelectorAll('img')

function _initEvents(): void {
	for (const ref of _refs_images) {
		ref.onerror = () => {
			ref.src = fallbackImg.src
		}
	}
}

const _ = () => {
	_initEvents()
}

export default _