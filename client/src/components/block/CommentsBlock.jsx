import React from 'react';
import SideBlock from "../sideBlock/SideBlock";
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Skeleton} from "@mui/material";
import {BottomSkeleton, SkeletonDiv, TopSkeleton} from "../../pages/fullPost/FullPostStyled";

const CommentsBlock = ({items, children, isLoading = true}) => {
    return (<>
        <SideBlock title={"Comments"}>
            <List>
                {(isLoading ? [...Array(5)] : items).map((obj, index) => (<React.Fragment key={`${obj}_${index}`}>
                    <ListItem alignItems={"flex-start"}>
                        <ListItemAvatar>
                            {isLoading ? (
                                <Skeleton variant="circular" width={40} height={40}/>
                            ) : (<Avatar alt={obj.user.fullName} src={obj.user.avatarUrl}/>)}
                        </ListItemAvatar>
                        {isLoading ?(<SkeletonDiv>
                            <TopSkeleton>
                            <Skeleton variant="text" height={25} width={120} />
                            </TopSkeleton>
                            <BottomSkeleton>
                            <Skeleton variant="text" height={18} width={230} />
                            </BottomSkeleton>
                        </SkeletonDiv>):(
                            <ListItemText primary={obj.user.fullName } secondary={obj.text}/>


                        )}
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </React.Fragment>))}
            </List>
            {children}
        </SideBlock>
    </>);
};

export default CommentsBlock;