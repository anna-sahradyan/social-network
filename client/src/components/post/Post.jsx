import React, { useState} from 'react';
import {
    Bottom,
    Center, Comment,
    Container,
    Img,
    ImgHeart,
    ImgLike, ImgPost,
    Left, Li, Link, List, Right,
    Span, SpanComment,
    SpanPost, Tags,
    Top,
    Wrapper
} from "./postStyled";
import {MoreVert} from "@material-ui/icons";
import {Users} from "../../data";
import {useSelector} from "react-redux";




const Post = ({post}) => {
    const [like, setLike] = useState(post?.likes);
    const [isLiked, setIsLiked] = useState(false);
    const {posts, tags} = useSelector(state => state.posts);
    const isPostLoading = posts.status === "loading";
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
                            {/*<Img src={Users.filter((u) => u.id === post.userId)[0].profilePicture}/>*/}
                            {/*<Span>{Users.filter((u) => u.id === post.userId)[0].username}</Span>*/}
                            <Span>{post?.text}</Span>
                        </Left>
                        <Right>
                            <MoreVert/>
                        </Right>
                    </Top>
                    <Center>
                        <SpanPost>{post?.title}</SpanPost>
                        {/*<ImgPost src={`/img/${post.photo}`}/>*/}
                    </Center>
                    <Bottom>
                        <Tags>
                            <List>

                                <Li><Link href={`/post?.tag/${post?.tags}`}>#{post?.tags}</Link></Li>

                            </List>
                        </Tags>
                        <Left>
                            <ImgHeart src={"/img/heart.png"} alt={"heart"} onClick={likeHandler}/>
                            <ImgLike src={"/img/like.png"} alt={"like"} onClick={likeHandler}/>
                            <Span>{like} people liked it</Span>
                        </Left>
                        <Comment>
                            {/*<SpanComment>{post?.comments}comments</SpanComment>*/}
                        </Comment>
                    </Bottom>
                </Wrapper>
            </Container>
        </>
    );
};

export default Post;