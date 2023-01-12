import React, {useEffect, useState} from 'react';
import Post from "../../components/post/Post";
import TagsBlock from "../../components/block/TagsBlock";
import CommentsBlock from "../../components/block/CommentsBlock";
import {Container} from "./FullPostStyled";
import {AddComment} from "../../components/addComment/AddComment";
import Header from "../../components/header/Header";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Left, Link, Right, Span, Top} from "../../components/post/postStyled";
import Card from "@mui/material/Card";
import {CardContent, IconButton} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Clear";
import {MoreVert} from "@material-ui/icons";
import {fetchPostId, selectPostId} from "../../store/postSlice";
import FullPostSkeleton from "./FullPostSkeleton";
import PostSkeleton from "../../components/post/PostSkeleton";
import axios from "../../axios";


const FullPost = () => {
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
    // useEffect(() => {
    //     if (id && id) {
    //         dispatch(fetchPostId(id));
    //
    //     }
    //     // return () => {
    //     //     dispatch(removeList());
    //     // }
    //
    // }, [dispatch, id]);
    const handleClick = () => {
        setFlag(!flag)
    }
    const onClickRemove = () => {

    }

    return (
        <>
            <Header/>
            <Container>
                {/*<Post id={data?._id} title={data?.title} ImgUrl={data?.ImgUrl} user={data?.user}*/}
                {/*      createdAt={data?.createdAt} viewsCount={data?.viewsCount} commentCount={3} tags={data?.tags}*/}
                {/*      isFullPost comments={data?.comments} text={data?.text}/>*/}
                {/*{isPostLoaded && (posts.items).map((item, index) =>*/}


                {/*{isLoading ? (data).map((item, index) =>*/}
                {/*    <React.Fragment key={`${item}_${index}`}>*/}
                {isLoading ? (Array(1).fill(0).map((_, index) =>
                    <FullPostSkeleton key={index}/>)) : (<Top>
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
                                        marginLeft: "-9%"
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

                )
                }
                <AddComment/>
                {/*    </React.Fragment>*/}
                {/*) : Array(1).fill(0).map((_, index) =>*/}
                {/*    <FullPostSkeleton key={index}/>)}*/}

            </Container>
        </>
    );
};

export default FullPost;