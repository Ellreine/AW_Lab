import { createRoot } from 'react-dom/client'
import '../index.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { useEffect, useMemo, useRef, useState } from 'react'
import avatar from '../../src/images/avatar.jpg'

const BASE = import.meta.env.BASE_URL || '/'

function Section({ title, aside, children }) {
	return (
		<section className='mt-12'>
			<div className='flex items-end justify-between gap-4'>
				<h2 className='text-xl font-semibold'>{title}</h2>
				{aside}
			</div>
			<div className='mt-5'>{children}</div>
		</section>
	)
}

function Pill({ children }) {
	return (
		<span className='inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 text-xs text-neutral-300'>
			{children}
		</span>
	)
}

function IconCard({ title, children }) {
	return (
		<div className='flex flex-col h-full rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5'>
			<div className='min-h-[22px] text-sm text-neutral-400 mb-3'>{title}</div>
			<ul className='flex-1 space-y-3'>{children}</ul>
		</div>
	)
}

function IconItem({ as: Tag = 'li', icon, title, subtitle, meta = [] }) {
	return (
		<Tag className='rounded-xl border border-neutral-800 bg-neutral-900/80 p-4 list-none'>
			<div className='flex items-start gap-3'>
				<span className='grid place-items-center h-10 w-10 rounded-xl bg-neutral-800/70 border border-neutral-700/60 text-2xl shrink-0'>
					{icon}
				</span>

				<div className='min-w-0 flex-1'>
					<div className='font-medium text-neutral-100 leading-tight'>
						{title}
					</div>

					{subtitle && (
						<p className='mt-1 text-sm text-neutral-300 leading-relaxed'>
							{subtitle}
						</p>
					)}

					{meta.length > 0 && (
						<div className='mt-2 flex flex-wrap gap-2'>
							{meta.map((m, i) => (
								<span
									key={i}
									className='inline-flex items-center rounded-full border border-neutral-700 bg-neutral-950/50 px-2 py-0.5 text-xs text-neutral-400'
								>
									{m}
								</span>
							))}
						</div>
					)}
				</div>
			</div>
		</Tag>
	)
}

