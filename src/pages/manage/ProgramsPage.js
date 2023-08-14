import React from "react";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import useInterceptor from "../../utils/useInterceptor";
import ProgramDaysList from "../../components/manage/programs/ProgramDaysList";
import { ProgramContext } from "../../context/ProgramContext";
import PageContainer from "../../utils/PageContainer";

const ProgramsPage = () => {
  const { setProgramId, setDays } = useContext(ProgramContext);

  const { id } = useParams();
  const axiosInterceptor = useInterceptor();

  useEffect(() => {
    axiosInterceptor.get(`/programs/${id}`).then((response) => {
      console.log("response: ", response.data.days);
      setDays(response.data.days);
    });
  }, []);

  useEffect(() => {
    setProgramId(id);
  }, [id]);

  return (
    <>
      <PageContainer maxWidth="lg" pageName="Programs">
        <ProgramDaysList />
      </PageContainer>
    </>
  );
};

export default ProgramsPage;
