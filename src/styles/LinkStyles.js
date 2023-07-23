import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: rgb(154, 178, 201);

  &:hover {
    color: rgb(255, 106, 52);
    cursor: pointer;
  }
`;
export { StyledNavLink };
