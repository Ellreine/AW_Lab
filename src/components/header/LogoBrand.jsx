import logo from '../../images/logo.png'

export default function LogoBrand({ base }) {
	return (
		<a href={base} className='flex items-center gap-3'>
			<img src={logo} alt='AW · Lab logo' className='h-9 w-9 object-contain' />
			<span className='font-semibold tracking-tight text-neutral-100'>
				AW · Lab
			</span>
		</a>
	)
}
