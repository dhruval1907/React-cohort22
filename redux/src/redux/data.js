import {configureStore} from "@reduxjs/toolkit";
import { counterSlice } from "../features/Counterslice";

const store = configureStore({
    reducer:{
        counter : counterSlice
    }
})