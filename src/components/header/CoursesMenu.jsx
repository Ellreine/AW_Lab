export default function CoursesMenu({
	courses,
	base,
	dense = false,
	onItemClick,
}) {
	const itemPad = dense ? 'px-2 py-1' : 'px-3 py-2'
	return (
		<ul className='space-y-1'>
			{courses.map(c => {
				const href = `${base}courses/${c.slug}/`
				const disabled = !c.ready
				return (
					<li key={c.slug}>
						<a
							href={disabled ? '#' : href}
							onClick={e => {
								if (disabled) {
									e.preventDefault()
									return
								}
								onItemClick?.()
							}}
							aria-disabled={disabled}
							className={`flex items-center ${itemPad} rounded-lg transition
                ${
									disabled
										? 'text-neutral-500 cursor-not-allowed'
										: 'text-neutral-200 hover:bg-neutral-800/70'
								}`}
						>
							{/* слева: кружок + название */}
							<span className='flex items-center gap-3 min-w-0 flex-1'>
								<span
									className={`inline-block h-2.5 w-2.5 rounded-full shrink-0 flex-none
                  ${disabled ? 'bg-neutral-600' : 'bg-emerald-400/80'}`}
								/>
								{/* название может переноситься, но не давит правый слот */}
								<span className='leading-tight'>{c.title}</span>
							</span>

							{/* справа: стрелка ИЛИ бейдж «в разработке» */}
							{disabled ? (
								<span className='ml-3 text-[11px] text-neutral-500 whitespace-nowrap shrink-0 leading-none rounded-full border border-neutral-700 px-2 py-0.5'>
									в разработке
								</span>
							) : (
								<svg
									width='16'
									height='16'
									viewBox='0 0 24 24'
									className='opacity-70 shrink-0 ml-3'
								>
									<path
										d='M5 12h14M13 5l7 7-7 7'
										stroke='currentColor'
										strokeWidth='2'
										fill='none'
										strokeLinecap='round'
									/>
								</svg>
							)}
						</a>
					</li>
				)
			})}
		</ul>
	)
}
