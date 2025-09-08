import { createRoot } from 'react-dom/client'
import '../index.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import DegreeCard from '../components/DegreeCard.jsx'
import CourseCard from '../components/CourseCard.jsx'
import courses from '../data/courses.json'

const BASE = import.meta.env.BASE_URL || '/'

function iconFor(slug, ready) {
	if (!ready) return '🛠️'
	switch (slug) {
		case 'intro-it':
			return '🎮'
		case 'vr-tools':
			return '🥽'
		case 'team-dev':
			return '👥'
		case 'gamification':
			return '🏆'
		case 'internet-prog':
			return '🌐'
		case 'web-prog':
			return '💻'
		default:
			return '📘'
	}
}

function accentFor(ready) {
	return ready
		? 'from-emerald-400/20 via-emerald-400/10 to-transparent'
		: 'from-neutral-500/20 via-neutral-500/10 to-transparent'
}

function Home() {
	return (
		<div className='min-h-dvh bg-neutral-950 noise'>
			<Header />

			<main className='relative mx-auto max-w-6xl px-4 py-16 sm:py-24'>
				{/* Вступление */}
				<div className='mx-auto max-w-3xl text-center'>
					<h1 className='mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-50'>
						Платформа с курсами по геймдеву, VR и веб-разработке
					</h1>
					<p className='mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed'>
						Здесь будут собраны программы, лабораторные работы, дедлайны и
						полезные ссылки. Это персональный сайт-навигатор, чтобы вы быстро
						находили задания и понимали ожидания по курсу.
					</p>
				</div>

				{/* Карточки предметов */}
				<div className='mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					{courses.map(c => {
						const ready = Boolean(c.ready)
						const href = ready ? `${BASE}courses/${c.slug}/` : '#'
						const description = ready
							? 'Открыть страницу курса'
							: 'Материалы в разработке'
						return (
							<DegreeCard
								key={c.slug}
								title={c.title}
								description={description}
								href={href}
								icon={iconFor(c.slug, ready)}
								accent={accentFor(ready)}
							/>
						)
					})}
				</div>
			</main>

			<Footer />
		</div>
	)
}

createRoot(document.getElementById('root')).render(<Home />)
