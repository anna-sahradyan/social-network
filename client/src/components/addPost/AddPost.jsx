import React, {useRef, useState} from "react";
import {Button, TextField} from "@mui/material";
import JoditEditor from "jodit-react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {Buttons, Container, Link, Wrapper} from "./addPostStyle.js";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../../store/authSlice";
import {Navigate, useNavigate} from "react-router-dom";
import Header from "../header/Header";
import axios from "../../axios";
import {toast} from "react-toastify";
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";


const AddPost = () => {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [ImgUrl, setImgUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const editor = useRef(null);
    const isAuth = useSelector(selectIsAuth);
    const inputFileRef = useRef(null);

    const onSubmit = async () => {
        try {
            setIsLoading(true);
            const fields = {
                title,
                ImgUrl,
                tags,
                text

            }
            const {data} = await axios.post(`/posts`, fields);
            const id = data._id;
            console.log(data);
            <Navigate to={`/posts/${id}`}/>
        } catch (err) {
            console.warn(err);
            toast.error("Error while loading file ")
        }
    }
    //!Editor

    const onChange = React.useCallback((value) => {
        setText(value);
    }, []);
    const options = React.useMemo(
        () => ({
            spellChecker: false,
            maxHeight: '400px',
            autofocus: true,
            placeholder: 'Введите текст...',
            status: false,
            autosave: {
                enabled: true,
                delay: 1000,
            },
        }),
        [],
    );
    //!upload file
    const handleChangeFile = async (e) => {
        try {
            const formData = new FormData();
            formData.append("image", e.target.files[0]);
            const {data} = await axios.post(`/upload`, formData);
            setImgUrl(data.url)

        } catch (err) {
            console.warn(err)
            toast.error("Error while creating posts")
        }
        console.log(e.target.files)
    }
    //!remove
    const handleClickRemove = () => {
        setImgUrl("");
    }
    if (!window.localStorage.getItem("token") && !isAuth) {
        return <Navigate to={"/"}/>
    }
    const config = {}
    return (
        <>
            <Header/>
            <Container>
                <Wrapper>

                        <Button variant={"outlined"} size={"large"} onClick={() => inputFileRef.current.click()}>Create
                            Post</Button>
                        <input type={"file"} hidden ref={inputFileRef} onChange={handleChangeFile}/>
                        {ImgUrl && (
                            <>
                                <Button variant={"contained"} color={"error"} onClick={handleClickRemove}
                                        style={{marginLeft: "5px"}}>Delete</Button>

                                <img src={` http://localhost:8000${ImgUrl}
`} alt={"post"} style={{width: "50%"}}/>
                            </>

                        )}

                        <br/>
                        <br/>
                    <form onSubmit={onSubmit}>
                        <TextField
                            variant={"standard"}
                            placeholder={"Article title"}
                            fullWidth
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            inputProps={{style: {fontSize: "2rem"}}}
                        />

                        <TextField variant={"standard"} placeholder={"Tags"}
                                   fullWidth
                                   value={tags}
                                   onChange={(e) => setTags(e.target.value)}
                                   inputProps={{style: {fontSize: "1.3rem"}}}

                        />
                        {/*!Editor*/}
                        {/*<JoditEditor ref={editor}*/}
                        {/*             value={text}*/}
                        {/*             config={config}*/}
                        {/*             onChange={onChange}*/}
                        {/*/>*/}

                        <SimpleMDE value={text} onChange={onChange} options={options}/>
                        <Buttons>
                            <Button size={"large"} variant={"contained"}  style={{marginRight: "15px"}}
                                   type={"submit"}>publish</Button>
                            <Link href={"/"}>
                                <Button size={"large"} style={{marginRight: "15px"}}>cancel</Button>
                            </Link>
                        </Buttons>
                    </form>
                </Wrapper>
            </Container>
        </>
    )
        ;
};

export default AddPost;