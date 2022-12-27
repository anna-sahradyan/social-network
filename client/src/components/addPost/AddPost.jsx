import React, { useRef, useState} from "react";
import {Button, TextField} from "@mui/material";
// import SimpleMDE from 'react-simplemde-editor';
// import "easymde/dist/easymde.min.css";
import JoditEditor from "jodit-react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {Buttons, Container, Link, Wrapper} from "./addPostStyle.js";


const AddPost = () => {
    const imageUrl = "";
    const [value, setValue] = useState("");
    const editor = useRef(null);

    // const options = useMemo(() => ({
    //     spellChecker: false,
    //     maxHeight: "400px",
    //     autofocus: true,
    //     placeholder: "Enter text",
    //     status: false,
    //     indentWithTabs: false,
    //     tabSize: 4,
    //     autosave: {
    //         enabled: true,
    //         delay: 1000,
    //         uniqueId: "demo",
    //     },
    // }), []);
    // const onChange = useCallback((value) => {
    //     setValue(value);
    // }, []);
    console.log(value)

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