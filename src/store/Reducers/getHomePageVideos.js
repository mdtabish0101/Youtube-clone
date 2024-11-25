import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parsedData } from "../../utilities/parsedData"// Import from the correct file

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  "youtube/App/homePageVideos",
  async (isNext, { getState }) => {
    try {
      const {
        youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
      } = getState();

      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=ReactJs&key=${API_KEY}&part=snippet&type=video${
          isNext && nextPageTokenFromState ? `&pageToken=${nextPageTokenFromState}` : ""
        }`
      );

      const items = response.data.items;

      const parsedResult = await parsedData(items);

      return {
        parsedData: parsedResult, // Append new videos to existing ones
        nextPageToken: response.data.nextPageToken,   // Update nextPageToken
      };
    } catch (error) {
      console.error("Error fetching videos:", error);
      throw error;
    }
  }
);

