import { configureStore } from "@reduxjs/toolkit";
import VideoSlice from "./VideoSlice";

const store = configureStore({
  reducer:{
    video: VideoSlice,
  }, 
})

export default store;