/** ----------------- СЛАЙДЕР ФОТО ----------------- **/
function PhotoSlider({ images = [] }) {
	const viewportRef = useRef(null)
	const [active, setActive] = useState(0)

	// Мемоизированные ссылки на элементы-слайды
	const slides = useMemo(() => {
		const vp = viewportRef.current
		return vp ? Array.from(vp.querySelectorAll('[data-slide]')) : []
	}, [images.length])

	// Определяем активный слайд по положению скролла
	useEffect(() => {
		const vp = viewportRef.current
		if (!vp) return

		const onScroll = () => {
			if (!slides.length) return
			const center = vp.scrollLeft + vp.clientWidth / 2
			let best = 0
			let bestDist = Infinity
			for (let i = 0; i < slides.length; i++) {
				const s = slides[i]
				const slideCenter = s.offsetLeft + s.clientWidth / 2
				const dist = Math.abs(slideCenter - center)
				if (dist < bestDist) {
					bestDist = dist
					best = i
				}
			}
			setActive(best)
		}

		const ro = new ResizeObserver(onScroll)
		ro.observe(vp)
		vp.addEventListener('scroll', onScroll, { passive: true })
		onScroll()

		return () => {
			vp.removeEventListener('scroll', onScroll)
			ro.disconnect()
		}
	}, [slides])

	const scrollByStep = dir => {
		const vp = viewportRef.current
		if (!vp) return
		// Скроллим примерно на ширину вьюпорта (адаптивно)
		const delta = Math.round(vp.clientWidth * 0.9) * dir
		vp.scrollBy({ left: delta, behavior: 'smooth' })
	}

	const goTo = idx => {
		const vp = viewportRef.current
		if (!vp || !slides[idx]) return
		vp.scrollTo({ left: slides[idx].offsetLeft, behavior: 'smooth' })
	}

	const onKeyDown = e => {
		if (e.key === 'ArrowRight') scrollByStep(1)
		if (e.key === 'ArrowLeft') scrollByStep(-1)
	}

	if (!images.length) {
		return (
			<div className='rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 text-sm text-neutral-400'>
				Положи свои фото в{' '}
				<code className='text-neutral-300'>src/images/photos</code> — они
				появятся здесь автоматически.
			</div>
		)
	}

	return (
		<div className='relative'>
			{/* Кнопки */}
			<button
				type='button'
				aria-label='Предыдущий'
				onClick={() => scrollByStep(-1)}
				className='group absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-neutral-700/60 bg-neutral-900/80 backdrop-blur hover:bg-neutral-800/80'
			>
				<span className='block text-lg leading-none opacity-90 group-hover:opacity-100'>
					←
				</span>
			</button>
			<button
				type='button'
				aria-label='Следующий'
				onClick={() => scrollByStep(1)}
				className='group absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-neutral-700/60 bg-neutral-900/80 backdrop-blur hover:bg-neutral-800/80'
			>
				<span className='block text-lg leading-none opacity-90 group-hover:opacity-100'>
					→
				</span>
			</button>

			{/* Вьюпорт */}
			<div
				ref={viewportRef}
				tabIndex={0}
				onKeyDown={onKeyDown}
				className='relative overflow-x-auto snap-x snap-mandatory scroll-px-4 px-1 sm:px-2
				[scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
			>
				<div className='flex gap-4 sm:gap-5 py-1'>
					{images.map((src, i) => (
						<div
							key={i}
							data-slide
							className='snap-start shrink-0 w-[82%] sm:w-[62%] md:w-[48%] lg:w-[36%] xl:w-[28%]'
						>
							<div className='rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/60'>
								<img
									src={src}
									alt={`Фото ${i + 1}`}
									loading='lazy'
									className='block h-64 sm:h-72 md:h-80 lg:h-80 w-full object-cover'
								/>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Точки */}
			<div className='mt-4 flex justify-center gap-2'>
				{images.map((_, i) => (
					<button
						key={i}
						aria-label={`К слайду ${i + 1}`}
						onClick={() => goTo(i)}
						className={`h-2.5 w-2.5 rounded-full transition-all ${
							i === active
								? 'bg-neutral-200'
								: 'bg-neutral-600 hover:bg-neutral-500'
						}`}
					/>
				))}
			</div>
		</div>
	)
}
/** -------------- КОНЕЦ: СЛАЙДЕР ФОТО -------------- **/

export default function About() {
	return (
		<div className='min-h-dvh bg-neutral-950 text-neutral-100'>
			<Header />

			<main className='mx-auto max-w-5xl px-4 py-12'>
				{/* Крошки */}
				<nav className='text-sm text-neutral-400'>
					<a href={BASE}>Главная</a>
					<span className='px-2'>/</span>
					<span className='text-neutral-300'>О себе</span>
				</nav>

				{/* Hero */}
				<div className='mt-6 rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8'>
					<div className='flex flex-col sm:flex-row sm:items-center gap-6'>
						{/* Фото */}
						<img
							src={avatar}
							alt='Илья Кореневский'
							className='h-24 w-24 rounded-2xl object-cover border border-neutral-700'
						/>

						<div className='flex-1'>
							<div className='flex flex-wrap items-center gap-2'>
								<h1 className='text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-50'>
									Илья Кореневский
								</h1>
							</div>
							<p className='mt-2 text-neutral-300 leading-relaxed'>
								Project Manager / Преподаватель. Работаю с IT и VR-проектами,
								провожу практические курсы по геймдеву и вебу, сопровождаю
								студенческие команды от идеи до питча и MVP. Люблю системность,
								аккуратный визуал и понятные правила игры.
							</p>
						</div>
					</div>
				</div>

				{/* Навыки */}
				<Section title='Навыки'>
					<div className='grid gap-4 sm:grid-cols-2'>
						<div className='rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5'>
							<div className='text-sm  font-bold text-blue-500'>
								Hard skills
							</div>
							<p className='mt-2 text-sm text-neutral-400'>
								Стек для учебных и pet-проектов, быстрого прототипирования и
								демонстраций
							</p>
							<div className='mt-3 flex flex-wrap gap-2'>
								{[
									'JavaScript',
									'React',
									'Node.js',
									'Unity C#',
									'Git/GitHub',
									'Adobe Photoshop',
									'Miro',
								].map(s => (
									<Pill key={s}>{s}</Pill>
								))}
							</div>
						</div>
						<div className='rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5'>
							<div className='text-sm text- font-bold text-green-700'>
								Soft skills
							</div>
							<p className='mt-2 text-sm text-neutral-400'>
								То, что удерживает команду в фокусе и доводит задачи до
								результата
							</p>
							<div className='mt-3 flex flex-wrap gap-2'>
								{[
									'Управление проектами',
									'Питчинг',
									'Аналитическое мышление',
									'Гибкость',
									'Фасилитация идей',
									'Коммуникация',
								].map(s => (
									<Pill key={s}>{s}</Pill>
								))}
							</div>
						</div>
					</div>
				</Section>

				{/* Опыт (сводно) */}
				<Section title='Опыт'>
					<ul className='space-y-3'>
						<IconItem
							icon='🏫'
							title='Ассистент ОИТ ИШИТР — ТПУ'
							subtitle='Практико-ориентированное преподавание: командная разработка ПО, геймификация в образовании.'
							meta={['курсы и лабы', 'геймдев и веб', 'проектная работа']}
						/>
						<IconItem
							icon='🧪'
							title='Инженер-метролог — Томский приборный завод'
							subtitle='Поверка и калибровка оборудования, работа с ГОСТ/ISO, разработка методик измерений. Системное мышление и внимание к деталям переносятся в процессы преподавания и управления проектами.'
							meta={['системность', 'процессы', 'качество']}
						/>
						<IconItem
							icon='👨‍🏫'
							title='Учитель математики и робототехники — Лицей №1 им. А. С.  Пушкина'
							subtitle='Кружки и олимпиадная подготовка, учебные проекты. Учил аргументировать решения и защищать результаты.'
							meta={['наставничество', 'подача материала']}
						/>
					</ul>
				</Section>

				<Section title='Конкурсы и хакатоны'>
					<div className='grid gap-6 sm:grid-cols-2 items-stretch'>
						<IconCard title='2025'>
							<IconItem
								icon='🚀'
								title='U-NOVUS · Система Хак'
								subtitle='Frontend / PM. MVP «Тест на внимательность перед поездкой на электросамокате».'
								meta={['MVP', 'дедлайны', 'команда']}
							/>
							<IconItem
								icon='🎨'
								title='Таврида.Арт 2025'
								subtitle='Летняя школа: арт-куратор / PM. Концепция визуализаций, сбор референсов, сборка демо на Unity, подготовка презентации.'
								meta={['визуал', 'Unity', 'питч']}
							/>
						</IconCard>

						<IconCard title='2024–2025'>
							<IconItem
								icon='🏆'
								title='IT-Планета'
								subtitle='PM AR-квеста: 3-е и 2-е места. Организация команды (4 чел.), декомпозиция задач, подготовка pitch-deck.'
								meta={['AR', 'питч-подготовка']}
							/>
							<IconItem
								icon='🕹️'
								title='Синеус 2024'
								subtitle='Unity Developer / PM. Игровой прототип, 2-е место. Фокус на игровой петле, референсах и минимальном «вау-эффекте».'
								meta={['Unity', 'геймдизайн', 'прототип']}
							/>
						</IconCard>
					</div>
				</Section>

				{/* Образование и доп. программы */}
				<Section title='Образование и доп. программы'>
					<div className='grid gap-4 sm:grid-cols-2'>
						<IconItem
							icon='🎓'
							title='Магистратура — ТПУ'
							subtitle='ОИТ ИШИТР: Разработка приложений VR/AR. Фокус на практику и исследовательские проекты.'
							meta={['VR/AR', 'Команда', 'Геймификация']}
						/>
						<IconItem
							icon='📚'
							title='Бакалавриат — ИШЭ'
							subtitle='Электроэнергетика и электротехника. Классическая техбаза и дисциплина инженерного подхода.'
							meta={['Понял чего точно не хочу...']}
						/>
					</div>

					<div className='mt-5 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5'>
						<div className='text-sm text-neutral-400 mb-3'>
							Переподготовка / курсы
						</div>
						<ul className='grid gap-3 sm:grid-cols-2'>
							<IconItem
								icon='✅'
								title='ТОИПКРО'
								subtitle='Проф. переподготовка педагога ДО'
							/>
							<IconItem
								icon='🧪'
								title='Rubius Academy'
								subtitle='Инженер QA'
							/>
							<IconItem
								icon='🖥️'
								title='Result School'
								subtitle='Frontend Developer'
							/>
							<IconItem
								icon='📈'
								title='ТПУ'
								subtitle='Введение в Data Science и МО'
							/>
						</ul>
					</div>
				</Section>

				{/* Хобби и игры */}
				<Section title='Хобби и любимые игры'>
					<div className='grid gap-4 sm:grid-cols-2'>
						<IconCard title='Хобби'>
							<IconItem
								icon='🎲'
								title='Dungeons & Dragons'
								subtitle='Это отлично перетекает в фасилитацию команд и генерацию идей.'
							/>
							<IconItem
								icon='🏐'
								title='Волейбол'
								subtitle='Командная динамика, соперничество, доверие и роли как в проекте.'
							/>
							<IconItem
								icon='🏍️'
								title='Мотоцикл'
								subtitle='Дисциплина, фокус и уважение к процессу — в дороге и в работе.'
							/>
						</IconCard>

						<IconCard title='Любимые игры'>
							<IconItem
								icon='⚔️'
								title='World of Warcraft'
								subtitle='Рейды и координация — лучший тренажёр командных ролей и коммуникации.'
							/>
							<IconItem
								icon='🛡️'
								title='Dota 2'
								subtitle='Скорость реакции и тренировка принятия быстрых решений.'
							/>
							<IconItem
								icon='🎮'
								title='Counter-Strike'
								subtitle='Тимплей, дисциплина, чёткие коллы — переносится в рабочие созвоны.'
							/>
						</IconCard>
					</div>
				</Section>

				{/* Любимые книги */}
				<Section title='Топ книг'>
					<ul className='space-y-3'>
						<IconItem
							icon='📘'
							title='«Подсознание может всё» — Джон Кехо'
							subtitle='Про установки, фокус и привычки — помогает выстраивать прогресс и видеть результат.'
							meta={['мышление', 'привычки']}
						/>
						<IconItem
							icon='📙'
							title='«Прикладной системный анализ» — Ф. Тарасенко'
							subtitle='Структурирование задач, критерии, выбор решений — базис для проектного подхода.'
							meta={['системность', 'решения']}
						/>
						<IconItem
							icon='📗'
							title='«Алхимик» — Пауло Коэльо'
							subtitle='Про путь и внутренние ориентиры — почему важно понимать «зачем».'
							meta={['мотивация', 'ценности']}
						/>
					</ul>
				</Section>
			</main>

			<Footer />
		</div>
	)
}

createRoot(document.getElementById('root')).render(<About />)
