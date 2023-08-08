import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useInterceptor from "../utils/useInterceptor";
import ProgramsPagination from "./ProgramsPagination";

const ProgramsList = () => {
  const [programs, setPrograms] = useState([]);

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

  useEffect(() => {
    axiosInterceptor.get("/programs").then((response) => {
      setPrograms(response.data);
    });
  }, []);

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
