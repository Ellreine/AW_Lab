import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import '../../../../index.css'
import Header from '../../../../components/Header.jsx'
import Footer from '../../../../components/Footer.jsx'
import Pill from '../../../../components/ui/Pill.jsx'

import ref1 from '../../../../images/courses/vr-tools/lab-1-scene/ref1.jpg'
import ref2 from '../../../../images/courses/vr-tools/lab-1-scene/ref2.jpg'
import ref3 from '../../../../images/courses/vr-tools/lab-1-scene/ref3.jpg'
import ref4 from '../../../../images/courses/vr-tools/lab-1-scene/ref4.jpg'
import ref5 from '../../../../images/courses/vr-tools/lab-1-scene/ref5.jpg'
import ref6 from '../../../../images/courses/vr-tools/lab-1-scene/ref6.jpg'
import ref7 from '../../../../images/courses/vr-tools/lab-1-scene/ref7.jpg'
import ref8 from '../../../../images/courses/vr-tools/lab-1-scene/ref8.jpg'

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

function Slider({ items }) {
	const [activeImg, setActiveImg] = useState(null)

	return (
		<div className='relative'>
			{/* Лента картинок */}
			<div
				id='refstrip'
				className='flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide'
				style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Firefox + IE
			>
				{items.map((it, i) => (
					<div
						key={i}
						className='snap-start shrink-0 w-64 h-36 rounded-xl border border-neutral-800 overflow-hidden cursor-pointer'
						onClick={() => setActiveImg(it.img)}
					>
						<img
							src={it.img}
							alt={`reference-${i + 1}`}
							className='w-full h-full object-cover'
						/>
					</div>
				))}
			</div>

			{/* Стрелки прокрутки */}
			<div className='flex items-center justify-center mt-3'>
				<div className='flex gap-2'>
					<button
						onClick={() =>
							document
								.getElementById('refstrip')
								.scrollBy({ left: -400, behavior: 'smooth' })
						}
						className='rounded-md border border-neutral-800 px-3 py-1 text-neutral-300 hover:bg-neutral-900'
					>
						←
					</button>
					<button
						onClick={() =>
							document
								.getElementById('refstrip')
								.scrollBy({ left: 400, behavior: 'smooth' })
						}
						className='rounded-md border border-neutral-800 px-3 py-1 text-neutral-300 hover:bg-neutral-900'
					>
						→
					</button>
				</div>
			</div>

			{/* Лайтбокс */}
			{activeImg && (
				<div
					className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6'
					onClick={() => setActiveImg(null)}
				>
					<img
						src={activeImg}
						alt='full-view'
						className='max-w-full max-h-full rounded-lg shadow-lg'
					/>
				</div>
			)}

			{/* Скрываем скроллбар в Chrome/Safari */}
			<style jsx>{`
				#refstrip::-webkit-scrollbar {
					display: none;
				}
			`}</style>
		</div>
	)
}

// Массив референсов
const references = [
	{
		img: ref1,
		title: 'UI пример — стартовое меню',
		caption: 'Из Game UI Database',
		href: 'https://gameuidatabase.com/gameData.php?id=664&autoload=27437',
	},
	{
		img: ref2,
		title: 'UI пример — настройки',
		caption: 'Из Game UI Database',
		href: 'https://gameuidatabase.com/gameData.php?id=60&autoload=1268',
	},
	{
		img: ref3,
		title: 'UI пример — кредиты',
		caption: 'Из Game UI Database',
		href: 'https://gameuidatabase.com/gameData.php?id=381&autoload=13386',
	},
	{
		img: ref4,
		title: 'Пример работы с метриками',
		caption: 'Статья на Habr',
		href: 'https://habr.com/ru/articles/754102/',
	},
	{
		img: ref5,
		title: 'UE5 Style Guide',
		caption: 'GitHub репозиторий',
		href: 'https://github.com/Allar/ue5-style-guide',
	},
	{
		img: ref6,
		title: 'Unity ProBuilder',
		caption: 'Документация Unity',
		href: 'https://docs.unity3d.com/Manual/ProBuilder.html',
	},
	{
		img: ref7,
		title: 'UE5 BSP / Modeling Tools',
		caption: 'Документация Unreal',
		href: 'https://docs.unrealengine.com/5.0/en-US/modeling-tools-in-unreal-engine/',
	},
	{
		img: ref8,
		title: 'Profiler в Unity/UE',
		caption: 'Документация',
		href: 'https://docs.unity3d.com/Manual/Profiler.html',
	},
]

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

