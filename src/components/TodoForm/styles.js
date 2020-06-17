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
  margin-left: 2rem;
  padding: 0.6rem 2rem;
  background: #53f353;
  border-radius: 15px;
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
  margin: -7rem 1rem -5rem 1rem;
  font-size: 3rem;
  background: #060202;
  color: white;
  border-radius: 6rem;
  border: solid red;
`;
