import Pill from '../ui/Pill.jsx'
import { fmt } from '../../utils/date.js'

const BASE = import.meta.env.BASE_URL || '/'

export default function LabCard({ courseSlug, lab }) {
	const href = `${BASE}courses/${courseSlug}/labs/${lab.slug}/`

	const statusLabel =
		lab.status === 'open' ? 'открыто' : lab.status === 'soon' ? 'скоро' : 'план'

	const statusColor =
		lab.status === 'open'
			? 'text-emerald-300/90'
			: lab.status === 'soon'
			? 'text-amber-300/90'
			: 'text-neutral-400'

	const canClick = lab.status === 'open'

	return (
		<a
			href={canClick ? href : '#'}
			onClick={e => !canClick && e.preventDefault()}
			className={`group flex flex-col justify-between h-full rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 transition ${
				canClick ? 'hover:bg-neutral-900' : 'opacity-60 cursor-not-allowed'
			}`}
		>
			{/* Верхняя часть */}
			<div className='flex-1 flex flex-col'>
				<div className='flex items-start justify-between gap-4'>
					<h3 className='font-medium text-neutral-50'>{lab.title}</h3>
					<span className={`text-sm ${statusColor} shrink-0`}>
						{statusLabel}
					</span>
				</div>

				<div className='mt-2 flex flex-wrap items-center gap-2 text-xs text-neutral-400'>
					{lab.start && <Pill>старт: {fmt(lab.start)}</Pill>}
					{lab.due && (
						<Pill
							className={
								lab.status === 'open'
									? 'border-red-500/50 bg-red-900/40 text-red-300'
									: ''
							}
						>
							дедлайн: {fmt(lab.due)}
						</Pill>
					)}
					{typeof lab.points === 'number' && <Pill>баллы: {lab.points}</Pill>}
				</div>

				{lab.goal && (
					<p className='mt-2 text-sm text-neutral-300 leading-relaxed'>
						{lab.goal}
					</p>
				)}
			</div>

			{/* Нижняя часть */}
			<div
				className={`mt-4 text-sm text-neutral-300 ${
					canClick
						? 'opacity-80 group-hover:opacity-100'
						: 'opacity-50 cursor-not-allowed'
				}`}
			>
				Открыть задание →
			</div>
		</a>
	)
}
