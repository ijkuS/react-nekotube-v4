import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelIcon({ id, name }) {
	const { youtube } = useYoutubeApi();
	const {
		// isLoading,
		// error,
		data: url,
	} = useQuery(['channels', id], () => youtube.channelImageURL(id));

	// const { channelTitle, channelId } = video.snippet;
	const navigate = useNavigate();
	
	return (
		<div>
			<span className='float-left w-10 h-10 rounded-full bg-white inline-flex place-content-center align-middle font-medieum text-2xl text-brand pt-1'>
				{name[0]}
			</span>
		</div>
	);
}
