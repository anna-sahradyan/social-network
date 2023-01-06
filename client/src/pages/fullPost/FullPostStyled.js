import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
`;
export const SkeletonDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const TopSkeleton = styled.div`
  position: absolute;
  display: flex;
  margin-left: 10px;

`;
export const BottomSkeleton = styled.div`
  display: flex;
  position: absolute;
  margin-top: 100px;
  margin-left: 10px;
`;
