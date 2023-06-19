import {format} from 'timeago.js';

export function FormatAgo(date, lang='en-US') {
   return format(date, lang);
}