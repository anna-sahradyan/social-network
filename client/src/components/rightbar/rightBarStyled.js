import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 3.5;
`;

export const RightWrapper = styled.div`
  padding: 20px 20px 0 0;
`;

// export const Day = styled.div`
//   display: flex;
//   align-items: center;
//
// `;
// export const H = styled.h4`
//   margin-bottom: 20px;
//
// `;
//
// export const Img = styled.img`
//   width: 40px;
//   height: 40px;
//   margin-right: 10px;
// `;
// export const ImgBirthday = styled.img`
//   width: 100%;
//   border-radius: 10px;
//   margin: 30px 0;
// `;
//
// export const Span = styled.span`
//   font-weight: 300;
//   font-size: 15px;
// `
// export const List = styled.ul`
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
//
// `;
export const Li = styled.li`
  display: flex;
  margin-bottom: 15px;
  align-items: center;

`;
// export const ImgList = styled.div`
//   position: relative;
//   margin-right: 10px;
//
// `;
// export const ImgLi = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   object-fit: cover;
// `;
// export const SpanOnline = styled.span`
//   width: 12px;
//   height: 12px;
//   border-radius: 50%;
//   background-color: limegreen;
//   position: absolute;
//   top: -1px;
//   right: 0;
//   border: 2px solid white;
// `;

//!ProfileRightBar
export const Users = styled.div`
  display: grid;
  grid-template: 1fr/repeat(1,150px);
  grid-auto-flow: row;

`;
export const UsersBox = styled.div`
  width: 300px;
  border-radius: 10px;
  -webkit-box-shadow: 0 0 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0 0 16px -8px rgba(0, 0, 0, 0.68);
  margin: 65px 10px 20px;
  height: auto;
  position: relative;
`;


export const ImgUser = styled.img`
  margin-left: 5px;
  margin-top: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;

`;
export const SpanUser = styled.span`
  position: absolute;
  top: 3px;
  left: 70px;
  font-weight: 500;

`;
//!homeRightBar
export const HomePart = styled.div`
  width: 200px;
  border-radius: 10px;
  -webkit-box-shadow: 0 0 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0 0 16px -8px rgba(0, 0, 0, 0.68);
  margin: 65px 10px 20px;
  height: 150px;

`;
export const Info = styled.div`

`;
export const Item = styled.div`
  margin-bottom: 10px;

`;
export const Title = styled.h4`
  font-size: 18px;
  font-weight: 500;
  padding: 15px;
`;

export const SpanKey = styled.span`
  font-weight: 500;
  margin-left: 10px;
  color: #555;

`;

export const SpanValue = styled.span`
  font-weight: 500;
  font-size: 16px;

`;
export const Text = styled.p`
  width: 90%;
  margin-left: 5px;
  font-weight: 400;
`;
