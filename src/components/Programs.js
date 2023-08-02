import React from "react";
import AddProgram from "./AddProgram";
import ProgramsList from "./ProgramsList";
import { DarkLine } from "../styles/LineStyles";

const Programs = () => {
  return (
    <>
      <h2>Programs</h2>
      <DarkLine style={{ marginBottom: "20px" }} />
      <ProgramsList />
      <AddProgram />
    </>
  );
};

export default Programs;
