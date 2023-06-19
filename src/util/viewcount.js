export function FormatCompactNumber(viewCount, lang = 'en-US') {
	const formatter = Intl.NumberFormat('en', { notation: 'compact' });

	return formatter.format(viewCount, lang);
}

// export function FormatViewCount(count) {
// 	if (count >= 1000000) {
// 		return `${(count / 1000000).toFixed()}M`;
// 	} else if (count >= 1000) {
// 		return `${(count / 1000).toFixed()}K`;
// 	} else {
// 		return count.toString();
// 	}
// }

//  FormatViewCount(count);
