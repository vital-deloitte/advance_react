import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counter";

import typingSlice from "./searchBar/Typing";

const store = configureStore({
    reducer :  { 
        counter : counterSlice.reducer, 
        setTyping: typingSlice.reducer 
    }
})

export const counterActions = counterSlice.actions;
export const typingActions = typingSlice.actions;

export default store;