export default function Footer() {
	return (
		<footer className='bg-gray-700 py-3 text-gray-200'>
			<div className='mx-auto flex flex-col gap-2 sm:min-w-[450px] md:max-w-[900px]'>
				<div className='text-center'>&#169; Omkar Savoikar - 2025</div>
				<div className='flex flex-row flex-wrap justify-center gap-8'>
					<a href='https://www.linkedin.com/in/omkar--savoikar' target='_blank' rel='noopener noreferrer'>
						<img src='/linkedin.png' alt='linkedin logo' width={20} />
					</a>
					<a href='https://www.github.com/Omkar-Savoikar/' target='_blank' rel='noopener noreferrer'>
						<img src='/github.png' alt='github logo' width={20} />
					</a>
					<a href='https://x.com/OmkarSavoikar/' target='_blank' rel='noopener noreferrer'>
						<img src='/x.png' alt='x logo' width={20} />
					</a>
					<a href='mailto:omkarsavoikar@gmail.com'>
						<img src='/gmail.png' alt='gmail logo' width={20} />
					</a>
					<a href='https://wa.me/919168813418' target='_blank' rel='noopener noreferrer'>
						<img src='/whatsapp.png' alt='whatsapp logo' width={20} />
					</a>
				</div>
			</div>
		</footer>
	);
}
