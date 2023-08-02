import React from "react";
import Workouts from "../components/Workouts";
import Programs from "../components/Programs";
import Progression from "../components/Progression";
import OneRmCalculator from "../components/OneRmCalculator";
import { ManagePageWrapper } from "../styles/WrapperStyles";
import { StyledManagePageMainContainer } from "../styles/ContainerStyles";
import { BrightLine } from "../styles/LineStyles";

const ManagePage = () => {
  return (
    <>
      <ManagePageWrapper>
        <main>
          <h1>Overview</h1>
          <BrightLine style={{ marginBottom: "50px" }} />
          <StyledManagePageMainContainer>
            <article>
              <Workouts />
            </article>
            <article>
              <Programs />
            </article>
            <article>
              <Progression />
            </article>
            <article>
              <OneRmCalculator />
            </article>
          </StyledManagePageMainContainer>
        </main>
      </ManagePageWrapper>
    </>
  );
};

export default ManagePage;
