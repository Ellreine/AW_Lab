import { createRoot } from 'react-dom/client'
import '../index.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function Page() {
	return (
		<div className='min-h-dvh bg-neutral-950 text-neutral-100'>
			<Header />
			<main className='mx-auto max-w-6xl px-4 py-12'>
				<h1 className='text-3xl font-semibold'>Олимпиады и конкурсы</h1>
				<p className='mt-3 text-neutral-400'>
					Подборка актуальных олимпиад, хакатонов и конкурсов по IT, VR/AR и
					геймдеву.
				</p>

				<div className='mt-8 grid gap-4 sm:grid-cols-2'>
					{/* Добавляй карточки с мероприятиями здесь */}
					<div className='rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5'>
						<div className='text-sm text-neutral-400'>пример</div>
						<a
							className='block mt-1 underline hover:text-neutral-200'
							href='#'
							target='_blank'
						>
							Название олимпиады
						</a>
						<div className='mt-2 text-sm text-neutral-500'>
							дедлайн: 01.12.2025
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}
createRoot(document.getElementById('root')).render(<Page />)
