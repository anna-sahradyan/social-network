import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchPosts = createAsyncThunk(`posts/fetchPosts`, async () => {
    const {data} = await axios.get(`/posts`);
    return data;
});
export const fetchTags = createAsyncThunk(`posts/fetchTags`, async () => {
    const {data} = await axios.get(`/posts/tags`);
    return data;
});
export const fetchPostId = createAsyncThunk(`posts/fetchPostId`, async (postId, {rejectWithValue}) => {
        try {
            const response = await axios.get(`/posts/${postId}`)

            if (!response.ok) {
                throw new Error("Server Error");
            }
            const {data} = await response.data;

            return  data
        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
)

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: {
            items: [],
            status: "loading"
        },
        tags: {
            items: [],
            status: "loading"
        },
        postId: {
            items: [],
            status: "loading"
        }
    },
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.posts.items = [];
            state.posts.status = "loading";
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts.items = action.payload;
            state.posts.status = "loaded";


        },
        [fetchPosts.rejected]: (state) => {
            state.posts.items = [];
            state.posts.status = "error";


        },
        //!Tags
        [fetchTags.pending]: (state) => {
            state.tags.items = [];
            state.tags.status = "loading";
        },
        [fetchTags.fulfilled]: (state, action) => {
            state.tags.items = action.payload;
            state.tags.status = "loaded";


        },
        [fetchTags.rejected]: (state) => {
            state.tags.items = [];
            state.tags.status = "error";


        },
        //!postId
        [fetchPostId.pending]: (state) => {
            state.postId.items = [];
            state.postId.status = "loading";
        },
        [fetchPostId.fulfilled]: (state, action) => {
            state.postId.items = action.payload;
            state.postId.status = "loaded";


        },
        [fetchPostId.rejected]: (state) => {
            state.postId.items = [];
            state.postId.status = "error";


        },

    }
});
export const selectPostId = state => state.posts.postId;
export default postSlice.reducer;