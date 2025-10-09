export default function Section({ title, children, aside }) {
	return (
		<section className='mt-12'>
			<div className='flex items-end justify-between gap-4'>
				<h2 className='text-xl font-semibold'>{title}</h2>
				{aside}
			</div>
			<div className='mt-4'>{children}</div>
		</section>
	)
}
