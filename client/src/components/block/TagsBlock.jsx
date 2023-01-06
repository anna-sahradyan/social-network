import React from 'react';
import SideBlock from "../sideBlock/SideBlock";
import {List} from "@mui/material";

const TagsBlock = ({items,isLoading = true}) => {
    return (
        <div>
            <SideBlock title={"Tags"}>
                <List>
                    {isLoading?[...Array(5)]:items}
                </List>
            </SideBlock>
        </div>
    );
};

export default TagsBlock;