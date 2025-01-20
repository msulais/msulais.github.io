(() => {
'use strict'

const max_animation_type = 5
let animation_type = 5

/** @type Animation | undefined */
let animation1

/** @type Animation | undefined */
let animation2

/** @type Animation | undefined */
let animation3

/** @param {HTMLButtonElement} logo */
function animate_logo(logo) {

	/** @type KeyframeAnimationOptions */
	const animation_options = {
		duration: 1000,
		easing: 'cubic-bezier(.15, 0, 0, 1)',
	}
	const children = logo.children
	const block1 = children.item(0)
	const block2 = children.item(1)
	const block3 = children.item(2)

	if ((animation1 && animation1.playState != 'finished')
		|| (animation2 && animation2.playState != 'finished')
		|| (animation3 && animation3.playState != 'finished')
	) return

	let width1, width2, width3
	let left1, left2, left3
	let right1, right2, right3
	let opacity1, opacity2, opacity3
	let option1 = animation_options, option2 = animation_options, option3 = animation_options
	switch (animation_type) {
	case 1:
		width1  = width3 = ['20px', '0px', '20px']
		width2  = ['32px', '0px', '32px']
		left1   = ['0px', '20px', '0px']
		left2   = ['0px', '32px', '0px']
		option2 = {...animation_options, delay: 250}
		option3 = {...animation_options, delay: 500}
		break
	case 2:
		width1  = width3 = ['20px', '0px', '20px']
		width2  = ['32px', '0px', '32px']
		right3  = ['0px', '20px', '0px']
		option2 = {...animation_options, delay: 250}
		option3 = {...animation_options, delay: 500}
		break
	case 3:
		width1  = width3 = ['20px', '0px', '20px', '0px', '20px']
		width2  = ['32px', '0px', '32px', '0px', '32px']
		left1   = ['0px', '20px', '0px', '0px', '0px']
		left2   = ['0px', '32px', '0px', '0px', '0px']
		right3  = ['0px', '0px', '0px', '20px', '0px']
		option2 = {...animation_options, delay: 250}
		option3 = {...animation_options, delay: 500}
		break
	case 4:
		opacity1 = opacity2 = opacity3 = [1, 0, 1, 0, 1]
		option2  = {...animation_options, delay: 500}
		option3  = {...animation_options, delay: 1000}
		break
	case 5:
		width1  = width3 = ['20px', '32px',  '0px', '20px', '32px', '0px', '20px']
		left1   = right3 = [ '0px',  '0px', '32px', '12px',  '0px', '0px',  '0px']
		width2  = ['32px', '0px', '32px', '0px', '32px']
		left2   = ['0px', '32px', '0px', '0px', '0px']
		option2 = {...animation_options, delay: 500}
		break
	}

	if (width1 || left1 || right1 || opacity1) animation1 = block1.animate({
		width: width1, left: left1, right: right1, opacity: opacity1
	}, option1)

	if (width2 || left2 || right2 || opacity2) animation2 = block2.animate({
		width: width2, left: left2, right: right2, opacity: opacity2
	}, option2)

	if (width3 || left3 || right3 || opacity3) animation3 = block3.animate({
		width: width3, left: left3, right: right3, opacity: opacity3
	}, option3)

	const old_animation_type = animation_type
	let i = 0
	do {
		animation_type = Math.max(1, Math.min(
			max_animation_type,
			Math.round(Math.random() * max_animation_type)
		))
		++i

	// make sure it's different from before
	} while (old_animation_type == animation_type && i < 0xff)
}

function init_logos() {
	const logo = document.getElementById('logo')
	logo.onclick = () => animate_logo(logo)
}

init_logos()
})()