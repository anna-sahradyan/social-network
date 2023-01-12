import React from 'react';
import Paper from "@mui/material/Paper";
import {Typography} from "@mui/material";
import {Container} from "./sideBlockStyled";

const SideBlock = ({title,children}) => {
    return (
        <>
            <Container>
                <Paper>
        <Typography variant={"h6"} style={{ padding: "15px 15px 0 15px"}}>
            {title}
        </Typography>
                    {children}
                </Paper>
            </Container>
        </>
    );
};

export default SideBlock;