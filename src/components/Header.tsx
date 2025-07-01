export default function Header() {
	return (
		<header className='flex w-full flex-col gap-5 bg-gray-700 py-3 text-gray-200'>
			<div className='flex flex-row items-center justify-center gap-5'>
				<img src='/favicon.ico' alt='logo' width={40} className='pt-2' />
				<h1 className='text-5xl font-black'>LogoHunt</h1>
			</div>
			<div className='text-center text-2xl font-extrabold'>Hunt it. Fetch it. LogoHunt it.</div>
		</header>
	);
}
