import { configureStore } from "@reduxjs/toolkit/";
import creater from './CreateSlice';




const store = configureStore({
    reducer:{
        allval : creater
    }
})

export default store;