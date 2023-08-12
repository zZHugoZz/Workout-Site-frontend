import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import useInterceptor from "../../utils/useInterceptor";
import ProgramDaysList from "../../components/manage/programs/ProgramDaysList";
import { ProgramContext } from "../../context/ProgramContext";

const ProgramsPage = () => {
  const { setProgramId, setDays } = useContext(ProgramContext);

  const { id } = useParams();
  const axiosInterceptor = useInterceptor();

  useEffect(() => {
    axiosInterceptor.get(`/programs/${id}`).then((response) => {
      setDays(response.data.days);
    });
  }, []);

  useEffect(() => {
    setProgramId(id);
  }, [id]);

  return (
    <>
      <div>
        <h1>Programs</h1>
        <ProgramDaysList />
      </div>
    </>
  );
};

export default ProgramsPage;
