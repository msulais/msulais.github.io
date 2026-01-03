import { Ids } from "../shared/ids"

export namespace Refs {
	const fn_id = (id: string) => document.getElementById(id) as Element | undefined

	export const splash = fn_id(Ids.splash) as HTMLDialogElement
	export const splash_checkbox = fn_id(Ids.splash_checkbox) as HTMLInputElement
	export const splash_path1 = fn_id(Ids.splash_path1) as SVGPathElement
	export const splash_path2 = fn_id(Ids.splash_path2) as SVGPathElement
	export const splash_path3 = fn_id(Ids.splash_path3) as SVGPathElement
	export const splash_waveCoordinate = fn_id(Ids.splash_waveCoordinate) as HTMLSpanElement
	export const splash_time = fn_id(Ids.splash_time) as HTMLSpanElement
	export const splash_date = fn_id(Ids.splash_date) as HTMLSpanElement
	export const splash_progressValue = fn_id(Ids.splash_progressValue) as HTMLDivElement
	export const splash_progressText = fn_id(Ids.splash_progressText) as HTMLSpanElement
	export const splash_button = fn_id(Ids.splash_button) as HTMLButtonElement
	export const splash_triangle = fn_id(Ids.splash_triangle) as HTMLSpanElement

	export const topInfo_stopwatch = fn_id(Ids.topInfo_stopwatch) as HTMLSpanElement
	export const topInfo_scroll = fn_id(Ids.topInfo_scroll) as HTMLSpanElement
	export const topInfo_idle = fn_id(Ids.topInfo_idle) as HTMLButtonElement
}