export default function DegreeCard({
	title,
	description,
	href,
	accent = 'from-emerald-400/20 via-emerald-400/10 to-transparent',
	icon = '🎓',
	disabled = false,
}) {
	const canClick = !disabled && href && href !== '#'

	return (
		<a
			href={canClick ? href : '#'}
			onClick={e => !canClick && e.preventDefault()}
			aria-disabled={!canClick}
			className={`group relative h-full rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/60 transition shadow-[0_0_0_1px_rgba(255,255,255,0.02)] overflow-hidden
        ${canClick ? '' : 'cursor-not-allowed opacity-75'}`}
		>
			{/* Мягкий акцентный градиент */}
			<div
				className={`pointer-events-none absolute -inset-x-16 -top-24 h-48 blur-3xl bg-gradient-to-br ${accent}`}
			/>

			{/* Контент — строгий флекс-стек */}
			<div className='relative p-7 sm:p-8 h-full flex flex-col'>
				{/* Иконка */}
				<div className='rounded-2xl bg-neutral-800/70 border border-neutral-700/60 p-3 text-2xl w-max'>
					{icon}
				</div>

				{/* Текстовый блок с фиксированными «слотами» под высоту */}
				<div className='mt-4 flex-1'>
					{/* Заголовок — резерв под 2 строки */}
					<h3 className='text-xl sm:text-2xl font-semibold tracking-tight text-neutral-50 leading-snug min-h-[3.25rem] sm:min-h-[3.5rem] flex items-start'>
						<span className='break-words'>{title}</span>
					</h3>

					{/* Описание — резерв под 2 строки */}
					<p className='mt-2 text-sm sm:text-base text-neutral-400 leading-relaxed min-h-[2.5rem] sm:min-h-[2.75rem] overflow-hidden'>
						{description}
					</p>
				</div>

				{/* CTA всегда внизу */}
				<div className='mt-6'>
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
							className={
								canClick ? 'transition group-hover:translate-x-0.5' : ''
							}
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
			</div>
		</a>
	)
}
