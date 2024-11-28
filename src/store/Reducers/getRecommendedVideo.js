import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parsedRecommendedData } from "../../utilities/parsedRecommendedData"

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getRecommendedVideo = createAsyncThunk(
  "youtube/App/recommendedVideo",
  async (videoId, { getState }) => {
    try {
      const {
        youtubeApp: {currentPlaying:{
            channelInfo: {id:channelId}
        } },

      } = getState();

      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/activities?&key=${API_KEY}&channelid=${channelId}&part=snippet,contentDetails$maxResults=20&type=videoId${
          videoId}`
      );

      const items = response.data.items;

      const parsedResult = await parsedRecommendedData(items,videoId);

      return {
        parsedResult
      };
    } catch (error) {
      console.error("Error fetching videos:", error);
      throw error;
    }
  }
);

