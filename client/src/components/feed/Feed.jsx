import React from 'react';
import {Container, Wrapper} from "./feedStyle";
import {Tab, Tabs} from "@mui/material";
import Post from "../post/Post";


const Feed = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Tabs style={{marginBottom: 15}} value={0} aria-label="basic tabs example">
                        <Tab label={"New"}/>
                        <Tab label={"Popular"}/>
                    </Tabs>
                    <Post/>
                    <Post/>
                </Wrapper>
            </Container>
        </>
    );
};

export default Feed;