function MechanicsTable({ items }) {
	return (
		<div className='overflow-x-auto'>
			<table className='min-w-full border border-neutral-800 text-sm'>
				<thead className='bg-neutral-900/60 text-neutral-400'>
					<tr>
						<th className='px-4 py-2 text-left font-medium'>Механика</th>
						<th className='px-4 py-2 text-center font-medium'>Баллы</th>
					</tr>
				</thead>
				<tbody>
					{items.map((m, i) => (
						<tr
							key={i}
							className='border-t border-neutral-800 hover:bg-neutral-900/40'
						>
							<td className='px-4 py-2 text-neutral-300'>{m.name}</td>
							<td className='px-4 py-2 text-emerald-400 text-center'>
								{m.points}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

/* ---------- PAGE ---------- */
function Page() {
	const mechanics = [
		{ name: '⭐ Импорт готовых ассетов (спрайты/3D-модели)', points: 5 },
		{
			name: '⭐ Размещение объектов на сцене (ландшафт, стены, платформы)',
			points: 6,
		},
		{
			name: '⭐ Создание террейна и работа с инструментами (скульптинг, текстурирование)',
			points: 10,
		},
		{ name: '⭐ Настройка skysphere / skybox', points: 6 },
		{ name: '⭐ Directional Light (дневное освещение)', points: 6 },
		{ name: 'Дополнительные источники света (Point/Spot/Area)', points: 6 },
		{ name: 'Применение материалов и текстур', points: 7 },
		{
			name: 'Настройка камеры / Player Start (правильный первый кадр)',
			points: 8,
		},
		{ name: 'Создание иерархии объектов (логическая группировка)', points: 6 },
		{ name: 'Правильный нейминг ассетов и объектов', points: 5 },
		{ name: 'Главное меню: Start · Settings · Credits · Exit', points: 9 },
		{ name: 'Тестовая сцена с метриками (grid-material, шаблон)', points: 9 },
		{ name: 'Расчёт и схема метрик (ширина/высота, зоны игрока)', points: 9 },
		{ name: 'Проверка сцены в Profiler (fps, draw calls)', points: 8 },
		{ name: '⭐ Экспорт первого билда (ПК/WebGL/Android)', points: 10 },
	]

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
						Лабораторная работа №2 — Локация и базовый уровень
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
								Локация и базовый уровень (левел-дизайн)
							</h1>
						</div>
						<div className='flex flex-col sm:flex-row sm:items-center gap-2'>
							<Pill>старт: 01.09.2025</Pill>
							<Pill className='border-red-500/50 bg-red-900/40 text-red-300'>
								дедлайн: 15.09.2025
							</Pill>
							<Pill>⏱ 2 недели</Pill>
						</div>
					</div>
				</div>

				{/* Цель */}
				<Section title='Цель работы'>
					<p className='text-neutral-300 leading-relaxed'>
						Освоить инструменты движка через работу с локацией — террейном,
						освещением, меню и построением игрового уровня по метрикам.
					</p>
				</Section>

				{/* Фокус */}
				<Section title='Фокус (основные направления работы)'>
					<Checklist
						items={[
							'Построение сцены в 3D с использованием террейна.',
							'Настройка skysphere + Directional Light для освещения сцены.',
							'Создание структуры проекта и иерархии объектов на сцене.',
							'Использование метрик для построения уровня (ширина проходов, высота препятствий и т.п.).',
						]}
					/>
				</Section>

				{/* Задачи */}
				<Section title='Задачи (обязательные элементы)'>
					<Checklist
						items={[
							'Спроектировать уровень: блок-аут (эскиз/схема), крит-путь и ключевые зоны.',
							'Определить и зафиксировать метрики уровня: рост персонажа, высота прыжка, ширина проходов, высота ступеней, длина прыжка (приложить расчёты).',
							'Создать 3D-сцену с террейном.',
							'Добавить скайбокс и источник Directional Light для глобального освещения.',
							'Сделать главное меню с пунктами: Начать игру · Настройки · Кредиты · Выход (ориентироваться на примеры UI из Game UI Database).',
							'Подготовить тестовую сцену с метриками: использовать материал-сетку (grid/material), приложить схему или расчёты по метрикам (ссылка: статья на Habr).',
							'Собрать уровень из своего концепта, проверив соответствие метрикам (например, ширина дверного проёма, высота ступеней).',
							'Открыть Profiler и зафиксировать показатели нагрузки (fps, draw calls, память).',
							'Ознакомиться с: BSP / ProBuilder, навигацией по viewport, Local и World coords, использованием Pivot & Snap (эти знания можно показать в отчёте или устной защите).',
							'Настроить иерархию объектов на сцене (логическая группировка).',
							'Применить правильный нейминг (названия файлов, материалов, ассетов и объектов на сцене в едином стиле).',
						]}
					/>
				</Section>

				{/* Механики */}
				<Section
					title='Список механик'
					aside={
						<span className='text-sm text-neutral-500'>
							максимум 120 баллов
						</span>
					}
				>
					<MechanicsTable items={mechanics} />

					<div className='mt-4 rounded-lg border border-neutral-800 bg-neutral-900/50 px-5 py-4 text-sm leading-relaxed'>
						<p className='text-neutral-400 font-medium mb-1'>
							Правила оценивания:
						</p>
						<p className='text-neutral-300'>
							В каждой лабораторной можно набрать максимум{' '}
							<span className='text-emerald-400 font-semibold'>120 баллов</span>
							. Некоторые ⭐ механики обязательны к выполнению. Дальше вы сами
							выбираете дополнительные механики под свой проект.
						</p>

						<ul className='mt-3 space-y-1 text-neutral-200'>
							<li>
								✔{' '}
								<span className='text-emerald-400 font-medium'>
									55–69 баллов
								</span>{' '}
								— зачёт на <strong>3 (удовлетворительно)</strong>
							</li>
							<li>
								✔{' '}
								<span className='text-emerald-400 font-medium'>
									70–84 балла
								</span>{' '}
								— зачёт на <strong>4 (хорошо)</strong>
							</li>
							<li>
								✔{' '}
								<span className='text-emerald-400 font-medium'>85+ баллов</span>{' '}
								— зачёт на <strong>5 (отлично)</strong>
							</li>
						</ul>

						<p className='mt-3 text-neutral-400 text-xs'>
							Вы сами решаете, сколько и какие механики реализовать, исходя из
							того, на какую оценку хотите выйти.
						</p>
					</div>
				</Section>

				{/* Референсы — слайдер */}
				<Section title='Референсы сцен'>
					<Slider items={references} />
				</Section>
				{/* Полезные материалы */}
				<Section title='Полезные материалы'>
					<ul className='grid gap-3 sm:grid-cols-2'>
						<li className='rounded-lg border border-neutral-800 bg-neutral-900/50 p-4'>
							<a
								className='text-emerald-400 hover:underline'
								href='https://habr.com/ru/articles/754102/'
								target='_blank'
								rel='noreferrer'
							>
								Метрики левел-дизайна (Habr)
							</a>
							<div className='mt-1 text-sm text-neutral-400'>
								Стандарты размеров: ширина проходов, высота ступеней, размеры
								модулей — основа удобного левел-дизайна.
							</div>
						</li>
						<li className='rounded-lg border border-neutral-800 bg-neutral-900/50 p-4'>
							<a
								className='text-emerald-400 hover:underline'
								href='https://github.com/Allar/ue5-style-guide'
								target='_blank'
								rel='noreferrer'
							>
								UE5 Style Guide (Allar)
							</a>
							<div className='mt-1 text-sm text-neutral-400'>
								Правила нейминга, структура папок и иерархия проекта для чистого
								и командного пайплайна.
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
