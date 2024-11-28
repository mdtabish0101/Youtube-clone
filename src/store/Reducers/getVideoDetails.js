import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parsedPlayingVideo } from "../../utilities/parsedPlayingVideo"


const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;
console.log("API_KEY:", API_KEY);


export const getVideoDetails = createAsyncThunk(
  "youtube/App/getVideoDetails",
  async (id, { rejectWithValue }) => {
    try {
      console.log("Fetching video details for ID:", id);
      const {
        data: { items },
      } = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics&type=video&id=${id}`
      );

      if (!items || items.length === 0) {
        throw new Error("No video details found for the given ID.");
      }

      const parsedData = parsedPlayingVideo(items[0]);
      return parsedData;
    } catch (error) {
      console.error("Error fetching video details:", error.message || error);
    }
  }
);

