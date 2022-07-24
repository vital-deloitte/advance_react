import { createSlice } from "@reduxjs/toolkit";

interface Typing {
    isTyping: Boolean;
}

const typingSlice = createSlice({
    name: 'typing',
    initialState : {isTyping : false},
    reducers : {
        typingStart : (state:Typing) => {
            state.isTyping = true;
        },
        typingEnd : (state:Typing) => {
            state.isTyping = false;
        }
    }
})

export default typingSlice;