import styled from "styled-components";

const StyledExploreTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledExploreMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 850px;
`;

const StyledProgramContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  article {
    background-color: #02080d;
    outline: 1px solid #1b1e26;
    border-radius: 7px;
    padding: 10px;
  }
`;

export {
  StyledExploreTitleContainer,
  StyledExploreMainContainer,
  StyledProgramContainer,
};
