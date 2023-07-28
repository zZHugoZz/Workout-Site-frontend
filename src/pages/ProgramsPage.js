import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useInterceptor from "../utils/useInterceptor";
import ProgramDaysList from "../components/ProgramDaysList";
import AddDay from "../components/AddDay";

const ProgramsPage = () => {
  const [days, setDays] = useState([]);

  const { id } = useParams();
  const axiosInterceptor = useInterceptor();

  useEffect(() => {
    axiosInterceptor.get(`/programs/${id}`).then((response) => {
      setDays(response.data.days);
    });
  }, []);

  useEffect(() => {
    console.log("days: ", days);
  }, [days]);

  return (
    <>
      <h1>Programs</h1>
      <ProgramDaysList days={days} id={id} setDays={setDays} />
      <AddDay id={id} setDays={setDays} />
    </>
  );
};

export default ProgramsPage;
