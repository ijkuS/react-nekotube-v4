import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({ id, name, link }) {
	const { youtube } = useYoutubeApi();
	// const navigate = useNavigate();
	// const handleClick = (e) => {
	// 	e.preventDefault();
	// 	Location.href=`http://www.youtube.com/${link}`;
	// };

	const {
		// isLoading,
		error,
		data: url,
	} = useQuery(['channels', id], () => youtube.channelImageURL(id), {
		staleTime: 1000 * 60 * 5,
	});

	return (
		<a href={`https://www.youtube.com/${link}`}>
			<div className='flex items-center'>
				{/* {isLoading && <p>Loading...</p>} */}
				{error && (
					<p className='float-left w-8 h-8 rounded-full bg-white inline-flex place-content-center align-middle font-medieum text-2xl text-brand pt-1'>
						{name[0]}
					</p>
				)}
				{url && (
					<img
						className='w-8 h-8 rounded-full'
						src={url}
						alt='channel icon'
					/>
				)}
				{/* onClick={`https://www.youtube.com/${link}`} */}
				<p className='ml-3'>{name}</p>
			</div>
		</a>
	);
}
