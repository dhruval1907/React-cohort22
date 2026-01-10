import {configureStore} from "@reduxjs/toolkit";
import counter from "../features/Counterslice";
export const store = configureStore({
    reducer:{
        counter : counter.reducer
    }
})