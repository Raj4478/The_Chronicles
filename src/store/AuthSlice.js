import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    status:false,
    search : null,
    url:null,
    description:null,
    imgUrl:null,
    content:null,
    title:null,
    author:null,
    published:null
    

}

const auth = createSlice({
    name : "auth",
    initialState,
    reducers:{

        input:(state,action)=>{

            state.status=true
            state.search = action.payload.search;
            state.url = action.payload,
            state.description = action.payload.description,
            state.imgUrl = action.payload.imgUrl,
            state.content = action.payload.content,
            state.published = action.payload.published,
            state.author = action.payload.author,
            state.title = action.payload.title

        }

    }


})

export const {input} = auth.actions;

export default auth.reducer