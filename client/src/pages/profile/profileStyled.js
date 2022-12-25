import styled from "styled-components";

export const Container = styled.div`
  display: flex;

`;
export const Right = styled.div`
  flex: 9;
`;
export const Top = styled.div`

`;
export const Bottom = styled.div`
  display: flex;

`;
export const ImgProfile = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;
export const ImgUser = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  object-fit: cover;
  border-radius: 50%;
  left: 0;
  right: 0;
  margin: auto;
  top: 50%;
  border: 3px solid white;

`;
export const Cover = styled.div`
          height: 320px;
          position: relative;
    `
;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Span = styled.span`
  font-weight: 300;
  
`;

export const H = styled.h4`
  font-size: 24px;
`;
