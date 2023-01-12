import React from 'react';
import SideBlock from "../sideBlock/SideBlock";
import {List, Skeleton} from "@mui/material";
import {useSelector} from "react-redux";

const TagsBlock = () => {
    const {posts, tags} = useSelector(state => state.posts);
    const isPostLoading = posts.status === "loading";
    return (
        <>
            <SideBlock title={"Tags"} style={{width: "100%"}}>
                <List>
                    {(isPostLoading ? [...Array(1)] : tags.items).map((tag, index) => (
                        <React.Fragment key={`${tag}_${index}`}>
                            {isPostLoading ? (
                                <div style={{position: "absolute", top: "-28px", left: "80px"}}>
                                    <Skeleton variant="text" height={25} width={60}/>
                                </div>
                            ) : (<span>{tag.tags}</span>)}

                        </React.Fragment>))}
                </List>
            </SideBlock>
        </>
    );
};

export default TagsBlock;