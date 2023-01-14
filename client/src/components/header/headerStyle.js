import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #2D7ECD;
  position: sticky;
  display: flex;
  align-items: center;

`;
export const Left = styled.div`
  display: flex;
  flex: 4;
  margin-left: 15px;


`;

export const Right = styled.div`
  display: flex;
  flex: 8;
  justify-content: end;



`;
export const Logo = styled.h2`
  color: white;

`;
export const Link = styled.a` 
  text-decoration: none;
  cursor: pointer;

`;
export const Button = styled.button`
  width: 150px;
  margin: 6px;
  border: none;
  padding: 5px 20px;
  border-radius: 5px;
  cursor: pointer;
  color: ${props => props.type === "filled" ? "#EC5990" : "teal"};
  
`;