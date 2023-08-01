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

const StyledManagePageMainContainer = styled.main`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  article {
    background-color: #02080d;
    outline: 1px solid #1b1e26;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  }

  article:nth-of-type(3) {
    grid-column: 1 / 3;
  }
`;

const StyledProgramContainer = styled.main`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  article {
    background-color: #02080d;
    outline: 1px solid #1b1e26;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  }
`;

const StyledProgramDayContainer = styled.main`
  position: relative;
  width: 100%;
  padding-bottom: 40px;

  h2 {
    width: max-content;
    position: absolute;
    left: 1;
  }

  button {
    width: max-content;
    position: absolute;
    right: 0;
  }
`;

const StyledDialogHeaderContainer = styled.main`
  position: relative;
  width: 100%;
  padding-bottom: 40px;

  h2 {
    width: max-content;
    position: absolute;
    left: 1;
  }

  button {
    width: max-content;
    position: absolute;
    right: 0;
  }
`;

export {
  StyledExploreTitleContainer,
  StyledExploreMainContainer,
  StyledManagePageMainContainer,
  StyledProgramContainer,
  StyledProgramDayContainer,
  StyledDialogHeaderContainer,
};
