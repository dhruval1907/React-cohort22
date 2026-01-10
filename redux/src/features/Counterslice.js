import {createSlice} from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name :"counter",
    initialState:{
        value : 0
    },
    reducers:{
        increnment : (state)=>{
            state.value += 1
        },
        decrenmet : (state)=>{
            state.value -= 1
        },
        byvalue : (state,actions)=>{
            state.value -= actions.payload
        }
    }
})


export const {increnment,decrenmet,byvalue} = counterSlice.actions;

export default counterSlice.reducer;


// import {createSlice} from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//     name : "counter",
//     initialState : {
//         value : 0,
//     },
//     reducers:{
//         increment: (state)=>{
//             state.value += 1
//         },
//         decrement: (state)=>{
//             state.value -= 1
//         },
//         byfive: (state,actions)=>{
//             state.value += actions.payload
//         }
//     }
// })


// export const {increment,decrement,byfive} = counterSlice.actions
// export default counterSlice.reducer