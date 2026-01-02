export namespace Ids {
	let id = 0
	const fn_hex = (v: number) => v.toString(16).toUpperCase()
	const idPrefix = fn_hex(2026)
	const fn_id = () => idPrefix + fn_hex(++id)

	export const splash = fn_id()
	export const splash_button = fn_id()
	export const splash_checkbox = fn_id()
	export const splash_date = fn_id()
	export const splash_path1 = fn_id()
	export const splash_path2 = fn_id()
	export const splash_path3 = fn_id()
	export const splash_waveCoordinate = fn_id()
	export const splash_progressValue = fn_id()
	export const splash_progressText = fn_id()
	export const splash_time = fn_id()
	export const splash_triangle = fn_id()

	export const transition = fn_id()
}