import React, {useState} from 'react';
import {
    Bottom,
    Center, Children, Comment,
    Container,
    ImgHeart,
    ImgLike, ImgPost,
    Left,  Link,  Right,
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
import PostSkeleton from "./PostSkeleton";


const Post = ({post, user, children, viewsCount, commentCount,createdAt,isFullPost,isLoading}) => {

    const [like, setLike] = useState(post?.likes);
    const [isLiked, setIsLiked] = useState(false);
    const [flag, setFlag] = useState(false);
    const {posts} = useSelector(state => state.posts);
    const isPostLoading = posts.status === "loading";
    console.log(post?.tags)
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
    }
    const handleClick = () => {
        setFlag(!flag)
    }
    const onClickRemove = () => {

    }
    if(isLoading){
        return (
            <>
                <PostSkeleton/>
            </>
        )
    }
    return (
        <>
            <Container>
                <Wrapper>
                    <Top>
                        <Left>
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
                                            <Link href={`/posts/${post?._id}/edit`}>
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
                        <UserInfo {...user} additionalText={createdAt}/>
                        {isFullPost ? post?.title:<Link href={`/posts/${post?._id}`}><SpanPost>{post?.title}</SpanPost></Link>}

                        {/*{imageUrl && (*/}
                        <ImgPost src={`/http://localhost:8000/${post?.user.
                            avatarUrl}`}/>
                        {/*)}*/}
                        {/*<ImgPost src={`/img/${post?.photo}`}/>*/}
                    </Center>
                    <Bottom>
                        <Tags>

                                {post?.tags.map((name,index)=>(
                                    <Link key={`${name}_${index}`} href={`/tag/${name}`}>#{name}</Link>
                                ))}

                        </Tags>
                        {children && <Children>{children}</Children>}

                        <Left>
                            <ImgHeart src={"/img/heart.png"} alt={"heart"} onClick={likeHandler}/>
                            <ImgLike src={"/img/like.png"} alt={"like"} onClick={likeHandler}/>
                            <Span>{post?.likes} people liked it</Span>
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