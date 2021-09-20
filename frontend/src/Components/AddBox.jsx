import React from "react";

const AddBox = ({ addTerm, setAddTerm, addPatient }) => {
  return (
    <React.Fragment>
      <form onSubmit={addPatient}>
        <input
          type="text"
          placeholder="Enter Email"
          value={addTerm}
          onChange={(e) => setAddTerm(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </React.Fragment>
  );
};

export default AddBox;
