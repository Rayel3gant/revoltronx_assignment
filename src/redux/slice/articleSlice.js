import { createSlice } from "@reduxjs/toolkit"
import { json } from "react-router-dom"

const initialState={
    headLinesData: [], 
    searchedData:[],
    inputText:''
}


const articlesSlice=createSlice({
    name:"articles",
    initialState,
    reducers:{
        addHeadlinesData:(state,action)=>{
            state.headLinesData=action.payload
        },
        addSearchedData:(state,action) =>{
            state.searchedData=action.payload
        },
        addInputText:(state,action)=>{
            state.inputText=action.payload
        }
    }
})

export const { addHeadlinesData , addSearchedData , addInputText} =articlesSlice .actions

export default articlesSlice.reducer