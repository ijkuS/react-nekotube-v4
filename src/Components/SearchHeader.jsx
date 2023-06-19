import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { LuSearch } from 'react-icons/lu';
import { IoLogoYoutube } from 'react-icons/io';

export default function SearchHeader() {
	const { keyword } = useParams();
	const [text, setText] = useState('');
	const navigate = useNavigate();

	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/videos/${text}`);
	};
	useEffect(() => setText(keyword || ''), [keyword]);

	return (
		<section className='fixed top-0 left-0 right-0 bg-zinc-900 z-50'>
			<header className='flex items-center p-4 border-b border-zinc-600'>
				<Link to='/' className='flex align-middle ml-2'> {/* //lg:ml-20 */}
					<IoLogoYoutube className='text-4xl text-brand mr-2' />
					<h1 className='font-bold text-3xl'>NekoTube</h1>
				</Link>

				<form
					className='w-full flex justify-center'
					onSubmit={handleSubmit}>
					<input
						className='bg-black text-gray-300 text-xl font-medium indent-3 outline-none w-7/12 p-2 rounded-l-full'
						type='text'
						placeholder='Search...'
						value={text}
						onChange={handleChange}
					/>
					<button className='text-xl bg-zinc-700 pl-4 pr-5 rounded-r-full'>
						<LuSearch />
					</button>
				</form>
			</header>
		</section>
	);
}
