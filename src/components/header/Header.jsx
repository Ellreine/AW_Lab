import { useState } from 'react'
import courses from '../../data/courses.json'
import LogoBrand from './LogoBrand.jsx'
import DesktopNav from './DesktopNav.jsx'
import MobileMenu from './MobileMenu.jsx'

const BASE = import.meta.env.BASE_URL || '/'

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<header className='sticky top-0 z-20 border-b border-neutral-800/80 backdrop-blur bg-neutral-950/70'>
			<div className='mx-auto max-w-6xl px-4 py-3 flex items-center justify-between'>
				<LogoBrand base={BASE} />

				<DesktopNav base={BASE} courses={courses} />

				<button
					className='sm:hidden text-neutral-300 hover:text-white transition'
					onClick={() => setMobileOpen(true)}
					aria-label='Открыть меню'
				>
					<svg
						width='28'
						height='28'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						viewBox='0 0 24 24'
					>
						<path strokeLinecap='round' d='M4 6h16M4 12h16M4 18h16' />
					</svg>
				</button>
			</div>

			<MobileMenu
				base={BASE}
				open={mobileOpen}
				onClose={() => setMobileOpen(false)}
				courses={courses}
			/>
		</header>
	)
}
