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
					<span className='text-neutral-300'>{t}</span>
				</li>
			))}
		</ul>
	)
}

/* ---------- PAGE ---------- */
function Page() {
	return (
		<div className='min-h-dvh bg-neutral-950 text-neutral-100'>
			<Header />

			<main className='mx-auto max-w-6xl px-4 py-12'>
				{/* Хлебные крошки */}
				<nav className='text-sm text-neutral-400'>
					<a href={`${BASE}`}>Главная</a>
					<span className='px-2'>/</span>
					<a href={`${BASE}courses/vr-tools/`}>
						Инструментальные средства разработки VR-приложений
					</a>
					<span className='px-2'>/</span>
					<span className='text-neutral-300'>
						Лабораторная работа №1 — Концепт игры
					</span>
				</nav>

				{/* Заголовок + мета */}
				<div className='mt-8 border-b border-neutral-800 pb-6'>
					<div className='flex flex-wrap items-start justify-between gap-6'>
						<div className='max-w-3xl'>
							<div className='text-sm font-medium text-emerald-400 uppercase tracking-wide mb-2'>
								Лабораторная работа №1
							</div>
							<h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-50 leading-tight'>
								Концепт игры · питч, ядро, механики и каркас сцены
							</h1>
						</div>
						<div className='flex flex-col sm:flex-row sm:items-center gap-2'>
							<Pill>старт: 08.09.2025</Pill>
							<Pill className='border-red-500/50 bg-red-900/40 text-red-300'>
								дедлайн: 22.09.2025
							</Pill>
							<Pill>⏱ 2 недели</Pill>
						</div>
					</div>
				</div>

				{/* Цель */}
				<Section title='Цель работы'>
					<p className='text-neutral-300 leading-relaxed'>
						Сформировать{' '}
						<span className='text-neutral-100 font-medium'>
							концепт-документ
						</span>{' '}
						игры и краткий питч-дек, которые станут источником требований для
						последующих лабораторных работ (сцена, управление, интеракции, AI).
						На этом этапе реализации в движке ещё нет — только дизайн и
						документация.
					</p>
				</Section>

				{/* Критерии оценивания */}
				<Section title='Критерии оценивания (что проверяем)'>
					<Checklist
						items={[
							'Есть короткий питч (логлайн + 2–3 абзаца): что это за игра и почему она интересна.',
							'Определены жанр, целевая аудитория, платформа/устройства (ПК/VR/мобайл).',
							'Описан сеттинг и референсы: 5–10 визуальных/аудио примеров с подписью «зачем».',
							'Сформулирована минимальная игровая петля (1–3 шага) и fantasy/эмоциональный опыт.',
							'Список базовых механик с приоритетами: must / should / could (5–7 пунктов).',
							'Намечен каркас уровня/сцены (эскиз/схема с подписями; ключевые зоны и путь игрока).',
							'Прописаны риски/ограничения (3–5) и критерии успеха (1–2 метрики).',
						]}
					/>
				</Section>

				{/* Структура документа */}
				<Section
					title='Структура концепт-документа'
					aside={
						<span className='text-sm text-neutral-500'>
							ориентир — 3–6 страниц
						</span>
					}
				>
					<Checklist
						items={[
							'Название проекта + логлайн (1–2 предложения).',
							'Жанр, целевая аудитория, платформа; референсы (ссылки/картинки).',
							'Core fantasy и минимальная игровая петля (Loop).',
							'Базовые механики (таблица с приоритетами must/should/could).',
							'Сеттинг и визуальный тон (moodboard в 1–2 коллажа).',
							'Каркас сцены/уровня: схема, зоны, ориентиры, старт/финиш, «момент вау».',
							'План рисков и допущений; метрики успеха (что покажет, что мы идём верно).',
						]}
					/>
					<Tip>
						Держите документ «живым»: обновляйте по мере обсуждений. Важнее
						ясность и конкретика, чем объём.
					</Tip>
				</Section>

				{/* Задание — пошагово */}
				<Section
					title='Задание'
					aside={<span className='text-sm text-neutral-500'>5 шагов</span>}
				>
					{/* Шаг 1 */}
					<div className='rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg'>
						<div className='flex items-center gap-2 text-sm font-medium text-emerald-400/90'>
							<span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs'>
								1
							</span>
							Шаг 1
						</div>
						<h3 className='mt-3 text-xl font-semibold text-neutral-50 tracking-tight'>
							Референсы и исследование
						</h3>
						<Checklist
							items={[
								'Подбор игр/фильмов/музыки/арта по теме (5–10 штук) — кратко, что берём из каждого.',
								'Соберите быстрый коллаж (moodboard) в Miro/Pinterest/слайдах.',
								'Определите платформу (ПК/VR) и ограничения (время/команда/ассеты).',
							]}
						/>
					</div>

					{/* Шаг 2 */}
					<div className='mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg'>
						<div className='flex items-center gap-2 text-sm font-medium text-emerald-400/90'>
							<span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs'>
								2
							</span>
							Шаг 2
						</div>
						<h3 className='mt-3 text-xl font-semibold text-neutral-50 tracking-tight'>
							Питч и core fantasy
						</h3>
						<Checklist
							items={[
								'Напишите логлайн и 2–3 абзаца питча (без лора на 10 страниц).',
								'Сформулируйте переживание игрока: «игрок чувствует себя … потому что …».',
								'Определите целевую аудиторию и «крючок» (чем возьмём за 30 секунд).',
							]}
						/>
					</div>

					{/* Шаг 3 */}
					<div className='mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg'>
						<div className='flex items-center gap-2 text-sm font-medium text-emerald-400/90'>
							<span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs'>
								3
							</span>
							Шаг 3
						</div>
						<h3 className='mt-3 text-xl font-semibold text-neutral-50 tracking-tight'>
							Мини-петля и механики
						</h3>
						<Checklist
							items={[
								'Опишите минимальную игровую петлю: 1) действие, 2) ответ игры, 3) усиление интереса.',
								'Составьте список 5–7 механик и проставьте приоритеты must/should/could.',
								'Подумайте про управление и интерфейс (очень кратко — для следующей ЛР).',
							]}
						/>
					</div>

					{/* Шаг 4 */}
					<div className='mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg'>
						<div className='flex items-center gap-2 text-sm font-medium text-emerald-400/90'>
							<span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs'>
								4
							</span>
							Шаг 4
						</div>
						<h3 className='mt-3 text-xl font-semibold text-neutral-50 tracking-tight'>
							Каркас уровня/сцены
						</h3>
						<Checklist
							items={[
								'Набросайте схему уровня: старт, ключевые точки интереса, «момент вау».',
								'Опишите, какие объекты точно будут нужны в ЛР-2 (минимальный набор ассетов).',
								'Укажите предполагаемое освещение/настроение (день/ночь/цвет).',
							]}
						/>
						<Tip>
							Эта схема станет прямым чек-листом для ЛР-2 — избегаем двойной
							работы.
						</Tip>
					</div>

					{/* Шаг 5 */}
					<div className='mt-6 rounded-2xl border border-emerald-500/40 bg-neutral-900/70 px-6 py-6 shadow-lg'>
						<div className='flex items-center gap-2 text-sm font-medium text-emerald-400/90'>
							<span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs'>
								5
							</span>
							Шаг 5
						</div>
						<h3 className='mt-3 text-xl font-semibold text-neutral-50 tracking-tight'>
							Риски, метрики и питч-дек
						</h3>
						<Checklist
							items={[
								'Список рисков: время, навыки, ассеты, производительность, VR-контроллеры и т.п.',
								'Метрики успеха (1–2): «готова сцена», «игровая петля читается», «FPS ≥ …».',
								'Соберите 7–10 слайдов для устной защиты (ключевые страницы из документа).',
							]}
						/>
					</div>
				</Section>

				{/* Что сдаём */}
				<Section title='Что сдаём'>
					<ul className='grid gap-4 sm:grid-cols-2'>
						<li className='rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-5'>
							<div className='text-xs text-neutral-500'>документ</div>
							<div className='mt-2 text-neutral-300 leading-relaxed'>
								Концепт-документ (PDF/Notion/Obsidian) с разделами из «Структуры
								документа». Ссылки на референсы и материалы — кликабельны.
							</div>
						</li>
						<li className='rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-5'>
							<div className='text-xs text-neutral-500'>презентация</div>
							<div className='mt-2 text-neutral-300 leading-relaxed'>
								Питч-дек (7–10 слайдов) для устной защиты. Дополнительно
								приветствуется moodboard/коллаж в конце.
							</div>
						</li>
					</ul>
				</Section>

				{/* Навигация */}
				<div className='mt-12'>
					<a
						href={`${BASE}courses/vr-tools/`}
						className='inline-flex items-center gap-2 rounded-lg border border-neutral-800 px-4 py-2 hover:bg-neutral-900'
					>
						← К курсу «Инструментальные средства разработки VR-приложений»
					</a>
				</div>
			</main>

			<Footer />
		</div>
	)
}

createRoot(document.getElementById('root')).render(<Page />)
