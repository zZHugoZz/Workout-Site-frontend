import styled from "styled-components";

const StyledDialog = styled.dialog`
  border: 1px solid #ff7543;
  max-width: 30%;
  background-color: rgb(3, 12, 22);
  border-radius: 10px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  box-shadow: 0 0 5px 10px rgba(0, 0, 0, 0.4);
  padding: 30px;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
export { StyledDialog };
