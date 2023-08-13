import React from "react";

import AccessProgramButton from "./AccessProgramButton";
import DeleteProgramButton from "./DeleteProgramButton";
import CustomMenu from "../../../utils/CustomMenu";

const ProgramMenu = ({ programId }) => {
  return (
    <>
      <CustomMenu>
        <AccessProgramButton programId={programId} />
        <DeleteProgramButton programId={programId} />
      </CustomMenu>
    </>
  );
};

export default ProgramMenu;
