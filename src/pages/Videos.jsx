import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../Components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
	const { keyword } = useParams();
	const { youtube } = useYoutubeApi();

	const {
		isLoading,
		error,
		data: videos,
	} = useQuery(['videos', keyword], () => youtube.search(keyword), {
		staleTime: 1000 * 60 * 1,
	});

	return (
		<>
			{isLoading && <p>...Loading</p>}
			{error && <p>Something is wrong...</p>}
			{videos && (
				<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-5 mt-32'>
					{videos.map((video) => (
						<VideoCard key={video.id} video={video} />
					))}
				</ul>
			)}
		</>
	);
}
