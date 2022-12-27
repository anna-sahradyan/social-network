import React from 'react';
import {Skeleton, Stack} from "@mui/material";
import {
    BottomSkeletonFour,
    BottomSkeletonOne, BottomSkeletonThree,

    BottomSkeletonTwo,
    Container,
    LeftSkeleton,
    Rec,
    TopSkeleton,
    Wrapper
} from "./postStyled";


const PostSkeleton = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Stack>
                        <Skeleton variant="circular" width={40} height={40}/>
                        <Rec>
                            <Skeleton variant="rectangular" width="100%" height={300}/>
                        </Rec>
                        <TopSkeleton>
                            <Skeleton variant="text" width={160} height={30}/>
                        </TopSkeleton>

                        <LeftSkeleton>
                            <Skeleton variant="text" width={250} height={30}/>
                        </LeftSkeleton>
                        <BottomSkeletonOne>
                            <Skeleton variant="text" width={30} height={30}/>

                        </BottomSkeletonOne>
                        <BottomSkeletonTwo>
                            <Skeleton variant="text" width={30} height={30}/>
                        </BottomSkeletonTwo>
                        <BottomSkeletonThree>
                            <Skeleton variant="text" width={150} height={30}/>
                        </BottomSkeletonThree>
                        <BottomSkeletonFour>
                            <Skeleton variant="text" width={120} height={30}/>
                        </BottomSkeletonFour>

                    </Stack>
                </Wrapper>
            </Container>

        </>
    );
};

export default PostSkeleton;