import React from 'react';
import { FormatAgo } from '../../util/date';
import { useNavigate } from 'react-router-dom';
import { useYoutubeApi } from '../../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import ChannelAvartar from '../ChannelAvartar';

export default function VideoCard({ video, type }) {
	const { title, thumbnails, channelTitle, channelId, publishedAt, customUrl } =
		video.snippet;
	const navigate = useNavigate();
	const handleClick = (e) => {
		e.preventDefault();
		navigate(`/videos/watch/${video.id}`, { state: { video, channelId } });
	};

	const isList = type === 'list';

	return (
		<li className={isList ? 'lg:flex ml-5 mb-3 gap-1 ' : 'px-2'}>
			<img
				className={
					isList
						? 'w-40 object-cover rounded-md hover:opacity-30 hover:easy-in duration-200'
						: 'w-full object-cover rounded-xl hover:rounded-none hover:opacity-30 hover:easy-in duration-200'
				}
				src={thumbnails.medium.url}
				alt={title}
				onClick={handleClick}
			/>
			<section className='py-3'>
				
				<ChannelAvartar
				className={isList? 'hidden' : ''}
					channelId={channelId}
					channelTitle={channelTitle}
					customUrl={customUrl}
				/>

				<div className={isList ? ' pl-1' : 'pl-10'}>
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
