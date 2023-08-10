import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import useInterceptor from "../../../utils/useInterceptor";
import ProgramsPagination from "./ProgramsPagination";
import { ProgramsContext } from "../../../context/ProgramsContext";

const ProgramsList = () => {
  const { programs } = useContext(ProgramsContext);

  const navigate = useNavigate();
  const axiosInterceptor = useInterceptor();

  const handleDelete = async (id) => {
    await axiosInterceptor.delete(`/programs/${id}`);
    axiosInterceptor.get("/programs").then((response) => {
      setPrograms(response.data);
    });
  };

  const handleAccess = (id) => {
    navigate(`programs/${id}`);
  };

  return (
    <>
      <ProgramsPagination
        programs={programs}
        handleAccess={handleAccess}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default ProgramsList;
