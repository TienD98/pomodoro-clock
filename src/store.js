import { configureStore } from "@reduxjs/toolkit";
import clockReducer from "./features/clockSlice";

const store = configureStore({
    reducer: {
        clock: clockReducer
    }
})

export default store;