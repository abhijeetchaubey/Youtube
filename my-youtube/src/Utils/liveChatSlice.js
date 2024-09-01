import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice = createSlice({
    name: "Chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.push(action.payload);
            
        }
    }
})

export const {addMessage}= LiveChatSlice.actions;
export default LiveChatSlice.reducer;