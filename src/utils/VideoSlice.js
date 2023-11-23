import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
    name:'video',
    initialState:{
        items:['onkar','paras']
        // items:[{name:'playlistname' , videos:[]}]
    },
    reducers:{
        addvideo:(state , action) => {
            state.items.push(action.payload)
        },
        removevideo:(state , action) => {
            state.items.pop()
        },
    },
})

export const {addvideo , removevideo} = VideoSlice.actions;
export default VideoSlice.reducer;