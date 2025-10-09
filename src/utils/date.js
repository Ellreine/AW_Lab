export function fmt(dateStr) {
	// "YYYY-MM-DD" -> "DD.MM.YYYY"
	if (!dateStr) return ''
	const [y, m, d] = dateStr.split('-').map(Number)
	const dd = String(d).padStart(2, '0')
	const mm = String(m).padStart(2, '0')
	return `${dd}.${mm}.${y}`
}
