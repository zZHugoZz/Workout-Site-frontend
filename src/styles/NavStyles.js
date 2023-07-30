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
