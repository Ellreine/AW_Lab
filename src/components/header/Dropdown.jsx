import { useEffect, useRef, useState } from 'react'

export default function Dropdown({ label, children }) {
	const [open, setOpen] = useState(false)
	const closeTimer = useRef(null)
	const rootRef = useRef(null)

	const delayedClose = () => {
		clearTimeout(closeTimer.current)
		closeTimer.current = setTimeout(() => setOpen(false), 140)
	}
	const openNow = () => {
		clearTimeout(closeTimer.current)
		setOpen(true)
	}

	useEffect(() => {
		const onDocClick = e => {
			if (!rootRef.current?.contains(e.target)) setOpen(false)
		}
		document.addEventListener('pointerdown', onDocClick)
		return () => document.removeEventListener('pointerdown', onDocClick)
	}, [])

	return (
		<div
			ref={rootRef}
			className='relative'
			onMouseEnter={openNow}
			onMouseLeave={delayedClose}
		>
			<button
				type='button'
				className='text-neutral-400 hover:text-neutral-100 transition inline-flex items-center gap-1'
				aria-haspopup='true'
				aria-expanded={open}
				onClick={() => setOpen(v => !v)}
				onFocus={openNow}
				onBlur={delayedClose}
			>
				{label}
				<svg
					width='14'
					height='14'
					viewBox='0 0 24 24'
					className={`transition ${open ? 'rotate-180' : ''}`}
				>
					<path
						d='M6 9l6 6 6-6'
						stroke='currentColor'
						strokeWidth='2'
						fill='none'
						strokeLinecap='round'
					/>
				</svg>
			</button>

			<div
				className={`absolute right-0 mt-2 w-80 max-h-[60vh] overflow-auto rounded-xl border border-neutral-800 bg-neutral-900/95 p-2 shadow-xl transition
        ${
					open
						? 'opacity-100 translate-y-0 pointer-events-auto'
						: 'opacity-0 translate-y-1 pointer-events-none'
				}`}
				role='menu'
			>
				<div
					className='absolute -top-2 left-0 right-0 h-2'
					aria-hidden='true'
				/>
				{children}
			</div>
		</div>
	)
}
