import styled from "styled-components";

export const StyledInput = styled.input`
  border: 1px solid #3d3dd3;
  margin-top: 10rem;
  margin-bottom: 2rem;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 33px;
  box-shadow: 0px 0px 5px 0px #cfd8dc;
  width: 243px;

  &:active,
  &:focus {
    outline: 0;
  }
`;

export const ButtonStyle = styled.button`
  margin-left: -5rem;
  padding: 0.7rem 2rem;
  background: #e1a5ff;
  border-radius: 51px;
  cursor: pointer;
  &:active,
  &:focus {
    outline: 0;
  }
  &:hover {
    opacity: 0.5;
  }
`;

export const P2 = styled.p`
  display: flex;
  justify-content: center;
  margin: -9rem 0rem -5rem -2rem;
  font-size: 3rem;
  background: #ec1010;
  color: white;
  border-radius: 6rem;
  border: solid red;
  box-shadow: 8px 6px 9px 3px #fb8876;
`;
