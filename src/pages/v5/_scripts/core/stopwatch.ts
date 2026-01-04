import { Refs } from "./refs";

function startStopwatch(): void {
	let i = 0
	const digits = 5
	setInterval(() => {
		++i
		const text = i.toString(16).toUpperCase().padStart(digits, '0')
		Refs.header_stopwatch.textContent = text
	}, 1000);
}

const _ = () => {
	startStopwatch()
}

export default _