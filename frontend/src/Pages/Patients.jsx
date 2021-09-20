import React from "react";
import { useState, useEffect } from "react";
import http from "../Services/httpService";
import { Table, SearchBox, AddBox } from "../Components";
import { backendApi } from "../config.json";
import DeleteBox from "../Components/DeleteBox";

const apiEndPoint = backendApi + "/patients";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [fetch, setFetch] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [addTerm, setAddTerm] = useState("");
  const [deleteTerm, setDeleteTerm] = useState("");
  const [error, setError] = useState("");

  // To update the table, make a trigger to tell when to fetch data
  const dataFetch = () => setFetch((t) => !t);

  const getPatients = async () => {
    try {
      let res = await http.get(`${apiEndPoint}`);
      setPatients(res.data);
    } catch (err) {
      setError(err.response.data);
    }
  };

  const searchPatient = async (e) => {
    e.preventDefault();
    try {
      let res = await http.post(`${apiEndPoint}/search`, {
        email: searchTerm,
      });
      setPatients(res.data);
    } catch (err) {
      setError(err.response.data);
    }
    setSearchTerm("");
  };

  const addPatient = async (e) => {
    e.preventDefault();
    try {
      let res = await http.post(`${apiEndPoint}/new`, {
        email: addTerm,
      });
      alert(`Added Patient ${res.data.email}`);
    } catch (err) {
      setError(err.response.data);
    }
    setAddTerm("");
    dataFetch();
  };
  const deletePatient = async (e) => {
    e.preventDefault();
    try {
      let res = await http.post(`${apiEndPoint}/delete`, {
        email: deleteTerm,
      });
      alert(`Deleted Patient ${res.data.email}`);
    } catch (err) {
      setError(err.response.data);
    }
    setDeleteTerm("");
    dataFetch();
  };

  useEffect(() => {
    getPatients();
  }, [fetch]);

  return (
    <React.Fragment>
      <h1>Patients Spread Sheet</h1>
      <Table patients={patients} />
      <SearchBox
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchPatient={searchPatient}
      />
      <AddBox
        addTerm={addTerm}
        setAddTerm={setAddTerm}
        addPatient={addPatient}
      />
      <DeleteBox
        deleteTerm={deleteTerm}
        setDeleteTerm={setDeleteTerm}
        deletePatient={deletePatient}
      />
      {error && <div>Error: {error}</div>}
    </React.Fragment>
  );
};

export default Patients;
