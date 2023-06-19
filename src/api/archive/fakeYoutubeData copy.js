import axios from 'axios';

export default class FakeYoutubeData {
	constructor() {}
	async search(keyword) {
		return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
	}

	async #searchByKeyword() {
		return axios
			.get('/videos/search.json')
			.then((res) => res.data.items)
			.then((items) =>
				items.map((item) => ({ ...item, id: item.id.videoID }))
			);
	}

   async #mostPopular() {
		return axios
			.get('/videos/popular.json')
			.then((res) => res.data.items)
			
	}
}
