import React, {useMemo, useState} from "react";
import {Button, Paper, TextField} from "@mui/material";
import SimpleMde from "react-simplemde-editor";
import {Buttons, Container, Link, Wrapper} from "./addPostStyle.js";

const AddPost = () => {
    const imageUrl = "";
    const [value, setValue] = useState("");
    const options = useMemo(() => ({
        spellChecker: false,
        maxHeight: "400px",
        autofocus: true,
        placeholder: "Enter text",
        status: false,
        autosave: {
            enabled: true,
            delay: 1000,
        },
    }), []);
    return (
        <>
            <Container>
                <Wrapper>
                    <Paper style={{padding: 30}}>
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
                        <SimpleMde options={options}/>
                        <Buttons>
                            <Button size={"large"} variant={"contained"}>publish</Button>
                            <Link href={"/"}>
                                <Button size={"large"}>cancel</Button>
                            </Link>
                        </Buttons>
                    </Paper>
                </Wrapper>
            </Container>
        </>
    );
};

export default AddPost;