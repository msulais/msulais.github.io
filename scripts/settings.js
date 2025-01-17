(() => {
'use strict'

const root = document.documentElement
const root_attr = {
	theme       : 'data-theme',
	animation   : 'data-animation',
	icon_theme  : 'data-icon-theme',
	color_accent: 'data-color-accent',
	language    : 'lang',
	corner_style: 'data-corner'
}
const local_storage_keys = {
	theme       : 'settings:theme',
	animation   : 'settings:animation',
	icon_theme  : 'settings:icon-theme',
	color_accent: 'settings:color-accent',
	language    : 'settings:language',
	corner_style: 'settings:corner-style'
}
const data_language = ['id', 'en']
const data_theme = ['system', 'light', 'dark']
const data_color_accent = [
	'pink', 'red', 'dark-orange', 'orange',
	'yellow', 'green', 'teal', 'blue', 'indigo',
	'purple', 'brown'
]
const data_corner_style = ['sharp', 'semi-round', 'round', 'full-round']
const data_icon_theme = ['colorful', 'monochrome']
const data_animation = ['on', 'off']
const settings_dialog = document.getElementById('g-modal-settings-id')
const settings_main_section        = settings_dialog.querySelector('[data-settings-main]')
const settings_theme_section       = settings_dialog.querySelector('[data-settings-theme]')
const settings_icontheme_section   = settings_dialog.querySelector('[data-settings-icon-theme]')
const settings_language_section    = settings_dialog.querySelector('[data-settings-language]')
const settings_animation_section   = settings_dialog.querySelector('[data-settings-animation]')
const settings_coloraccent_section = settings_dialog.querySelector('[data-settings-color-accent]')
const settings_cornerstyle_section = settings_dialog.querySelector('[data-settings-corner-style]')
let selected_settings_section = settings_main_section

function enable_animation() {
	return root.dataset.animation == 'on'
}

/**
 * @param {string} en
 * @param {string} id
 */
function text_language(en, id) {
	return [`<span lang="en">${en}</span>`, `<span lang="id">${id}</span>`].join('')
}

/**
 * @param {string} value
 * @param {string[]} valid_values
 * @param {HTMLElement} selected_element
 * @param {HTMLElement} target_element
 * @param {string} root_attr
 * @param {string} storage_key
 */
function set_setting_button(
	value,
	valid_values,
	selected_element,
	target_element,
	root_attr,
	storage_key
) {
	if (!target_element
		|| !selected_element
		|| target_element === selected_element
		|| !valid_values.includes(value)) return false

	selected_element.removeAttribute('data-c-selected')
	selected_element.classList.remove('c-tonal-btn')
	target_element.setAttribute('data-c-selected', '')
	target_element.classList.add('c-tonal-btn')
	root.setAttribute(root_attr, value)
	localStorage.setItem(storage_key, value)
	return true
}

function change_icon_theme(theme, target) {
	if (!set_setting_button(
		theme,
		data_icon_theme,
		settings_dialog.querySelector('[data-settings-icon-theme]>button[data-c-selected]'),
		target ?? settings_dialog.querySelector(`[data-settings-icon-theme]>button[data-icon-theme="${CSS.escape(theme)}"]`),
		root_attr.icon_theme,
		local_storage_keys.icon_theme
	)) return

	const kbd = settings_dialog.querySelector('[data-settings-main]>[data-target=icon-theme]>kbd')
	let description = ''
	switch (theme) {
	case 'colorful': description = text_language('Colorful', 'Berwarna'); break
	case 'monochrome': description = text_language('Monochrome', 'Monokrom'); break
	}
	if (kbd) kbd.innerHTML = description
}

function change_theme(theme, target) {
	if (!set_setting_button(
		theme,
		data_theme,
		settings_dialog.querySelector('[data-settings-theme]>button[data-c-selected]'),
		target ?? settings_dialog.querySelector(`[data-settings-theme]>button[data-theme="${CSS.escape(theme)}"]`),
		root_attr.theme,
		local_storage_keys.theme
	)) return

	const kbd = settings_dialog.querySelector('[data-settings-main]>[data-target=theme]>kbd')
	let description = ''
	switch (theme) {
	case 'system': description = text_language('System theme', 'Tema sistem'); break
	case 'light': description = text_language('Light', 'terang'); break
	case 'dark': description = text_language('Dark', 'Gelap'); break
	}
	if (kbd) kbd.innerHTML = description
}

function change_language(language, target) {
	if (!set_setting_button(
		language,
		data_language,
		settings_dialog.querySelector('[data-settings-language]>button[data-c-selected]'),
		target ?? settings_dialog.querySelector(`[data-settings-language]>button[data-language="${CSS.escape(language)}"]`),
		root_attr.language,
		local_storage_keys.language
	)) return

	const kbd = settings_dialog.querySelector('[data-settings-main]>[data-target=language]>kbd')
	let description = ''
	switch (language) {
	case 'id': description = text_language('Indonesian', 'Indonesia'); break
	case 'en': description = text_language('English', 'Inggris'); break
	}
	if (kbd) kbd.innerHTML = description
}

function change_animation(animation, target) {
	if (!set_setting_button(
		animation,
		data_animation,
		settings_dialog.querySelector('[data-settings-animation]>button[data-c-selected]'),
		target ?? settings_dialog.querySelector(`[data-settings-animation]>button[data-animation="${CSS.escape(animation)}"]`),
		root_attr.animation,
		local_storage_keys.animation
	)) return

	const kbd = settings_dialog.querySelector('[data-settings-main]>[data-target=animation]>kbd')
	let description = ''
	switch (animation) {
	case 'on': description = text_language('On', 'Hidup'); break
	case 'off': description = text_language('Off', 'Mati'); break
	}
	if (kbd) kbd.innerHTML = description
}

function change_color_accent(color, target) {
	if (!set_setting_button(
		color,
		data_color_accent,
		settings_dialog.querySelector('[data-settings-color-accent]>button[data-c-selected]'),
		target ?? settings_dialog.querySelector(`[data-settings-color-accent]>button[data-color-accent="${CSS.escape(color)}"]`),
		root_attr.color_accent,
		local_storage_keys.color_accent
	)) return

	const kbd = settings_dialog.querySelector('[data-settings-main]>[data-target=color-accent]>kbd')
	let description = ''
	switch (color) {
	case 'pink'       : description = 'Pink'; break
	case 'red'        : description = text_language('Red', 'Merah'); break
	case 'dark-orange': description = text_language('Dark orange', 'Oren gelap'); break
	case 'orange'     : description = text_language('Orange', 'Oren'); break
	case 'yellow'     : description = text_language('Yellow', 'Kuning'); break
	case 'green'      : description = text_language('Green', 'Hijau'); break
	case 'teal'       : description = text_language('Teal', 'Biru kehijauan'); break
	case 'blue'       : description = text_language('Blue', 'Biru'); break
	case 'indigo'     : description = 'Indigo'; break
	case 'purple'     : description = text_language('Purple', 'Ungu'); break
	case 'brown'      : description = text_language('Brown', 'Coklat'); break
	}
	if (kbd) kbd.innerHTML = description
}

function change_corner_style(corner_style, target) {
	if (!set_setting_button(
		corner_style,
		data_corner_style,
		settings_dialog.querySelector('[data-settings-corner-style]>button[data-c-selected]'),
		target ?? settings_dialog.querySelector(`[data-settings-corner-style]>button[data-corner-style="${CSS.escape(corner_style)}"]`),
		root_attr.corner_style,
		local_storage_keys.corner_style
	)) return

	const kbd = settings_dialog.querySelector('[data-settings-main]>[data-target=corner-style]>kbd')
	let description = ''
	switch (corner_style) {
	case 'sharp'     : description = text_language('Sharp', 'Tajam'); break
	case 'semi-round': description = text_language('Semi round', 'Semi bulat'); break
	case 'round'     : description = text_language('Round', 'Bulat'); break
	case 'full-round': description = text_language('Full round', 'Bulat penuh'); break
	}
	if (kbd) kbd.innerHTML = description
}

function init_settings() {
	const theme = localStorage.getItem(local_storage_keys.theme)
	if (theme && data_theme.includes(theme)) {
		change_theme(theme)
	}

	const animation = localStorage.getItem(local_storage_keys.animation)
	if (animation && data_animation.includes(animation)) {
		change_animation(animation)
	}

	const icon_theme = localStorage.getItem(local_storage_keys.icon_theme)
	if (icon_theme && data_icon_theme.includes(icon_theme)) {
		change_icon_theme(icon_theme)
	}

	const color_accent = localStorage.getItem(local_storage_keys.color_accent)
	if (color_accent && data_color_accent.includes(color_accent)) {
		change_color_accent(color_accent)
	}

	const language = localStorage.getItem(local_storage_keys.language)
	if (language && data_language.includes(language)) {
		change_language(language)
	}

	const corner_style = localStorage.getItem(local_storage_keys.corner_style)
	if (corner_style && data_corner_style.includes(corner_style)) {
		change_corner_style(corner_style)
	}
}

function close_modal() {
	const position = settings_dialog.dataset.position
	const final_close_modal = () => {
		if (selected_settings_section !== settings_main_section) {
			selected_settings_section.removeAttribute('data-selected')
			selected_settings_section = settings_main_section
			selected_settings_section.setAttribute('data-selected', '')
		}
		settings_dialog.close()
	}

	if (!enable_animation() || !['bottom-left', 'top-right'].includes(position))
		return final_close_modal()

	const rect = settings_dialog.getBoundingClientRect()
	const screen_height = window.innerHeight
	const top = [
		position == 'bottom-left'? screen_height - rect.height - 8 + 'px' : 8 + 'px',
		position == 'bottom-left'? screen_height + 'px' : -rect.height - 8 + 'px'
	]
	settings_dialog.animate({ top }, {
		duration: 300,
		easing: 'cubic-bezier(.15, 0, 0, 1)'
	}).finished.then(() => final_close_modal())
}

function init_settings_modal() {
	settings_dialog.oncancel = ev => {
		ev.preventDefault() // disable 'Esc' key
		close_modal()
	}

	settings_dialog.onclick = () => {
		const button = document.activeElement
		if (!settings_dialog.contains(button)
			|| button.tagName != 'BUTTON'
		) return

		const data_target = button.dataset.target
		if (data_target) {
			let selected = null
			switch (data_target) {
			case 'main'        : selected = settings_main_section       ; break
			case 'icon-theme'  : selected = settings_icontheme_section  ; break
			case 'theme'       : selected = settings_theme_section      ; break
			case 'color-accent': selected = settings_coloraccent_section; break
			case 'animation'   : selected = settings_animation_section  ; break
			case 'language'    : selected = settings_language_section   ; break
			case 'corner-style': selected = settings_cornerstyle_section; break
			}

			if (selected) {
				const rect = settings_dialog.getBoundingClientRect()
				selected.setAttribute('data-selected', '')
				selected_settings_section.removeAttribute('data-selected')
				selected_settings_section = selected
				if (!enable_animation()) return

				const new_rect = settings_dialog.getBoundingClientRect()
				settings_dialog.animate({
					height: [rect.height + 'px', new_rect.height + 'px']
				}, {
					duration: 200,
					easing: 'cubic-bezier(.15, 0, 0, 1)'
				})
			}
			return
		}

		const data_icon_theme = button.dataset.iconTheme
		if (data_icon_theme) return change_icon_theme(data_icon_theme, button)

		const data_theme = button.dataset.theme
		if (data_theme) return change_theme(data_theme, button)

		const data_language = button.dataset.language
		if (data_language) return change_language(data_language, button)

		const data_animation = button.dataset.animation
		if (data_animation) return change_animation(data_animation, button)

		const data_color_accent = button.dataset.colorAccent
		if (data_color_accent) return change_color_accent(data_color_accent, button)

		const data_corner_style = button.dataset.cornerStyle
		if (data_corner_style) return change_corner_style(data_corner_style, button)
	}

	document.addEventListener('click', ev => {
		if (ev.target !== settings_dialog) return

		close_modal()
	})
}

function init_settings_button() {
	const side_button = document.getElementById('c-navigation-settings-btn-id')
	const header_button = document.getElementById('c-header-settings-btn-id')

	header_button.onclick = (ev) => {
		settings_dialog.showModal()

		// modal must open first
		const rect = settings_dialog.getBoundingClientRect()

		settings_dialog.setAttribute('data-position', 'top-right')
		ev.stopImmediatePropagation() // stop document 'event' listener
		if (!enable_animation()) return

		const top = [-rect.height - 8 + 'px', '8px']
		settings_dialog.animate({ top }, {
			duration: 300,
			easing: 'cubic-bezier(.15, 0, 0, 1)'
		})
	}

	side_button.onclick = (ev) => {
		settings_dialog.showModal()

		// modal must open first
		const rect = settings_dialog.getBoundingClientRect()

		settings_dialog.setAttribute('data-position', 'bottom-left')
		ev.stopImmediatePropagation() // stop document 'event' listener
		if (!enable_animation()) return

		const screen_height = window.innerHeight
		const top = [screen_height + 'px', screen_height - rect.height - 8 + 'px']
		settings_dialog.animate({ top }, {
			duration: 300,
			easing: 'cubic-bezier(.15, 0, 0, 1)'
		})
	}
}

init_settings()
init_settings_modal()
init_settings_button()
})()