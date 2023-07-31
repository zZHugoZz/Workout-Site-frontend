import styled from "styled-components";

const InvisibleButton = styled.button`
  background-color: transparent;
  border: none;
`;

const HoverButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 3px;

  &:hover {
    background-color: #091117;
    cursor: pointer;
  }
`;

const GreenButton = styled.button`
  border: none;
  outline: 1px solid white;
  font-family: Bold;
  color: white;
  background-color: #2ca92c;
  border-radius: 3px;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export { InvisibleButton, HoverButton, GreenButton };
