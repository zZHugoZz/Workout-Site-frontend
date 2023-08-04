import React from "react";
import { useState, useEffect } from "react";
import useInterceptor from "../utils/useInterceptor";
import ProgressionChart from "./ProgressionChart";
import ProgressionsList from "./ProgressionsList";
import AddProgression from "./AddProgression";
import SelectProgressionUnit from "./SelectProgressionUnit";
import { DarkLine } from "../styles/LineStyles";

const Progression = () => {
  const [progressions, setProgressions] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const [longestProgression, setLongestProgression] = useState(0);
  const [unit, setUnit] = useState("");
  const [labels, setLabels] = useState([1, 2, 3, 4, 5]);
  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: datasets,
  });

  const axiosInterceptor = useInterceptor();

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
    axiosInterceptor.put("/units", {
      unit: e.target.value,
    });
  };

  useEffect(() => {
    axiosInterceptor.get("/units").then((response) => {
      setUnit(response.data.unit);
    });
  }, []);

  useEffect(() => {
    axiosInterceptor.get("/progressions").then((response) => {
      const lengths = response.data.map(
        (progression) => progression.performances.length
      );
      setProgressions(response.data);
      setLongestProgression(Math.max(...lengths));
    });
  }, []);

  useEffect(() => {
    setDatasets(
      progressions.map((progression) => ({
        label: progression.name,
        data: progression.performances.map((performance) => performance.weight),
        borderColor: progression.color,
        backgroundColor: progression.color,
        color: "#AFC0CF",
      }))
    );
  }, [progressions]);

  useEffect(() => {
    setChartData({
      labels: labels,
      datasets: datasets,
    });
  }, [labels, datasets]);

  useEffect(() => {
    if (longestProgression > labels.length) {
      let newLabels = [];
      for (let i = 1; i <= longestProgression; i++) {
        newLabels.push(i);
      }
      setLabels(newLabels);
    }
  }, [longestProgression, labels.length]);

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
        <h2>Progression</h2>
        <AddProgression setProgressions={setProgressions} />
        <SelectProgressionUnit
          handleUnitChange={handleUnitChange}
          unit={unit}
        />
      </div>
      <DarkLine style={{ marginBottom: "20px" }} />
      <ProgressionsList
        progressions={progressions}
        unit={unit}
        setProgressions={setProgressions}
      />
      <ProgressionChart data={chartData} unit={unit} />
    </>
  );
};

export default Progression;
