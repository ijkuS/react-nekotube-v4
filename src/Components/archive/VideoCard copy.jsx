import React from 'react';
import { FormatAgo } from '../../util/date';
import { Link, useNavigate } from 'react-router-dom';
// import { FormatCompactNumber } from '../util/viewcount';

export default function VideoCard({ video }) {
	const { title, thumbnails, channelTitle, channelId, publishedAt } =
		video.snippet;
	// const { viewCount } = video.statistics;
	const navigate = useNavigate();
	const handleClick = (e) => {
		e.preventDefault();
		navigate(`/video/watch/${video.id}`, {state: {video}});
	}
	return (
		<li onClick={handleClick}>
			<img
				className='w-full rounded-xl hover:rounded-none hover:opacity-30 hover:easy-in duration-200'
				src={thumbnails.medium.url} alt={title}
			/>
			<section className='py-3'>
				<div>
					<span className='float-left text-3xl'>⚪️</span>
				</div>

				<div className='clear-right pl-10'>
			

					<p className='font-bold line-clamp-2'>{title} </p>
					<p className='text-sm opacity-70'>{channelTitle}</p>
					{/* <p>
					{video.statistics.viewCount
						? `${FormatCompactNumber(
								video.statistics.viewCount
						  )} views / `
						: ''}
				</p> */}

					{/* <p>	{FormatCompactNumber(viewCount)}</p> */}
					<p className='text-sm opacity-70'>{FormatAgo(publishedAt)} </p>
					{/* <p>{`${FormatCompactNumber(viewCount)} views • ${FormatAgo(
					publishedAt
				)}`}</p> */}
				</div>
			</section>
		</li>
	);
}
