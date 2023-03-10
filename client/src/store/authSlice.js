import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchAuth = createAsyncThunk(`auth/fetchAuth`, async (params) => {
    const {data} = await axios.post(`/users/signin`, params)// in params store email and password
    return data
});
export const fetchRegister = createAsyncThunk(`auth/fetchRegister`, async (params) => {
    const {data} = await axios.post(`/users/signup`, params)// in params store email and password
    return data
});
export const fetchAuthMe = createAsyncThunk(`auth/fetchAuthMe`, async () => {
    const {data} = await axios.get(`/users/me`);
    console.log(data)
    return data
});


const authSlice = createSlice({
    name: "auth",
    initialState: {
        data: null,
        status: "loading",
        user: null,
        token: null
    },
    reducers: {
        logout: (state) => {
            state.data = null;

        }
    },
    extraReducers: {
        //!login
        [fetchAuth.pending]: (state) => {
            state.status = "loading";
            state.data = null;


        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.data = action.payload;
            state.user = action.payload.user;
            // state.token = action.payload.token;


        },
        [fetchAuth.rejected]: (state) => {
            state.status = "error";
            state.data = null;


        },
        //!Register
        [fetchRegister.pending]: (state) => {
            state.status = "loading";
            state.data = null;

        },
        [fetchRegister.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.data = action.payload;
            state.user = action.payload.user;
            // state.token = action.payload.token;

        },
        [fetchRegister.rejected]: (state) => {
            state.status = "error";
            state.data = null;


        },

        //!getMe
        [fetchAuthMe.pending]: (state) => {
            state.status = "loading";
            state.data = null;

        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.data = action.payload;
            state.user = action.payload?.user;
             state.token = action.payload?.token;

        },
        [fetchAuthMe.rejected]: (state) => {
            state.status = "error";
            state.data = null;


        },

    }
});
export const {logout} = authSlice.actions;
export const selectIsAuth = (state) => Boolean(state.auth.data);
export const selectCheckIsAuth = (state) => Boolean(state.auth.token);
export default authSlice.reducer;