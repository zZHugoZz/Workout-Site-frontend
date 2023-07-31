import React, { useState, useEffect } from "react";
import useInterceptor from "../utils/useInterceptor";
import { useNavigate } from "react-router-dom";

const ProgramsList = () => {
  const [programs, setPrograms] = useState([]);

  const navigate = useNavigate();
  const axiosInterceptor = useInterceptor();

  const handleDelete = (id) => {
    axiosInterceptor.delete(`/programs/${id}`);
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
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            {program.name}
            <button onClick={() => handleDelete(program.id)}>Delete</button>
            <button onClick={() => handleAccess(program.id)}>Access</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProgramsList;
