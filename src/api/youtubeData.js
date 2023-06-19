export default class YoutubeData {
	constructor(apiClient) {
		this.apiClient = apiClient;
	}
	async search(keyword) {
		return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
	}

	async #searchByKeyword(keyword) {
		return (
			this.apiClient
				.search({
					params: {
						part: 'snippet',
						maxResults: 20,
						q: keyword,
						type: 'video',
					},
				})
				// .then((res) =>
				// 	res.data.items.map((item) => ({ ...item, id: item.id.videoID }))
				// );
				.then((res) => res.data.items)
				.then((items) =>
					items.map((item) => ({ ...item, id: item.id.videoId}))
				) //한 줄로 줄였더니 관련동영상 리스트 안나와서, 그냥 두줄로 남겨놓음...


		);
	}

	async #mostPopular() {
		return this.apiClient
			.videos({
				//원래는 'videos'인데 'popular'로 바뀔때 어떻게 되는지 테스트 해보기
				// -> 오류 발생
				params: {
					part: 'snippet',
					maxResults: 20,
					chart: 'mostPopular',
					// type: 'video',
				},
			})
			.then((res) => res.data.items);
	}
	async relatedVideos(id) {
		return this.apiClient
			.search({
				params: {
					part: 'snippet',
					maxResults: 20,
					type: 'video',
					relatedToVideoId: id,
				},
			})
			.then((res) => res.data.items)
			.then((items) =>
				items.map((item) => ({ ...item, id: item.id.videoId }))
			);

		/** 
			 * 
			 * .then((res) =>
				res.data.items.map((item) => ({ ...item, id: item.id.videoID }))
			);
		 * then을 두번 사용할 필요 없이 1줄로 만들자. 
		.then((res) => res.data.items)
		.then((items) =>
				items.map((item) => ({ ...item, id: item.id.videoID }))
			);
		*/
	}

	async channelImageURL(id) {
		return this.apiClient
			.channels({
				params: {
					part: 'snippet',
					id,
				},
			})
			.then((res) => res.data.items[0].snippet.thumbnails.default.url);
	}
	async channelData(id) {
		return this.apiClient
			.channels({
				params: {
					part: 'snippet',
					id,
				},
			})
			.then((res) => res.data.items);
	}
}
