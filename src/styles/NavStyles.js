import styled from "styled-components";

const StyledSiteHeaderNav = styled.nav`
  width: 750px;
  padding-right: 70px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  .menu-icon {
    display: none;
  }

  span {
    font-size: 18px;
  }

  i {
    color: rgb(154, 178, 201);
  }

  i:hover {
    color: #ff7543;
    cursor: pointer;
  }

  @media only screen and (width <= 980px) {
    width: auto;

    .nav-icon {
      display: none;
    }
    .menu-icon {
      display: inline-flex;
    }
  }
`;
export { StyledSiteHeaderNav };
