import React from 'react';
import SideBlock from "../../components/sideBlock/SideBlock";
import { Skeleton} from "@mui/material";
import {
    CommentSkeleton, EyeSkeleton,
    Rec, TagSkeleton, TopComment, TopComment2, TopComment3,

    TopSkeleton1,
    TopSkeleton2,
    TopSkeleton3,

} from "../../components/post/postStyled";

const FullPostSkeleton = () => {
    return (
        <>
            <SideBlock title={"Post"}>
                <Rec>
                    <Skeleton variant="rectangular" width="100%" height={300}/>
                </Rec>
                <Skeleton variant="circular" width={40} height={40}/>
                <TopSkeleton1>
                    <Skeleton variant="text" width={250} height={30}/>
                </TopSkeleton1>
                <TopSkeleton2>
                    <Skeleton variant="text" width={100} height={30}/>
                </TopSkeleton2>
                <TopSkeleton3>
                    <Skeleton variant="text" width={450} height={30}/>
                </TopSkeleton3>

                <TagSkeleton>
                    <SideBlock title={"Tags"}>
                        <Skeleton variant="text" height={25} width={200}/>
                    </SideBlock>
                </TagSkeleton>
                <SideBlock title={"Text"}>
                    <Skeleton variant="rectangular" height={100} width={"100%"}/>
                    <EyeSkeleton>
                        <Skeleton variant="text" height={25} width={50}/>
                        <Skeleton variant="text" height={25} width={50}/>
                    </EyeSkeleton>
                </SideBlock>

            </SideBlock>
            <CommentSkeleton>
                <SideBlock title={"Comments"}>
                    <TopComment>
                        <Skeleton variant="circular" width={40} height={40}/>
                    </TopComment>
                    <TopComment2>
                        <Skeleton variant="text" width={250} height={30}/>
                    </TopComment2>
                    <TopComment3>
                        <Skeleton variant="rectangular" height={100} width={"100%"}/>
                    </TopComment3>
                </SideBlock>

            </CommentSkeleton>
        </>
    );
};

export default FullPostSkeleton;