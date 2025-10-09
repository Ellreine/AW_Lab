import Dropdown from './Dropdown.jsx'
import CoursesMenu from './CoursesMenu.jsx'

export default function DesktopNav({ base, courses }) {
	return (
		<nav className='hidden sm:flex items-center gap-6 text-sm'>
			<a
				className='text-neutral-400 hover:text-neutral-100 transition'
				href={`${base}about/`}
			>
				О себе
			</a>
			<Dropdown label='Предметы'>
				<CoursesMenu courses={courses} base={base} />
			</Dropdown>
			<a
				className='text-neutral-400 hover:text-neutral-100 transition'
				href={`${base}olympiads/`}
			>
				Олимпиады и конкурсы
			</a>
			<a
				className='text-neutral-400 hover:text-neutral-100 transition'
				href={`${base}scholarships/`}
			>
				Стипендии
			</a>
		</nav>
	)
}
