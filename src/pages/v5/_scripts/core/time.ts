import { Refs } from "./refs";

function startTimeCounting(): void {
	let i = 0
	const digits = 5
	setInterval(() => {
		++i
		const text = i.toString(16).toUpperCase().padStart(digits, '0')
		Refs.header_time.textContent = text
	}, 1000);
}

const _ = () => {
	startTimeCounting()
}

export default _