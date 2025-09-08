// src/components/CourseCard.jsx
export default function CourseCard({
	title,
	description,
	href,
	ready,
	icon = '📘',
}) {
	const canClick = !!ready
	const status = ready ? 'готово' : 'в разработке'
	const statusDot = ready ? 'bg-emerald-400/90' : 'bg-neutral-600'
	const statusText = ready ? 'text-emerald-300' : 'text-neutral-400'
	const cardHover = canClick
		? 'hover:bg-neutral-900'
		: 'opacity-70 cursor-not-allowed'

	return (
		<a
			href={canClick ? href : '#'}
			onClick={e => !canClick && e.preventDefault()}
			aria-disabled={!canClick}
			className={`group block h-full rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 transition ${cardHover}`}
		>
			{/* Верх: иконка + статус */}
			<div className='flex items-start justify-between gap-4'>
				<div className='rounded-2xl bg-neutral-800/70 border border-neutral-700/60 p-3 text-2xl shrink-0'>
					{icon}
				</div>
				<span
					className={`inline-flex items-center gap-2 text-xs ${statusText}`}
				>
					<span className={`h-2.5 w-2.5 rounded-full ${statusDot}`} />
					{status}
				</span>
			</div>

			{/* Текстовая часть */}
			<div className='mt-4'>
				<h3 className='text-lg font-semibold text-neutral-50 leading-tight'>
					{title}
				</h3>
				<p className='mt-2 text-sm text-neutral-400 leading-relaxed'>
					{description}
				</p>
			</div>

			{/* Низ: CTA всегда на одном месте */}
			<div className='mt-6 flex'>
				<span
					className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition
          ${
						canClick
							? 'border-neutral-700 bg-neutral-900 text-neutral-300 group-hover:bg-neutral-100 group-hover:text-neutral-950'
							: 'border-neutral-800 bg-neutral-900/60 text-neutral-500'
					}`}
				>
					Перейти
					<svg
						width='16'
						height='16'
						viewBox='0 0 24 24'
						className={canClick ? 'transition group-hover:translate-x-0.5' : ''}
					>
						<path
							d='M5 12h14M13 5l7 7-7 7'
							stroke='currentColor'
							strokeWidth='2'
							fill='none'
							strokeLinecap='round'
						/>
					</svg>
				</span>
			</div>
		</a>
	)
}
