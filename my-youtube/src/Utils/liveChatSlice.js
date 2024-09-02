import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constant";

const LiveChatSlice = createSlice({
    name: "Chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            if(state.messages.length)
                state.messages.splice(OFFSET_LIVE_CHAT,1)
            state.messages.push(action.payload);
            
        }
    }
})

export const {addMessage}= LiveChatSlice.actions;
export default LiveChatSlice.reducer;