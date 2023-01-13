import React, {useEffect, useState} from 'react';
//import TagsBlock from "../../components/block/TagsBlock";
import {Container} from "./FullPostStyled";
import {AddComment} from "../../components/addComment/AddComment";
import Header from "../../components/header/Header";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    Bottom,
    Center, Children,
    Comment, ImgHeart, ImgLike,
    ImgPost,
    Left,
    Link,
    Right,
    Span,
    SpanPost, Tags,
    Top, Wrapper
} from "../../components/post/postStyled";
import Card from "@mui/material/Card";
import {CardContent, IconButton} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Clear";
import {MoreVert} from "@material-ui/icons";
import {fetchPostId, selectPostId} from "../../store/postSlice";
import FullPostSkeleton from "./FullPostSkeleton";
import PostSkeleton from "../../components/post/PostSkeleton";
import axios from "../../axios";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CommentIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import UserInfo from "../../components/userInfo/UserInfo";


const FullPost = ({commentCount,isFullPost}) => {
    const [data, setData] = useState({});
    const {posts} = useSelector(state => state.posts);
    const isPostLoaded = posts.status === "loaded";
    const {id} = useParams();
    const [flag, setFlag] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        axios.get(`/posts/${id}`).then(res => {
            setData(res.data);
            console.log(data);
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const handleClick = () => {
        setFlag(!flag)
    }
    const onClickRemove = () => {

    }

    return (
        <>
            <Header/>
            <Container>
                <Wrapper>
                {isLoading ? (Array(1).fill(0).map((_, index) =>
                    <FullPostSkeleton key={index}/>)) : (
                        <>
                            <Top>
                                <Left>
                                    <Span>{data.text}</Span>
                                </Left>
                                <Right>
                                    {flag && (
                                        <>
                                            <Card style={{
                                                position: "absolute",
                                                width: "120px",
                                                height: "60px",
                                                marginTop: "-30px",
                                                marginLeft: "-9%",
                                                boxShadow: "0 0 16px -8px rgba(0, 0, 0, 0.68)"

                                            }}>
                                                <CardContent>
                                                    <Link href={`/posts/${data._id}/edit`}>
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
                                <UserInfo  additionalText={data.createdAt}/>
                                {isFullPost ? data.title :
                                    <Link href={`/posts/${data._id}`}><SpanPost>{data.title}</SpanPost></Link>}

                                {/*{imageUrl && (*/}
                                <ImgPost src={`/http://localhost:8000/${data?.ImgUrl}`}/>
                                {/*)}*/}
                                {/*<ImgPost src={`/img/${post?.photo}`}/>*/}
                            </Center>
                            <Bottom>
                                {/*<Tags>*/}
                                {/*    {posts?.tags.map((name, index) => (*/}
                                {/*        <Link key={`${name}_${index}`} href={`/tag/${name}`}>#{name}</Link>*/}
                                {/*    ))}*/}
                                {/*</Tags>*/}

                                <Comment>
                                    <EyeIcon color={"primary"}/>
                                    <Span>{data.viewsCount}</Span>
                                    <CommentIcon color={"secondary"}/>
                                    <Span>{commentCount}2</Span>
                                </Comment>
                            </Bottom>
                        </>
                )
                }
                <Wrapper>
                <AddComment/>
                </Wrapper>
                {/*    </React.Fragment>*/}
                {/*) : Array(1).fill(0).map((_, index) =>*/}
                {/*    <FullPostSkeleton key={index}/>)}*/}
                </Wrapper>
            </Container>
        </>
    );
};

export default FullPost;