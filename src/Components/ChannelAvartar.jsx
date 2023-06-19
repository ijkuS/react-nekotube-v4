import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelAvartar(channelId, channelTitle, type) {
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
		<>
			<div className=''>
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
						className='float-left w-8 h-8 rounded-full'
						src={url}
						alt='channel icon'
					/>
				)}
			</div>
		</>
	);
}
