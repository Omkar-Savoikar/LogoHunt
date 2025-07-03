import React, { Dispatch, SetStateAction, useState } from "react";

interface FormProps {
	setImgSrc: Dispatch<SetStateAction<string>>;
	setImgAlt: Dispatch<SetStateAction<string>>;
}

export default function Form({ setImgSrc, setImgAlt }: FormProps) {
	const [userInput, setUserinput] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserinput(event.target.value.trim());
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const trimmed = userInput.trim();
		if (trimmed.length === 0) {
			setImgSrc("");
			setImgAlt("");
			return;
		}
		setImgSrc(
			`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${userInput}&size=256`,
		);
		setImgAlt(`${userInput} logo`);
	};

	return (
		<form
			className='flex flex-col justify-center gap-4 p-5 text-lg'
			onSubmit={(e) => handleSubmit(e)}
			name='userform'
		>
			<label htmlFor='website' className='flex flex-col'>
				Website Name:
				<input
					className='rounded border border-gray-500 pl-1 shadow-2xs shadow-gray-700'
					name='website'
					placeholder='Enter website name'
					type='url'
					min='5'
					max='100'
					required
					autoFocus
					onChange={(e) => handleChange(e)}
				/>
			</label>
			<button
				type='submit'
				value='Submit'
				className='mx-auto w-32 cursor-pointer rounded border border-black bg-black text-white shadow shadow-black'
			>
				Submit
			</button>
		</form>
	);
}
