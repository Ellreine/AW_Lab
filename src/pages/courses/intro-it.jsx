import { createRoot } from 'react-dom/client'
import '../../index.css'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import Section from '../../components/ui/Section.jsx'
import Pill from '../../components/ui/Pill.jsx'
import LabCard from '../../components/course/LabCard.jsx'
import data from '../../data/courses/intro-it.json'

const BASE = import.meta.env.BASE_URL || '/'

function Page() {
	return (
		<div className='min-h-dvh bg-neutral-950 text-neutral-100'>
			<Header />

			<main className='mx-auto max-w-6xl px-4 py-12'>
				{/* Заголовок */}
				<div className='flex flex-wrap items-end justify-between gap-4'>
					<h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight'>
						{data.title}
					</h1>
					<Pill>осень 2025</Pill>
				</div>
				{/* Описание */}
				<Section title='Описание предмета'>
					<p className='text-neutral-300 leading-relaxed'>{data.description}</p>
				</Section>
				{/* Моё видение */}
				<Section title='Моё видение курса'>
					<div className='rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5'>
						<p className='text-neutral-300 leading-relaxed'>{data.vision}</p>
					</div>
				</Section>
				{/* Лабораторные */}
				<Section
					title='Лабораторные работы'
					aside={
						<span className='text-sm text-neutral-400'>
							Всего: {data.labs.count}
						</span>
					}
				>
					<div className='grid gap-4 sm:grid-cols-2'>
						{data.labs.items.map(lab => (
							<LabCard key={lab.slug} courseSlug='intro-it' lab={lab} />
						))}
					</div>
				</Section>
				{/* Критерии зачёта и правила сдачи */}
				<Section title='Оценивание, зачёт и правила сдачи'>
					<div className='space-y-6'>
						{/* Зачёт */}
						<div className='rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5'>
							<h3 className='text-lg font-semibold text-neutral-50'>
								Критерии зачёта
							</h3>
							<p className='mt-3 text-neutral-300 leading-relaxed'>
								Для зачёта необходимо{' '}
								<span className='text-neutral-100'>
									выполнить и защитить все лабораторные работы
								</span>
								.
							</p>
						</div>

						{/* Правила сдачи */}
						<div className='rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5'>
							<h3 className='text-lg font-semibold text-neutral-50'>
								Правила сдачи
							</h3>
							<ul className='mt-3 space-y-2 text-neutral-300'>
								<li className='flex items-start gap-3'>
									<span className='mt-2 h-2.5 w-2.5 rounded-full bg-emerald-400/80 shrink-0' />
									<span>
										Просрочка без уважительной причины на{' '}
										<strong>1 неделю</strong>
										<span className='text-red-300'> −25%</span> от баллов за
										лабораторную.
									</span>
								</li>
								<li className='flex items-start gap-3'>
									<span className='mt-2 h-2.5 w-2.5 rounded-full bg-emerald-400/80 shrink-0' />
									<span>
										Просрочка на <strong>2 недели и более</strong>
										<span className='text-red-300'> −50%</span> от баллов за
										лабораторную.
									</span>
								</li>
								<li className='flex items-start gap-3'>
									<span className='mt-2 h-2.5 w-2.5 rounded-full bg-emerald-400/80 shrink-0' />
									<span>
										В случае <strong>систематических пропусков</strong> и
										появления в конце семестра — сложность лабораторных
										увеличивается добавлением{' '}
										<strong>дополнительного задания</strong> по каждой работе
										(на усмотрение преподавателя).
									</span>
								</li>
							</ul>
						</div>
					</div>

					<div className='mt-6'>
						<a
							href={`${BASE}/`}
							className='inline-flex items-center gap-2 rounded-lg border border-neutral-800 px-4 py-2 hover:bg-neutral-900'
						>
							← Ко всем предметам
						</a>
					</div>
				</Section>
			</main>

			<Footer />
		</div>
	)
}

createRoot(document.getElementById('root')).render(<Page />)
