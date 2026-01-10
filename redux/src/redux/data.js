import {configureStore} from "@reduxjs/toolkit";
import { counterSlice } from "../features/Counterslice";

export const store = configureStore({
    reducer:{
        counter : counterSlice
    }
})