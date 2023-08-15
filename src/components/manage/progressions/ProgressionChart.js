import React, { useContext } from "react";

import { LineChart } from "@mui/x-charts/LineChart";

import { ProgressionsContext } from "../../../context/ProgressionsContext";

const ProgressionChart = () => {
  const { progressions } = useContext(ProgressionsContext);

  return (
    <>
      <LineChart />
    </>
  );
};

export default ProgressionChart;
