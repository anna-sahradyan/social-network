import {createSlice} from "@reduxjs/toolkit";

const postSlice = createSlice({
    name:"posts",
    initialState: {
       posts :{
           items:[],
           status:"loading"
       },
        tags:{
           items:[],
            status: "loading"
        }
    },
    reducers: {

    }
});
export default postSlice.reducer;