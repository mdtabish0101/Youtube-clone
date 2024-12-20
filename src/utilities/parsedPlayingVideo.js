import { convertRawtoString } from './convertRawtoString';
import { timeSince } from './timeSince';
const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;


export const parsedPlayingVideo = async (item) => {
    const channelResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${item.snippet.channelId}&key=${API_KEY}`)
    const snippet = item.snippet;
    const id = item.id;
    const statistics = item.statistics;
    const channelImage = channelResponse.data.items[0].snippet.thumbnails.default.url;
    const subscription = channelResponse.data.items[0].statistics.subscriberCount; // Fix typo


    return {
        videoId: id,
        videoTitle: snippet.title,
        videoDescription: snippet.description,

        videoViews: convertRawtoString(statistics.viewCount),
        videoLikes: convertRawtoString(statistics.likeCount),

        videoAge: timeSince(new Date(snippet.publishedAt)),
        channelInfo: {
            id: snippet.channelId,
            image: channelImage,
            name: snippet.channelTitle,
            subscribers: convertRawtoString(subscription, true)
        }
    }

}
