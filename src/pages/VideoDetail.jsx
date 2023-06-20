import React from 'react';
import { useLocation } from 'react-router-dom';
import RelatedVideos from '../Components/RelatedVideos';
import ChannelInfo from '../Components/ChannelInfo';
import { FormatAgo } from '../util/date';

export default function VideoDetail() {
	const {
		state: { video },
	} = useLocation();
	console.log(video);
	// console.log(channel);

	const {
		title,
		channelTitle,
		channelId,
		publishedAt,
		description,
		customUrl,
	} = video.snippet;
	// const { thumbnails } = channel.snippet
	// console.log(video);
	return (
		<section className='flex flex-col lg:flex-row mt-32 sm: px-5'>
			<article className='basis-4/6 lg:w-4/6'>
				<div>
					<iframe
						id='player'
						type='text/html'
						width='100%'
						height='360'
						src={`https://www.youtube.com/embed/${video.id}`}
						frameborder='0'
						title={title}
					/>
				</div>
				<div className='mt-3'>
					<p className='text-lg font-bold'>{title}</p>
					<p className='text-sm opacity-70 mb-3'>{FormatAgo(publishedAt)}</p>
					<ChannelInfo
						id={channelId}
						name={channelTitle}
						link={customUrl}
					/>
					{/* thumbnail={thumbnails.default.url}  */}
					<pre className='whitespace-pre-wrap font-sans my-10 opacity-80'>{description}</pre>
				</div>
			</article>

			<section className='basis-2/6 lg:w-2/6'>
				<RelatedVideos id={video.id} video={video} />
			</section>
		</section>
	);
}
