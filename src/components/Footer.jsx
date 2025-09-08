export default function Footer() {
	return (
		<footer className='border-t border-neutral-800'>
			<div className='mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
				<div>© {new Date().getFullYear()} AW&nbsp;–&nbsp;Lab</div>
				<div>
					Связь:{' '}
					<a
						className='underline hover:text-neutral-300'
						href='mailto:ellreine@tpu.ru'
					>
						ellreine@tpu.ru
					</a>
				</div>
			</div>
		</footer>
	)
}
