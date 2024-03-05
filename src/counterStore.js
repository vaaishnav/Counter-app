import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counterSlice"

const conunterStore = configureStore ({
    reducer:{
        counterReducer : counterSlice

    }
})

export default conunterStore