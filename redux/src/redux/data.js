import { configureStore } from "@reduxjs/toolkit";
import countereducer from "../features/Counterslice";
export const store = configureStore({
    reducer: {
        counter: countereducer
    }
})