import axios from 'axios';
import { ParseVideoDuration } from './ParseVideoDuration';
import { convertRawtoString } from './convertRawtoString';
import { timeSince } from './timeSince';
const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;


export const parsedRecommendedData = async (items) => {
    
    try {
        const videoIds = [];
        const channelIds = [];

        items.forEach((item) => {
            channelIds.push(item.snippet.channelId);
            videoIds.push(item.id.videoId);
        });

        const {
            data: { items: channelsData },

        } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(",")}&key=${API_KEY}`);

        const parsedChannelData = [];

        channelsData.forEach((channel) => parsedChannelData.push({
            id: channel.id,
            image: channel.snippet.thumbnails.default.url,
        }));

        const {
            data: { items: videosData },
        } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(",")}&key=${API_KEY}`);

        const parsedData = [];
        items.forEach((item, index) => {
            
            const {
                image: channelImage
            } = parsedChannelData.find((data) => data.id === item.snippet.channelId);
            if (channelImage) {
                
                parsedData.push({
                    videoId: item.id.videoId,
                    videoTitle: item.snippet.title,
                    videoDescription: item.snippet.description,
                    videoThumbnail: item.snippet.thumbnails?.high?.url,
                    videoLink: `https://youtube.com/watch?v=${item.id.videoId}`,
                    videoDuration: ParseVideoDuration(
                        videosData[index].contentDetails.duration
                    ),
                    videoViews: convertRawtoString(
                        videosData[index].statistics.viewCount
                    ),
                    videoAge: timeSince(new Date(item.snippet.publishedAt)),
                    channelInfo: {
                        id: item.snippet.channelId,
                        image: channelImage,
                        name: item.snippet.channelTitle
                    }
                });
            }
        });
        


        return parsedData;

    }
    catch(error){
        console.log(error)

    }
}
