import styled from "styled-components";

const ExplorePageWrapper = styled.main`
  background-color: #020a10;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0;

  div {
    max-width: 850px;
  }

  h1,
  h2 {
    color: #97a6b5;
  }

  p {
    padding: 30px 0px;
  }

  h2 {
    padding-top: 50px;
  }
`;

const ProgramsPageWrapper = styled.div`
  background-color: #020a10;
  width: 100%;
  padding: 50px 0;

  h1,
  h2 {
    color: #97a6b5;
  }
`;

export { ExplorePageWrapper, ProgramsPageWrapper };
