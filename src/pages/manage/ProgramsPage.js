import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useInterceptor from "../../utils/useInterceptor";
import ProgramDaysList from "../../components/manage/programs/ProgramDaysList";

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
      <div>
        <h1>Programs</h1>
        <ProgramDaysList days={days} programId={id} setDays={setDays} />
      </div>
    </>
  );
};

export default ProgramsPage;