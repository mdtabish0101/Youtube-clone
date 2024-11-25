import { configureStore } from '@reduxjs/toolkit'
import youtubeReducer from '../features/counter/youtubeSlice'


export const store = configureStore({
  reducer: {
    youtubeApp: youtubeReducer,
  },
})