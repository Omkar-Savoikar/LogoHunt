import { useState } from "react";
import Form from "./Form";

export default function Main() {
	const [imgSrc, setImgSrc] = useState("");
	const [imgAlt, setImgAlt] = useState("");

	return (
		<main className='mx-auto flex w-full grow sm:min-w-[450px] md:max-w-[900px]'>
			<div className='mt-10 flex w-full flex-col justify-between md:flex-row'>
				<div className='mx-auto w-10/12 md:w-1/2'>
					<p className='text-center text-xl font-bold'>Enter a Website to Fetch Its Logo</p>
					<Form setImgAlt={setImgAlt} setImgSrc={setImgSrc} />
				</div>
				<div className='mx-auto flex w-10/12 grow items-start justify-center pt-8 md:w-1/2 md:grow-0'>
					{imgSrc.length > 0 && (
						<img
							draggable={false}
							src={imgSrc}
							alt={imgAlt}
							className='aspect-square w-64 object-contain'
						/>
					)}
				</div>
			</div>
		</main>
	);
}
