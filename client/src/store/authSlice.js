import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchUserData = createAsyncThunk(`auth/fetchUserData`, async (params) => {
    const {data} = await axios.post(`/users/signup`, params)// in params store email and password
    return data
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        data: null,
        status: "loading"
    },
    extraReducers: {
        [fetchUserData.pending]: (state) => {
            state.status = "loading";
            state.data = null;

        },
        [fetchUserData.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.data  = action.payload;


        },
        [fetchUserData.rejected]: (state) => {
            state.status = "error";
            state.data  = null;


        },
    }
});

export default authSlice.reducer;