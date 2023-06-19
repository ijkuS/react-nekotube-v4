import React from 'react';
import { FormatAgo } from '../../util/date';
import { useNavigate } from 'react-router-dom';
import { useYoutubeApi } from '../../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function VideoCard({ video, type }) {
	const { title, thumbnails, channelTitle, channelId, publishedAt } =
		video.snippet;
	const navigate = useNavigate();
	const handleClick = (e) => {
		e.preventDefault();
		navigate(`/videos/watch/${video.id}`, { state: { video, channelId } });
	};
	const { youtube } = useYoutubeApi();
	const {
		isLoading,
		error,
		data: url,
	} = useQuery(['channels', channelId], () =>
		youtube.channelImageURL(channelId)
	);

	const isList = type === 'list'; 

	return (
		<li className={isList ? 'lg:flex mb-3 gap-2' : ''}>
			<img className={isList ? 'w-40 object-cover' : 'w-full object-cover'}
				// className='w-full rounded-xl hover:rounded-none hover:opacity-30 hover:easy-in duration-200'
				src={thumbnails.medium.url}
				alt={title}
				onClick={handleClick}
			/>
			<section className='py-3'>
				<div className={isList ? 'hidden' : ''}>
					{isLoading && <p>Loading...</p>}
					{error && (
						<p 
						// className='float-left w-10 h-10 rounded-full bg-white inline-flex place-content-center align-middle font-medieum text-2xl text-brand pt-1'
						>
							{channelTitle[0]}
						</p>
					)}
					{url && (
						<img
							className='float-left w-10 h-10 rounded-full'
							src={url}
							alt='channel icon'
						/>
					)}
				</div>

				<div className={isList ? ' pl-1' :'pl-12'}>
					<p className='font-bold line-clamp-2' onClick={handleClick}>
						{title}
					</p>
					<p className='text-sm opacity-70'>{channelTitle}</p>

					<p className='text-sm opacity-70'>{FormatAgo(publishedAt)} </p>
				</div>
			</section>
		</li>
	);
}
