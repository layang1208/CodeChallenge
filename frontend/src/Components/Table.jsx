import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import _ from "lodash";
const Table = ({ patients }) => {
  return (
    <ReactBootStrap.Table striped bordered>
      <thead>
        <tr>
          <th>id</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <tr key={patient._id}>
            <td>{patient._id}</td>
            <td>{patient.email}</td>
          </tr>
        ))}
      </tbody>
    </ReactBootStrap.Table>
  );
};

export default Table;
