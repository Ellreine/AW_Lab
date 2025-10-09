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

	// нормализуем расписания
	const schedules =
		Array.isArray(lab.schedules) && lab.schedules.length > 0
			? lab.schedules
			: lab.start && lab.due
			? [{ group: 'общая', start: lab.start, due: lab.due }]
			: []

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

				{/* блок с дедлайнами */}
				<div className='mt-2 flex flex-col gap-1 text-xs text-neutral-400'>
					{schedules.map(s => (
						<div key={s.group} className='flex flex-wrap items-center gap-2'>
							<Pill>
								{s.group}: старт {fmt(s.start)}
							</Pill>
							<Pill
								className={
									lab.status === 'open'
										? 'border-red-500/50 bg-red-900/40 text-red-300'
										: ''
								}
							>
								дедлайн: {fmt(s.due)}
							</Pill>
						</div>
					))}
				</div>

				{lab.goal && (
					<p className='mt-2 text-sm text-neutral-300 leading-relaxed'>
						{lab.goal}
					</p>
				)}
			</div>

			{/* Нижняя часть */}
			<div
				className={`mt-4 flex items-center justify-between text-sm text-neutral-300 ${
					canClick
						? 'opacity-80 group-hover:opacity-100'
						: 'opacity-50 cursor-not-allowed'
				}`}
			>
				<span>Открыть задание →</span>
				{typeof lab.points === 'number' && <Pill>баллы: {lab.points}</Pill>}
			</div>
		</a>
	)
}
