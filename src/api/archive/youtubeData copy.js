import axios from 'axios';

export default class YoutubeData {
	constructor() {
		this.httpClient = axios.create({
			baseURL: 'https://youtube.googleapis.com/youtube/v3',
			params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
		});
	}
	async search(keyword) {
		return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
	}

	async #searchByKeyword(keyword) {
		return this.httpClient
			.get('search', {
				params: {
					part: 'snippet',
					maxResults: 20,
					q: keyword,
					type: 'video',
				},
			})
			.then((res) => res.data.items)
			.then((items) =>
				items.map((item) => ({ ...item, id: item.id.videoID }))
			);
	}

	async #mostPopular() {
		return this.httpClient
			.get('videos', {
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
}

// import axios from 'axios';

// export async function search(keyword) {
// 	return axios
// 		.get(`/videos/${keyword ? 'search' : 'popular'}.json`)
// 		.then((res) => res.data.items);
// }
