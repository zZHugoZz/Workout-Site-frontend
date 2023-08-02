import React from "react";
import AddProgram from "./AddProgram";
import ProgramsList from "./ProgramsList";
import { DarkLine } from "../styles/LineStyles";

const Programs = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          paddingBottom: "20px",
        }}
      >
        <h2>Programs</h2>
        <AddProgram />
      </div>
      <DarkLine style={{ marginBottom: "20px" }} />
      <ProgramsList />
    </>
  );
};

export default Programs;
