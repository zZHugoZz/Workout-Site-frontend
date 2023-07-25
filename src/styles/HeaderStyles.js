import styled from "styled-components";

const StyledSiteHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #212a3e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgb(255, 117, 67);

  i {
    color: rgb(154, 178, 201);
  }

  i:hover {
    color: #ff7543;
    cursor: pointer;
  }
`;

const StyledPageHeader = styled.header`
  background-color: #394867;
  color: #92a2c1;
  padding-top: 75px;

  div {
    padding: 25px 70px;
  }
`;
export { StyledSiteHeader, StyledPageHeader };
