import { createSlice } from '@reduxjs/toolkit'
import { getHomePageVideos } from '../../store/Reducers/getHomePageVideos';
import { getSearchPageVideos } from '../../store/Reducers/getSearchPageVideos';
import { getRecommendedVideo } from '../../store/Reducers/getRecommendedVideo';
import { getVideoDetails } from '../../store/Reducers/getVideoDetails';
const initialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResult: "",
  nextPageToken: null,
  recommendedVideo: []
};

const youtubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
      state.nextPageToken = null;
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearch: (state) => {
      state.searchTerm = "";
    }
  },
  // Inside the youtubeSlice
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedData) {
        state.videos = [...state.videos, ...action.payload.parsedData];
        state.nextPageToken = action.payload.nextPageToken;
      }
    });
    builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedData) {
        state.videos = [...state.videos, ...action.payload.parsedData];
        state.nextPageToken = action.payload.nextPageToken;
      }
    });
    builder.addCase(getRecommendedVideo.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedRecommendedData) {
        state.recommendedVideo = action.payload.parsedRecommendedData;
      }
    });
    builder.addCase(getVideoDetails.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedData) {
        state.currentPlaying = action.payload.currentPlaying;
      }
    });
  }

})


export const { clearVideos, changeSearchTerm, clearSearch } = youtubeSlice.actions;
export default youtubeSlice.reducer;