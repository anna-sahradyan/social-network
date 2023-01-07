import React from 'react';
import {Buttons, Container, Form} from "./addCommentStyled";
import {Avatar, Button, TextField} from "@mui/material";

export const AddComment = () => {
    return (
        <>
            <Container>
                <Avatar
                    src={"/img/person1.jpg"}
                />
                <Form>
                    <TextField
                        label={"Write comments"}
                        variant={"outlined"}
                        maxRows={10}
                        multiline
                        fullWidth
                    />
                    <Buttons>

                    <Button variant={"contained"}fullWidth >Send</Button>

                    </Buttons>
                </Form>
            </Container>
        </>
    );
};

