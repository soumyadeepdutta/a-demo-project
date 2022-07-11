import React from "react";
import { Table } from "react-bootstrap";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const Details = ({ details }) => {
  return (
    <>
      <Table
        striped
        bordered
        hover
        style={{ marginTop: "10px" }}
        id="table-to-xls"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{details.name ? 1 : ""} </td>
            <td>{details?.name}</td>
            <td>{details?.number}</td>
            <td>{details?.address}</td>
          </tr>
        </tbody>
      </Table>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="btn btn-primary"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
    </>
  );
};

export default Details;
