import React, {useState} from 'react';
import {
    Bottom,
    Center,
    Container,
    Img,
    ImgHeart,
    ImgLike, ImgPost,
    Left,
    Right,
    Span, SpanComment,
    SpanPost,
    Top,
    Wrapper
} from "./postStyled";
import {MoreVert} from "@material-ui/icons";
import {Users} from "../../data";



const Post = ({post}) => {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
    }
    return (
        <>
            <Container>
                <Wrapper>
                    <Top>
                        <Left>
                            <Img src={Users.filter((u) => u.id === post.userId)[0].profilePicture}/>
                            <Span>{Users.filter((u) => u.id === post.userId)[0].username}</Span>
                            <Span>{post.data}</Span>
                        </Left>
                        <Right>
                            <MoreVert/>
                        </Right>
                    </Top>
                    <Center>
                        <SpanPost>{post?.desc}</SpanPost>
                        <ImgPost src={`/img/${post.photo}`}/>
                    </Center>
                    <Bottom>
                        <Left>
                            <ImgHeart src={"/img/heart.png"} alt={"heart"} onClick={likeHandler}/>
                            <ImgLike src={"/img/like.png"} alt={"like"} onClick={likeHandler}/>
                            <Span>{like} people liked it</Span>
                        </Left>
                        <Right>
                            <SpanComment>{post.comments}comments</SpanComment>
                        </Right>
                    </Bottom>
                </Wrapper>
            </Container>
        </>
    );
};

export default Post;