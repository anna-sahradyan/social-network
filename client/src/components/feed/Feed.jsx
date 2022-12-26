import React from 'react';
import {Container, Wrapper} from "./feedStyle";
import {Tab, Tabs} from "@mui/material";
import Post from "../post/Post";
import {Posts} from "../../data";
import Share from "../share/Share";
import AddPost from "../addPost/AddPost";

const Feed = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Tabs style={{marginBottom: 15}} value={0} aria-label="basic tabs example">
                        <Tab label={"New"}/>
                        <Tab label={"Popular"}/>
                    </Tabs>
                    <Share/>

                    {Posts.map((post,index)=>( <Post key={`${post}_${index}`} post={post}/>))}


                </Wrapper>
            </Container>
        </>
    );
};

export default Feed;