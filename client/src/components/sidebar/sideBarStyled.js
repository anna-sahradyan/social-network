import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 3;
  height: calc(100vh - 50px);
  overflow-y: scroll;
  position: sticky;
  top: 50px;

  &::-webkit-scrollbar {
    width: 10px;

  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1877f2;
    border-radius: 10px;
  }

`;


export const Wrapper = styled.div`
  padding: 20px;

`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

`;
export const Span = styled.span`
  margin: 10px;
`;
export const Button = styled.button`
  width: 150px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
`;

export const Hr = styled.hr`
  margin: 20px 0;

`;
export const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

