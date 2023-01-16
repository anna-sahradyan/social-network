import React, {useRef, useState} from "react";
import {Button, TextField} from "@mui/material";
import JoditEditor from "jodit-react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {Buttons, Container, Link, Wrapper} from "./addPostStyle.js";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../../store/authSlice";
import {Navigate} from "react-router-dom";


const AddPost = () => {
    const imageUrl = "";
    const [value, setValue] = useState("");
    const editor = useRef(null);
    const isAuth = useSelector(selectIsAuth);
    if (isAuth) {
        return <Navigate to={"/"}/>
    }

    return (
        <>
            <Container>
                <Wrapper>

                    <Button variant={"outlined"} size={"large"}>Create Post</Button>
                    <input type={"file"} hidden/>
                    {imageUrl && (
                        <>
                            <Button variant={"contained"} color={"error"}>Delete</Button>
                        </>
                    )}
                    {imageUrl && (
                        <>
                            <img src={"/img/post2.jpg"} alt={"post"}/>
                        </>
                    )}
                    <br/>
                    <br/>
                    <TextField
                        variant={"standard"}
                        placeholder={"Article title"}
                        fullWidth/>

                    <TextField variant={"standard"} placeholder={"Tags"} fullWidth/>
                    {/*<SimpleMDE  options={options}  value={value}*/}
                    {/*            onChange={onChange} className={s.editor}  id={"demo"}/>*/}
                    <JoditEditor ref={editor} onChange={(content) => setValue(content)}/>
                    <Buttons>
                        <Button size={"large"} variant={"contained"} style={{marginRight: "15px"}}>publish</Button>
                        <Link href={"/"}>
                            <Button size={"large"} style={{marginRight: "15px"}}>cancel</Button>
                        </Link>
                    </Buttons>

                </Wrapper>
            </Container>
        </>
    );
};

export default AddPost;