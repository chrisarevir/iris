import styled from "styled-components";

export const StyledButton = styled.button`
  /* resets */
  box-sizing: border-box;
  font-size: 100%;
  font: inherit;
  margin: 0;
  padding: 0;
  vertical-align: baseline;

  /* styles */

  background-color: white;
  border-color: gray;
  border-radius: 4px;
  border-style: solid;
  border-width: 2px;
  color: black;
  padding: 8px;

  &:hover {
    border-color: blue;
  }
`;
