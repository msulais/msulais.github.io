import { AnimationEasing } from "../shared/enums"

const _imgBtnRef = document.querySelector<HTMLButtonElement>('header>button')!
const _imageRefs = _imgBtnRef.querySelectorAll<HTMLImageElement>('header>button>img')
let _selectedImageIdx = 0

function _initEvents() {
	_imgBtnRef.addEventListener('click', () => {
		let nextIndex = _selectedImageIdx + 1
		if (nextIndex > _imageRefs.length-1) {nextIndex = 0}

		const prevImgRef = _imageRefs.item(_selectedImageIdx)
		const nextImgRef = _imageRefs.item(nextIndex)
		prevImgRef.hidden = true
		nextImgRef.hidden = false
		nextImgRef.animate({
			scale: [0, 1],
			opacity: [0, 1]
		}, {duration: 250, easing: AnimationEasing.spring})
		_selectedImageIdx = nextIndex
	})
}

export default () => {
	_initEvents()
}