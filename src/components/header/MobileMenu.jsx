import LogoBrand from './LogoBrand.jsx'
import CoursesMenu from './CoursesMenu.jsx'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll.js'

export default function MobileMenu({ base, open, onClose, courses }) {
	useLockBodyScroll(open)
	if (!open) return null

	return (
		<div className='fixed inset-0 h-[100svh] z-50 bg-neutral-950 text-neutral-100 flex flex-col overscroll-none'>
			{/* Top bar */}
			<div className='flex items-center justify-between px-4 py-4 border-b border-neutral-800'>
				<LogoBrand base={base} />
				<button
					className='text-neutral-400 hover:text-white transition'
					onClick={onClose}
					aria-label='Закрыть меню'
				>
					<svg
						width='28'
						height='28'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						viewBox='0 0 24 24'
					>
						<path strokeLinecap='round' d='M6 6l12 12M6 18L18 6' />
					</svg>
				</button>
			</div>

			{/* Content */}
			<nav className='flex-1 px-6 py-8 space-y-6 text-lg overflow-y-auto'>
				<a
					onClick={onClose}
					href={`${base}about/`}
					className='block hover:text-white'
				>
					О себе
				</a>

				<div>
					<div className='mb-2 text-neutral-400'>Предметы</div>
					<CoursesMenu
						courses={courses}
						base={base}
						dense
						onItemClick={onClose}
					/>
				</div>

				<a
					onClick={onClose}
					href={`${base}olympiads/`}
					className='block hover:text-white'
				>
					Олимпиады и конкурсы
				</a>
				<a
					onClick={onClose}
					href={`${base}scholarships/`}
					className='block hover:text-white'
				>
					Стипендии
				</a>
			</nav>
		</div>
	)
}
