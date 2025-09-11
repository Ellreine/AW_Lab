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
					<a href={`${BASE}courses/intro-it/`}>Введение в IT</a>
					<span className='px-2'>/</span>
					<span className='text-neutral-300'>
						Лабораторная работа №1 — Самопрезентация + персональная страница
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
								{' '}
								Самопрезентация + персональная страница{' '}
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
						Научиться кратко и структурированно представлять себя; освоить
						базовые навыки создания веб-страницы на HTML и CSS; опубликовать
						результат через GitHub Pages. Презентация защищается{' '}
						<span className='text-neutral-100'>устно</span> с короткой сессией
						вопросов по HTML/CSS.
					</p>
				</Section>

				{/* Задание */}
				<Section
					title='Задание'
					aside={
						<span className='text-sm text-neutral-500'>4 блока работы</span>
					}
				>
					{/* Шаг 1 */}
					<div className='rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg'>
						{/* Заголовок блока */}
						<div className='flex items-center gap-2 text-sm font-medium text-emerald-400/90'>
							<span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs'>
								1
							</span>
							Шаг&nbsp;1
						</div>

						<h3 className='mt-3 text-xl font-semibold text-neutral-50 tracking-tight'>
							Подготовка текста самопрезентации
						</h3>

						{/* Описание */}
						<p className='mt-3 text-neutral-300 leading-relaxed'>
							Составьте короткий связный текст (несколько абзацев), который
							станет основой для устного выступления и вашей персональной
							веб-страницы.
						</p>

						{/* Чеклист */}
						<div className='mt-5'>
							<Checklist
								items={[
									'Кто вы: имя, чем занимаетесь (учёба / работа).',
									'Интересы и хобби; вдохновляющие проекты / люди.',
									'Сильные стороны и навыки (например: HTML, Unity, 3D, музыка и т.д.).',
									'Командная роль (лидер, генератор идей, дизайнер, программист и др.).',
									'Образование и опыт: курсы, проекты, хакатоны, волонтёрство.',
									'Любимые игры / книги / фильмы / музыка (по желанию).',
									'Текущие проекты или хобби-проекты, зона роста и ожидания от курса.',
									'Короткий девиз или личная фраза.',
								]}
							/>
						</div>

						{/* Подсказка */}
						<Tip>
							Текст должен читаться легко — избегайте перегруза. Представьте,
							что вас читают впервые и хотят быстро понять, кто вы.
						</Tip>
					</div>

					{/* Шаг 2 */}
					<div className='mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg'>
						{/* Заголовок блока */}
						<div className='flex items-center gap-2 text-sm font-medium text-emerald-400/90'>
							<span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs'>
								2
							</span>
							Шаг&nbsp;2
						</div>

						<h3 className='mt-3 text-xl font-semibold text-neutral-50 tracking-tight'>
							Презентация (3–5 минут, устная защита + вопросы)
						</h3>

						{/* Чеклист */}
						<div className='mt-5'>
							<Checklist
								items={[
									'Сделайте ≥7 слайдов (Google Slides / PowerPoint / Figma).',
									'Включите ключевые пункты самопрезентации; добавьте фото или аватар.',
									'Допускается креатив: иллюстрации, мемы, оформление в стиле будущего проекта.',
									'Будьте готовы к 2–3 простым вопросам по HTML и CSS (см. ниже).',
								]}
							/>
						</div>
					</div>

					{/* Шаг 3 */}
					<div className='mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg'>
						{/* Заголовок блока */}
						<div className='flex items-center gap-2 text-sm font-medium text-emerald-400/90'>
							<span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs'>
								3
							</span>
							Шаг&nbsp;3
						</div>

						<h3 className='mt-3 text-xl font-semibold text-neutral-50 tracking-tight'>
							Персональная веб-страница (HTML + CSS, дополнение к презентации)
						</h3>

						<div className='mt-4 grid gap-6 sm:grid-cols-2'>
							{/* Обязательные элементы */}
							<div>
								<div className='text-neutral-400 text-sm'>
									Обязательные элементы
								</div>
								<Checklist
									items={[
										'Фото или аватар на странице.',
										'Заголовок страницы и короткое интро (1–2 абзаца).',
										'Структура из разделов: «Обо мне», «Интересы», «Контакты».',
										'Кликабельные ссылки на GitHub/почту/соцсети.',
									]}
								/>
							</div>

							{/* Стилизация */}
							<div>
								<div className='text-neutral-400 text-sm'>Стилизация</div>
								<Checklist
									items={[
										'Собственные цвета и шрифты; аккуратные отступы.',
										'Базовая сетка (flex или grid) для раскладки.',
										'Эффекты :hover для ссылок/кнопок.',
										'Можно использовать фреймворк (Tailwind / Bootstrap и др.).',
									]}
								/>
							</div>
						</div>
					</div>

					{/* Шаг 4 */}
					<div className='mt-6 rounded-2xl border border-emerald-500/40 bg-neutral-900/70 px-6 py-6 shadow-lg'>
						{/* Заголовок блока */}
						<div className='flex items-center gap-2 text-sm font-medium text-emerald-400/90'>
							<span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs'>
								4
							</span>
							Шаг&nbsp;4
						</div>

						<h3 className='mt-3 text-xl font-semibold text-neutral-50 tracking-tight'>
							Публикация на GitHub Pages
						</h3>

						<p className='mt-2 text-neutral-300 leading-relaxed'>
							Завершающий этап — сделать ваш проект доступным онлайн. Это
							позволит легко поделиться результатом с преподавателем и командой.
						</p>

						<div className='mt-4'>
							<Checklist
								items={[
									'Создайте новый репозиторий и загрузите туда свой проект.',
									'В настройках включите GitHub Pages (ветка main или папка docs).',
									'Проверьте, что сайт открывается по сгенерированной ссылке.',
									'Добавьте ссылку в README вашего репозитория.',
									'По желанию: вставьте QR-код со ссылкой в презентацию.',
								]}
							/>
						</div>

						<div className='mt-4 rounded-lg border border-neutral-800 bg-neutral-950/40 p-3 text-sm text-neutral-400'>
							💡 Совет: при первой публикации GitHub Pages может потребоваться
							2–5 минут, чтобы сайт стал доступен.
						</div>
					</div>
				</Section>

				{/* Примерные вопросы на защите */}
				<Section title='Примеры вопросов на защите (по HTML/CSS)'>
					<Checklist
						items={[
							'Что означает <!DOCTYPE html> в начале документа?',
							'Для чего нужен тег <head> и что обычно в нём размещают?',
							'Как вставить картинку на страницу?',
							'Чем отличается тег <h1> от <p>?',
							'Как задать цвет текста через CSS?',
							'Как сделать ссылку кликабельной (какой тег используется)?',
							'Что делает свойство background-color?',
							'Как подключить внешний CSS-файл к HTML-странице?',
						]}
					/>
				</Section>

				{/* Что сдаём */}
				<Section title='Что сдаём'>
					<ul className='grid gap-4 sm:grid-cols-2'>
						<li className='rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-5'>
							<div className='text-xs text-neutral-500'>ссылка</div>
							<div className='mt-2 text-neutral-300 leading-relaxed'>
								Презентация (Slides / PowerPoint / Figma). Защита проходит{' '}
								<span className='text-neutral-100'>устно</span>.
							</div>
						</li>
						<li className='rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-5'>
							<div className='text-xs text-neutral-500'>ссылка</div>
							<div className='mt-2 text-neutral-300 leading-relaxed'>
								GitHub-репозиторий + опубликованный сайт (GitHub Pages). Ссылку
								на сайт добавить в README.
							</div>
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
