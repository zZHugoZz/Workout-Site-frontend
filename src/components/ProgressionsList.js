import React from "react";
import useInterceptor from "../utils/useInterceptor";
import PerformancesList from "./PerformancesList";
import AddPerformanceForm from "./AddPerformanceForm";

const ProgressionsList = ({ progressions, unit, setProgressions }) => {
  const axiosInterceptor = useInterceptor();

  const openDialog = (e) => {
    const dialog = document.querySelector(`.dialog-${e.target.id}`);
    dialog.showModal();
  };

  const closeDialog = (e) => {
    const dialog = document.querySelector(`.dialog-${e.target.id}`);
    dialog.close();
  };

  const handleDeleteProgression = async (id) => {
    await axiosInterceptor.delete(`/progressions/${id}`);
    axiosInterceptor.get("/progressions").then((response) => {
      setProgressions(response.data);
    });
  };

  return (
    <>
      <ul>
        {progressions.map((progression) => (
          <li key={progression.id}>
            {progression.name}
            <button onClick={openDialog} id={progression.id}>
              Access
            </button>
            <button onClick={() => handleDeleteProgression(progression.id)}>
              delete
            </button>
            <dialog className={`dialog-${progression.id}`}>
              <h2>{progression.name}</h2>
              <PerformancesList progression={progression} unit={unit} />
              <AddPerformanceForm progressionId={progression.id} />
              <button onClick={closeDialog} id={progression.id}>
                Close
              </button>
            </dialog>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProgressionsList;
