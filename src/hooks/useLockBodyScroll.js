import { useEffect } from 'react'

export function useLockBodyScroll(locked) {
	useEffect(() => {
		const html = document.documentElement
		const prev = html.style.overflow
		if (locked) html.style.overflow = 'hidden'
		else html.style.overflow = prev || ''
		return () => {
			html.style.overflow = prev || ''
		}
	}, [locked])
}
