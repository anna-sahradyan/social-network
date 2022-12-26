import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 10px;
  -webkit-box-shadow: 0 0 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0 0 16px -8px rgba(0, 0, 0, 0.68);
`;
export const Wrapper = styled.div`
  padding: 10px;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
`;
export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Input = styled.input`
  border: none;
  width: 80%;

  &:focus {
    outline: none;

  }

`;
export const Hr = styled.hr`
  margin: 20px;
`;
export const Sections = styled.div`
  display: flex;
  margin-right: 20px;
`;
export const Section = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;

`;
export const Span = styled.span`
  margin: 5px;
  font-size: 14px;
  font-weight: 500;
`;
export const Button = styled.button`
  border: none;
  padding: 8px;
  border-radius: 5px;
  background-color: green;
  font-weight: 500;
  cursor: pointer;
  margin: 20px;

`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;