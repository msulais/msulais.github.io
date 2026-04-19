export function elementById<T extends HTMLElement = HTMLElement>(elementId: string): T | null {
	return document.getElementById(elementId) as T
}

export function allElementByClass<T extends HTMLElement>(selector: string): T[] {
	return document.querySelectorAll(selector) as unknown as T[]
}

export function setElementStyle(el: HTMLElement, property: string, value: string): void {
	el.style.setProperty(property, value)
}