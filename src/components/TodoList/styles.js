import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledListItem = styled.li`
  border: 1px solid #3636ea;
  background: #c142c1;
  padding: 1rem 1rem 1rem 2rem;

  & input.done {
    text-decoration: line-through;
    color: black;
  }
`;
