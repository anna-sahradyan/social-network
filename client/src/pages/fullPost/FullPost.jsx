import React from 'react';
import Post from "../../components/post/Post";
import SideBlock from "../../components/sideBlock/SideBlock";
import TagsBlock from "../../components/block/TagsBlock";
import CommentsBlock from "../../components/block/CommentsBlock";
import {Container} from "./FullPostStyled";
import {AddComment} from "../../components/addComment/AddComment";
// import {Container} from "../../components/feed/feedStyle";

const FullPost = () => {
    return (
        <>
            <Container>
                <Post/>
                <AddComment/>
                <CommentsBlock/>
            </Container>
        </>
    );
};

export default FullPost;