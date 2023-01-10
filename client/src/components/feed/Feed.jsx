import React, {useEffect} from 'react';
import {Container, Wrapper} from "./feedStyle";
import {Tab, Tabs} from "@mui/material";
import Post from "../post/Post";
import {Posts} from "../../data";
import AddPost from "../addPost/AddPost";
import PostSkeleton from "../post/PostSkeleton";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, fetchTags} from "../../store/postSlice";

const Feed = () => {
    const dispatch = useDispatch();
    const {posts, tags} = useSelector(state => state.posts);
    const isPostLoading = posts.status === "loading";
    useEffect(() => {
        dispatch(fetchPosts())
        dispatch(fetchTags())
    }, []);

    console.log(tags);
    return (
        <>
            <Container>
                <Wrapper>
                    <Tabs style={{marginBottom: 15}} value={0} aria-label="basic tabs example">
                        <Tab label={"New"}/>
                        <Tab label={"Popular"}/>
                    </Tabs>
                    {(isPostLoading ? [Array(5)] : posts.items).map((obj, index) => isPostLoading ? (
                        <Post key={`${obj}_${index}`} isLouding={true}/>) : (
                        <Post key={`${obj}_${index}`} post={obj}/>))}

                </Wrapper>
            </Container>
        </>
    );
};

export default Feed;