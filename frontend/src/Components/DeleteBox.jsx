import React from "react";

const DeleteBox = ({ deleteTerm, setDeleteTerm, deletePatient }) => {
  return (
    <React.Fragment>
      <form onSubmit={deletePatient}>
        <input
          type="text"
          placeholder="Enter Email"
          value={deleteTerm}
          onChange={(e) => setDeleteTerm(e.target.value)}
        />
        <button type="submit">Delete</button>
      </form>
    </React.Fragment>
  );
};

export default DeleteBox;
