import { Ids } from "../shared/ids"

export namespace Refs {
	const fn_id = (id: string) => document.getElementById(id) as Element | undefined

	export const about_experience = fn_id(Ids.about_experience) as HTMLSpanElement

	export const contact_status = fn_id(Ids.contact_status) as HTMLUListElement
	export const contact_onOff = fn_id(Ids.contact_onOff) as HTMLSpanElement
	export const contact_time = fn_id(Ids.contact_time) as HTMLSpanElement
	export const contact_frequency = fn_id(Ids.contact_frequency) as HTMLSpanElement

	export const header_time = fn_id(Ids.header_time) as HTMLSpanElement
	export const header_scroll = fn_id(Ids.header_scroll) as HTMLSpanElement
	export const header_idle = fn_id(Ids.header_idle) as HTMLButtonElement

	export const projects_list = fn_id(Ids.projects_list) as HTMLUListElement

	export const projectDetail = fn_id(Ids.projectDetail) as HTMLDialogElement
	export const projectDetail_close = fn_id(Ids.projectDetail_close) as HTMLButtonElement
	export const projectDetail_title = fn_id(Ids.projectDetail_title) as HTMLHeadingElement
	export const projectDetail_content = fn_id(Ids.projectDetail_content) as HTMLDivElement
	export const projectDetail_images = fn_id(Ids.projectDetail_images) as HTMLUListElement
	export const projectDetail_urls = fn_id(Ids.projectDetail_urls) as HTMLUListElement
	export const projectDetail_technology = fn_id(Ids.projectDetail_technology) as HTMLUListElement
	export const projectDetail_prev = fn_id(Ids.projectDetail_prev) as HTMLButtonElement
	export const projectDetail_next = fn_id(Ids.projectDetail_next) as HTMLButtonElement

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
}