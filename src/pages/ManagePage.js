import React from "react";
import Workouts from "../components/Workouts";
import Programs from "../components/Programs";
import Progression from "../components/Progression";
import OneRmCalculator from "../components/OneRmCalculator";

const ManagePage = () => {
  return (
    <>
      <main>
        <h1>Overview</h1>
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
      </main>
    </>
  );
};

export default ManagePage;
