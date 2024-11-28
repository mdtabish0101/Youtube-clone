import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parsedData } from "../../utilities/parsedData"

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getSearchPageVideos = createAsyncThunk(
  "youtube/App/searchPageVideos",
  async (isNext, { getState }) => {
    try {
      const {
        youtubeApp: { nextPageToken: nextPageTokenFromState, videos, searchTerm },
      } = getState();

      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video${
          isNext && nextPageTokenFromState ? `&pageToken=${nextPageTokenFromState}` : ""
        }`
      );

      const items = response.data.items;

      const parsedResult = await parsedData(items);

      return {
        parsedData: parsedResult, 
        nextPageToken: response.data.nextPageToken,  
      };
    } catch (error) {
      console.error("Error fetching videos:", error);
      throw error;
    }
  }
);

