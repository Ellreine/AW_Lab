import { createRoot } from 'react-dom/client'
import '../../../../index.css'
import Header from '../../../../components/Header.jsx'
import Footer from '../../../../components/Footer.jsx'
import Pill from '../../../../components/ui/Pill.jsx'

const BASE = import.meta.env.BASE_URL || '/'

/* ---------- UI ---------- */
function Section({ title, children, aside }) {
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

function Tip({ children }) {
	return (
		<div className='mt-4 rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-4 text-neutral-300'>
			<div className='text-xs uppercase tracking-wide text-neutral-500'>
				подсказка
			</div>
			<div className='mt-2 leading-relaxed'>{children}</div>
		</div>
	)
}

function Checklist({ items }) {
	return (
		<ul className='mt-3 space-y-2'>
			{items.map((t, i) => (
				<li key={i} className='flex items-center gap-3'>
					<span className='h-2.5 w-2.5 rounded-full bg-emerald-400/80 shrink-0' />
					<span className='text-neutral-300 leading-relaxed'>{t}</span>
				</li>
			))}
		</ul>
	)
}

/* ---------- PAGE ---------- */
function Page() {
	// Добавили только разные сроки для двух групп (вся остальная страница без изменений)
	const schedules = [
		{ group: '8Д51', start: '22.09.2025', due: '06.10.2025' },
		{ group: '8Д52', start: '24.09.2025', due: '08.10.2025' },
	]

	return (
		<div className='min-h-dvh bg-neutral-950 text-neutral-100'>
			<Header />

			<main className='mx-auto max-w-6xl px-4 py-12'>
				{/* Хлебные крошки */}
				<nav className='text-sm text-neutral-400'>
					<a href={`${BASE}`}>Главная</a>
					<span className='px-2'>/</span>
					<a href={`${BASE}courses/intro-it/`}>Введение в IT</a>
					<span className='px-2'>/</span>
					<span className='text-neutral-300'>
						Лабораторная работа №2 — Команды + генерация идеи
					</span>
				</nav>

				{/* Заголовок + мета */}
				<div className='mt-8 border-b border-neutral-800 pb-6'>
					<div className='flex flex-wrap items-start justify-between gap-6'>
						<div className='max-w-3xl'>
							<div className='text-sm font-medium text-emerald-400 uppercase tracking-wide mb-2'>
								Лабораторная работа №2
							</div>
							<h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-50 leading-tight'>
								Формирование команд&nbsp;+ генерация идеи игры
							</h1>
						</div>
						{/* >>> Единственное изменение: показываем сроки по двум группам */}
						<div className='flex flex-col items-start sm:items-end gap-2'>
							{schedules.map(s => (
								<div
									key={s.group}
									className='flex flex-wrap items-center gap-2'
								>
									<Pill>{s.group}</Pill>
									<Pill>старт: {s.start}</Pill>
									<Pill className='border-red-500/50 bg-red-900/40 text-red-300'>
										дедлайн: {s.due}
									</Pill>
								</div>
							))}
							<Pill>⏱ 2 недели</Pill>
						</div>
						{/* <<< Конец изменения */}
					</div>
				</div>

				{/* Цель */}
				<Section title='Цель работы'>
					<p className='text-neutral-300 leading-relaxed'>
						Сформировать основу командной работы и разработать первую концепцию
						будущей игры.
					</p>

					<div className='mt-5'>
						<div className='text-sm text-neutral-400 mb-2'>Задачи:</div>
						<Checklist
							items={[
								'Научиться распределять роли в команде.',
								'Освоить методы коллективной генерации идей.',
								'Подготовить базовый питч проекта.',
								'Начать ведение проектного журнала.',
							]}
						/>
					</div>
				</Section>

				{/* Задание */}
				<Section
					title='Задание'
					aside={
						<span className='text-sm text-neutral-500'>5 блоков работы</span>
					}
				>
					{/* Шаг 1 */}
					<div className='rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg'>
						<div className='flex items-center gap-2 text-sm font-medium text-emerald-400/90'>
							<span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs'>
								1
							</span>
							Шаг&nbsp;1
						</div>
						<h3 className='mt-3 text-xl font-semibold text-neutral-50 tracking-tight'>
							Формирование команд
						</h3>

						{/* Блок с философской темой */}
						<div className='mt-4 p-4 bg-neutral-800/50 rounded-lg border-l-4 border-amber-400/60'>
							<div className='text-sm font-medium text-amber-400/80 mb-1'>
								Тема для вдохновения:
							</div>
							<div className='text-lg italic text-amber-200/90 font-semibold'>
								«Путь в тысячу ли начинается с первого шага» — Лао-Цзы
							</div>
							<div className='text-sm text-neutral-400 mt-2'>
								Ваша игра — это долгий путь, и этот первый шаг по формированию
								команды закладывает основу для всего последующего творческого
								путешествия.
							</div>
						</div>

						<Checklist
							items={[
								'Разбейтесь на группы по 3 человека.',
								'Назначьте роли (например: лидер, генератор идей, дизайнер, программист, исследователь и т.п.).',
							]}
						/>
						<Tip>
							Роли можно менять по мере развития проекта — фиксируйте актуальное
							состояние в журнале.
						</Tip>
					</div>

					{/* Шаг 2 */}
					<div className='mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg'>
						<div className='flex items-center gap-2 text-sm font-medium text-emerald-400/90'>
							<span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs'>
								2
							</span>
							Шаг&nbsp;2
						</div>
						<h3 className='mt-3 text-xl font-semibold text-neutral-50 tracking-tight'>
							Генерация идей (методологии)
						</h3>

						<div className='mt-4 grid gap-6 sm:grid-cols-3'>
							{/* Метод Диснея */}
							<div className='rounded-xl border border-neutral-800 bg-neutral-900/60 px-5 py-4'>
								<div className='text-sm text-neutral-400'>Метод Диснея</div>
								<Checklist
									items={[
										'Мечтатель — записываем любые идеи, без критики.',
										'Реалист — выбираем то, что можно воплотить.',
										'Критик — ищем слабые места и риски.',
									]}
								/>
							</div>

							{/* SCAMPER */}
							<div className='rounded-xl border border-neutral-800 bg-neutral-900/60 px-5 py-4'>
								<div className='text-sm text-neutral-400'>SCAMPER</div>
								<Checklist
									items={[
										'Substitute — что заменить?',
										'Combine — что объединить?',
										'Adapt — что адаптировать?',
										'Modify — что изменить?',
										'Put to other use — как использовать иначе?',
										'Eliminate — что убрать?',
										'Rearrange — что переставить?',
									]}
								/>
							</div>

							{/* 6 шляп де Боно */}
							<div className='rounded-xl border border-neutral-800 bg-neutral-900/60 px-5 py-4'>
								<div className='text-sm text-neutral-400'>6 шляп де Боно</div>
								<Checklist
									items={[
										'Белая — факты.',
										'Красная — эмоции.',
										'Чёрная — риски, критика.',
										'Жёлтая — плюсы.',
										'Зелёная — креатив.',
										'Синяя — организация.',
									]}
								/>
							</div>
						</div>

						{/* Роадмап применения методов */}
						<Tip>
							<div className='font-medium text-neutral-200 mb-1'>
								Роадмап применения методов
							</div>
							<div className='space-y-2 text-neutral-300'>
								<div>
									<span className='text-emerald-300'>
										1) Старт — метод Диснея:
									</span>{' '}
									быстро генерируем широкий пул идей.
								</div>
								<div>
									<span className='text-emerald-300'>
										2) Уточнение — SCAMPER:
									</span>{' '}
									дорабатываем лучшие варианты.
								</div>
								<div>
									<span className='text-emerald-300'>
										3) Фильтрация — 6 шляп:
									</span>{' '}
									оцениваем с разных сторон и выбираем финальную.
								</div>
							</div>
						</Tip>
					</div>

					{/* Шаг 3 */}
					<div className='mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg'>
						<div className='flex items-center gap-2 text-sm font-medium text-emerald-400/90'>
							<span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs'>
								3
							</span>
							Шаг&nbsp;3
						</div>
						<h3 className='mt-3 text-xl font-semibold text-neutral-50 tracking-tight'>
							Проектный журнал
						</h3>
						<Checklist
							items={[
								'Создайте страницу команды в Obsidian (или аналоге).',
								'Зафиксируйте состав команды и роли.',
								'Опишите задачи и ближайшие дедлайны.',
								'Набросайте структуру проекта (схема/таблица/карта).',
							]}
						/>
						<Tip>
							Журнал — «единый источник правды»: обновляйте его каждую неделю.
						</Tip>
					</div>

					{/* Шаг 4 */}
					<div className='mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg'>
						<div className='flex items_center gap-2 text-sm font-medium text-emerald-400/90'>
							<span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs'>
								4
							</span>
							Шаг&nbsp;4
						</div>
						<h3 className='mt-3 text-xl font-semibold text-neutral-50 tracking-tight'>
							Базовый питч
						</h3>
						<p className='mt-2 text-neutral-300 leading-relaxed'>
							Подготовьте короткое устное описание (2–3 минуты) и краткий
							документ/слайды.
						</p>
						<Checklist
							items={[
								'Название игры.',
								'Жанр.',
								'Основная философская идея.',
								'Сюжетное ядро или концепция геймплея.',
								'Целевая аудитория.',
								'Уникальность проекта.',
							]}
						/>
					</div>

					{/* Шаг 5 */}
					<div className='mt-6 rounded-2xl border border-emerald-500/40 bg-neutral-900/70 px-6 py-6 shadow-lg'>
						<div className='flex items-center gap-2 text-sm font-medium text-emerald-400/90'>
							<span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs'>
								5
							</span>
							Шаг&nbsp;5
						</div>
						<h3 className='mt-3 text-xl font-semibold text-neutral-50 tracking-tight'>
							Итог
						</h3>
						<Checklist
							items={[
								'Презентация (7+ слайдов) с питчем игры.',
								'Первая версия проектного журнала.',
							]}
						/>
					</div>
				</Section>

				{/* Структура презентации */}
				<Section title='Структура презентации (минимум 7 слайдов)'>
					<Checklist
						items={[
							'Титульный: название команды и игры; философ/концепция; лого/арт/реф.',
							'Команда: участники, роли (аватары по желанию).',
							'Проблема / философская идея: ключевая мысль и почему именно она.',
							'Жанр и сеттинг: где и как разворачиваются события.',
							'Игровая механика / геймплей: что делает игрок, как идея отражается в механиках, 1–2 уникальные фишки.',
							'Целевая аудитория: для кого и почему им интересно.',
							'Уникальность проекта: чем выделяетесь, «вау-эффект».',
							'Планы / структура проекта: первые задачи, скрин журнала/доски.',
							'Заключение / девиз: слоган или ключевая мысль.',
						]}
					/>
				</Section>

				{/* Что сдаём */}
				<Section title='Что сдаём'>
					<ul className='grid gap-4 sm:grid-cols-2'>
						<li className='rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-5'>
							<div className='text-xs text-neutral-500'>ссылка</div>
							<div className='mt-2 text-neutral-300 leading-relaxed'>
								Презентация (Slides / PowerPoint / Figma) с питчем игры.
							</div>
						</li>
						<li className='rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-5'>
							<div className='text-xs text-neutral-500'>ссылка</div>
							<div className='mt-2 text-neutral-300 leading-relaxed'>
								Проектный журнал (Obsidian / можно иное) — страница команды с
								ролями, задачами и планом.
							</div>
						</li>
					</ul>
				</Section>

				{/* Материалы */}
				<Section
					title='Материалы'
					aside={
						<span className='text-sm text-neutral-500'>полезные ссылки</span>
					}
				>
					<ul className='space-y-3 text-neutral-300'>
						<li className='rounded-xl border border-neutral-800 bg-neutral-900/60 px-5 py-4'>
							<div className='text-sm text-neutral-400'>
								Метод Диснея (идеация в ролях)
							</div>
							<a
								href='https://habr.com/ru/companies/otus/articles/861986/'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 mt-1 text-emerald-300 hover:text-emerald-200'
							>
								Фасилитация стратегической сессии по методике Уолта Диснея →
							</a>
						</li>

						<li className='rounded-xl border border-neutral-800 bg-neutral-900/60 px-5 py-4'>
							<div className='text-sm text-neutral-400'>
								SCAMPER (проработка и вариации)
							</div>
							<a
								href='https://4brain.ru/blog/%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B8%D0%BA%D0%B0-scamper/'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 mt-1 text-emerald-300 hover:text-emerald-200'
							>
								Методика «SCAMPER» →
							</a>
						</li>

						<li className='rounded-xl border border-neutral-800 bg-neutral-900/60 px-5 py-4'>
							<div className='text-sm text-neutral-400'>
								«6 шляп» (оценка и выбор)
							</div>
							<a
								href='https://4brain.ru/blog/%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-%D1%88%D0%B5%D1%81%D1%82%D0%B8-%D1%88%D0%BB%D1%8F%D0%BF-%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F/'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 mt-1 text-emerald-300 hover:text-emerald-200'
							>
								Метод «Шесть шляп мышления» →
							</a>
						</li>

						<li className='rounded-xl border border-neutral-800 bg-neutral-900/60 px-5 py-4'>
							<div className='text-sm text-neutral-400'>
								Проектный журнал / доска задач
							</div>
							<a
								href='https://habr.com/ru/companies/oleg-bunin/articles/501370/'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 mt-1 text-emerald-300 hover:text-emerald-200'
							>
								Trello: система управления знаниями для небольшой IT-команды →
							</a>
						</li>
					</ul>
				</Section>

				{/* Навигация */}
				<div className='mt-12'>
					<a
						href={`${BASE}courses/intro-it/`}
						className='inline-flex items-center gap-2 rounded-lg border border-neutral-800 px-4 py-2 hover:bg-neutral-900'
					>
						← К курсу «Введение в IT»
					</a>
				</div>
			</main>

			<Footer />
		</div>
	)
}

createRoot(document.getElementById('root')).render(<Page />)
