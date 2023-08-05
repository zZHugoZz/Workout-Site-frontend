import React from "react";
import AddProgram from "./AddProgram";
import ProgramsList from "./ProgramsList";

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
      <ProgramsList />
    </>
  );
};

export default Programs;
