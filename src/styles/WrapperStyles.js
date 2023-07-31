import styled from "styled-components";

const ExplorePageWrapper = styled.main`
  background-color: #020a10;
  width: 100%;
  padding: 50px 30px;
  display: flex;
  justify-content: center;

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

const WorkoutsPagewrapper = styled.div`
  background-color: #020a10;
  width: 100%;
  padding: 50px 30px;
  display: flex;
  justify-content: center;

  h1,
  h2 {
    color: #97a6b5;
  }

  h1 {
    padding-bottom: 30px;
  }

  h2 {
    padding-bottom: 10px;
  }

  table > thead {
    color: #afc0cf;
    font-family: Bold;
  }

  table > tbody {
    color: #afc0cf;
    font-family: Light;
  }
`;

const ProgramsPageWrapper = styled.div`
  background-color: #020a10;
  width: 100%;
  padding: 50px 30px;
  display: flex;
  justify-content: center;

  div {
    width: 80%;
  }

  h1,
  h2 {
    color: #97a6b5;
  }

  h1 {
    padding-bottom: 30px;
  }

  table > thead {
    color: #afc0cf;
    font-family: Bold;
  }

  table > tbody {
    color: #afc0cf;
    font-family: Light;
  }
`;

export { ExplorePageWrapper, WorkoutsPagewrapper, ProgramsPageWrapper };
