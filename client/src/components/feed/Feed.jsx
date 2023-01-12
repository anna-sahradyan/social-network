import React, {useEffect, useState} from 'react';
import {Container, Wrapper} from "./feedStyle";
import {Tab, Tabs} from "@mui/material";
import Post from "../post/Post";
import {Posts} from "../../data";
import PostSkeleton from "../post/PostSkeleton";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, fetchTags} from "../../store/postSlice";

const Feed = () => {
    const dispatch = useDispatch();
    const {posts, tags} = useSelector(state => state.posts);
    const isPostLoaded = posts.status === "loaded";
    useEffect(() => {
        dispatch(fetchPosts())
        dispatch(fetchTags())

    }, []);
    console.log(posts)
    return (
        <>
            <Container>
                <Wrapper>
                    <Tabs style={{marginBottom: 15}} value={0} aria-label="basic tabs example">
                        <Tab label={"New"}/>
                        <Tab label={"Popular"}/>
                    </Tabs>
                    {isPostLoaded ? (posts.items).map((item, index) => <Post key={`${item}_${index}`}
                                                                             post={item}/>) : Array(5).fill(0).map((_, index) =>
                        <PostSkeleton key={index}/>)}


                </Wrapper>
            </Container>
        </>
    );
};

export default Feed;