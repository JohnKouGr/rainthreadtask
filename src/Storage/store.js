import { configureStore } from "@reduxjs/toolkit";
import scoreSlice from "./Utilities/utilsScore";

const store = configureStore({
    reducer: {
        score: scoreSlice
    }
});

export default store;