//// youtubeApi를 담당하는 외부 context 컴포넌트 
import { createContext, useContext } from 'react';
import YoutubeData from '../api/youtubeData';
import YoutubeDataClient from '../api/youtubeDataClient'; // 실제 API 데이터 테스트 용
// import FakeYoutubeDataClient from '../api/fakeYoutubeDataClient'; // mockdata 용


export const YoutubeApiContext = createContext();

const client = new YoutubeDataClient() // 실제 API 데이터 사용시
// const client = new FakeYoutubeDataClient(); //mockdata 데이터 사용시

const youtube = new YoutubeData(client); 
export function YoutubeApiProvider({ children }) {
	return (
		<YoutubeApiContext.Provider value={{ youtube }}>
			{children}
		</YoutubeApiContext.Provider>
	);
}

export function useYoutubeApi() {
   return useContext(YoutubeApiContext); }