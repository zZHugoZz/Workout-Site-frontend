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

export { InvisibleButton, HoverButton };
