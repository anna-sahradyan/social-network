import React, {useState} from 'react';
import {
    Bottom,
    Center, Children, Comment,
    Container,
    ImgHeart,
    ImgLike, ImgPost,
    Left, Li, Link, List, Right,
    Span,
    SpanPost, Tags,
    Top,
    Wrapper
} from "./postStyled";
import {MoreVert} from "@material-ui/icons";
import {Users} from "../../data";
import {useSelector} from "react-redux";
import Card from '@mui/material/Card';
import {CardContent, IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Clear';
import UserInfo from "../userInfo/UserInfo";
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';


const Post = ({post, user, children, viewsCount, commentCount}) => {
    const [like, setLike] = useState(post?.likes);
    const [isLiked, setIsLiked] = useState(false);
    const [flag, setFlag] = useState(false);
    const {posts, tags} = useSelector(state => state.posts);
    const isPostLoading = posts.status === "loading";
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
    }
    const handleClick = () => {
        setFlag(!flag)
    }
    const onClickRemove = () => {

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
                            {flag && (
                                <>
                                    <Card style={{
                                        position: "absolute",
                                        width: "120px",
                                        height: "60px",
                                        marginTop: "-30px",
                                        marginLeft: "-9%"
                                    }}>
                                        <CardContent>
                                            <Link href={`/posts/${post.userId}/edit`}>
                                                <IconButton color={"primary"}>
                                                    <EditIcon/>
                                                </IconButton>

                                            </Link>
                                            <IconButton onClick={onClickRemove} color="secondary">
                                                <DeleteIcon/>
                                            </IconButton>
                                        </CardContent>
                                    </Card>
                                </>
                            )}
                            <MoreVert onClick={handleClick}/>
                        </Right>
                    </Top>
                    <Center>
                        <UserInfo {...user} additionalText={post?.userId}/>
                        <SpanPost>{post?.title}</SpanPost>
                        {/*{imageUrl && (*/}
                        <ImgPost src={`/img/${post?.photo}`}/>
                        {/*)}*/}
                        {/*<ImgPost src={`/img/${post?.photo}`}/>*/}
                    </Center>
                    <Bottom>
                        <Tags>
                            <List>

                                <Li><Link href={`/post?.tag/${post?.tags}`}>#{post?.tags}</Link></Li>

                            </List>
                        </Tags>
                        {children && <Children>{children}</Children>}

                        <Left>
                            <ImgHeart src={"/img/heart.png"} alt={"heart"} onClick={likeHandler}/>
                            <ImgLike src={"/img/like.png"} alt={"like"} onClick={likeHandler}/>
                            <Span>{like} people liked it</Span>
                        </Left>
                        <Comment>
                            {/*<SpanComment>{post?.comments}comments</SpanComment>*/}
                            <EyeIcon color={"primary"}/>
                            <Span>{viewsCount}12</Span>
                            <CommentIcon color={"secondary"}/>
                            <Span>{commentCount}2</Span>
                        </Comment>
                    </Bottom>
                </Wrapper>
            </Container>
        </>
    );
};

export default Post;