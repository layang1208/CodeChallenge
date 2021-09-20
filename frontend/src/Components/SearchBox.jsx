import React from "react";

const SearchBox = ({ searchTerm, setSearchTerm, searchPatient }) => {
  return (
    <React.Fragment>
      <form onSubmit={searchPatient}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </React.Fragment>
  );
};

export default SearchBox;
