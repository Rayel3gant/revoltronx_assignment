import { combineReducers } from "@reduxjs/toolkit";
import articlesReducer from "./slice/articleSlice"


const rootReducer=combineReducers({
    articles:articlesReducer
})


export default rootReducer