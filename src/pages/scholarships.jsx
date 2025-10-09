import { createRoot } from 'react-dom/client'
import '../index.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function Page() {
	return (
		<div className='min-h-dvh bg-neutral-950 text-neutral-100'>
			<Header />
			<main className='mx-auto max-w-6xl px-4 py-12'>
				<h1 className='text-3xl font-semibold'>Стипендии</h1>
				<p className='mt-3 text-neutral-400'>
					Информация о стипендиях, грантах и поддержке для студентов.
				</p>

				<div className='mt-8 space-y-4'>
					{/* Добавляй блоки со стипендиями */}
					<div className='rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5'>
						<div className='font-medium'>Пример стипендии</div>
						<p className='mt-1 text-neutral-400 text-sm'>
							Краткое описание условий и сроков.
						</p>
						<a
							className='mt-2 inline-block underline hover:text-neutral-200'
							href='#'
							target='_blank'
						>
							Подробнее
						</a>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}
createRoot(document.getElementById('root')).render(<Page />)
