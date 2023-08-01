import React from "react";
import Workouts from "../components/Workouts";
import Programs from "../components/Programs";
import { ManagePageWrapper } from "../styles/WrapperStyles";
import { StyledManagePageMainContainer } from "../styles/ContainerStyles";
import { BrightLine } from "../styles/LineStyles";

const ManagePage = () => {
  return (
    <>
      <ManagePageWrapper>
        <div>
          <h1>Manage page</h1>
          <BrightLine style={{ marginBottom: "50px" }} />
          <StyledManagePageMainContainer>
            <article>
              <Workouts />
            </article>
            <article>
              <Programs />
            </article>
          </StyledManagePageMainContainer>
        </div>
      </ManagePageWrapper>
    </>
  );
};

export default ManagePage;
