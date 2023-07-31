import styled from "styled-components";

const StyledSearchBar = styled.input`
  width: 250px;
  padding: 10px;
  border: 1px solid #647183;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  background-color: black;
  color: aliceblue;
  font-family: "Regular";
  caret-color: #ffffff;

  &:focus {
    border-color: rgb(255, 106, 52);
  }

  &::placeholder {
    color: #596371;
  }
`;

const StyledDialogInput = styled.input`
  width: 250px;
  padding: 5px;
  border: 1px solid #647183;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  background-color: #03090a;
  color: aliceblue;
  font-family: "Regular";
  caret-color: #ffffff;
  margin-bottom: 30px;

  &:focus {
    border-color: rgb(255, 106, 52);
  }

  &::placeholder {
    color: #596371;
  }
`;

export { StyledSearchBar, StyledDialogInput };
