import { Ids } from "../shared/ids";

export namespace PageTransition {
	const ref_transition = document.getElementById(Ids.transition) as HTMLDivElement
	const clip_top = 'xywh(0% 0% 100% 0%)'
	const clip_full = 'xywh(0% 0% 100% 100%)'
	const clip_bottom = 'xywh(0% 100% 100% 0%)'
	const clip_left = 'xywh(0% 0% 0% 100%)'
	const clip_right = 'xywh(100% 0% 0% 100%)'
	const options = {
		duration: 500,
		easing: 'cubic-bezier(.25,0,0,1)'
	}
	const fn_property = (clipPath?: string) => (clipPath
		? ref_transition.style.setProperty('clip-path', clipPath)
		: ref_transition.style.removeProperty('clip-path')
	)
	const fn_animate = (...clipPath: string[]) => (ref_transition
		.animate({clipPath}, options)
		.finished
	)

	export async function topToFull(): Promise<Animation> {
		return fn_property(), fn_animate(clip_top, clip_full)
	}

	export async function bottomToFull(): Promise<Animation> {
		return fn_property(), fn_animate(clip_bottom, clip_full)
	}

	export async function leftToFull(): Promise<Animation> {
		return fn_property(), fn_animate(clip_left, clip_full)
	}

	export async function rightToFull(): Promise<Animation> {
		return fn_property(), fn_animate(clip_right, clip_full)
	}

	export async function fullToBottom(): Promise<Animation> {
		return fn_property(clip_bottom), fn_animate(clip_full, clip_bottom)
	}

	export async function fullToTop(): Promise<Animation> {
		return fn_property(clip_top), fn_animate(clip_full, clip_top)
	}

	export async function fullToLeft(): Promise<Animation> {
		return fn_property(clip_left), fn_animate(clip_full, clip_left)
	}

	export async function fullToRight(): Promise<Animation> {
		return fn_property(clip_right), fn_animate(clip_full, clip_right)
	}
}