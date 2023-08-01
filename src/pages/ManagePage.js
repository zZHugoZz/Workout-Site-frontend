import React from "react";
import Workouts from "../components/Workouts";
import Programs from "../components/Programs";
import { ManagePageWrapper } from "../styles/WrapperStyles";

const ManagePage = () => {
  return (
    <>
      <ManagePageWrapper>
        <h1>Manage page</h1>
        <Workouts />
        <Programs />
      </ManagePageWrapper>
    </>
  );
};

export default ManagePage;
