import React, { useEffect, useState } from "react";
import EmployeeTable from "../../components/EmployeeTable";
import FilterRow from "../../components/FilterRow";
import Header from "../../components/Header";
import API from "../../utils/api";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "first_name",
      text: "First Name",
      sort: true,
    },
    {
      dataField: "last_name",
      text: "Last Name",
      sort: true,
    },
    {
      dataField: "title",
      text: "Role",
      sort: true,
    },
    {
      dataField: "state",
      text: "State",
      sort: true,
      //   filter: textFilter(),
    },
  ];

  useEffect(() => {
    console.log("loading employees");
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.getEmployees()
      .then((employees) => {
        setEmployees(employees);
      })
      .catch((err) => console.log(err));
  }

  const expandRow = {
    renderer: (row) => (
      <div>
        <p>Email: {row.email}</p>
        <p>Phone: {row.phone_number}</p>
        <p>Username: {row.username}</p>
      </div>
    ),
    showExpandColumn: true,
    expandHeaderColumnRenderer: ({ isAnyExpands }) => {
      if (isAnyExpands) {
        return <b>-</b>;
      }
      return <b>+</b>;
    },
    expandColumnRenderer: ({ expanded }) => {
      if (expanded) {
        return <b>-</b>;
      }
      return <b>+</b>;
    },
  };

  return (
    <div className="container-fluid">
      <Header />
      {/* <FilterRow /> */}
      <div className="table-responsive">
        <BootstrapTable
          keyField="id"
          columns={columns}
          data={employees}
          bootstrap4
          hover
          condensed
          bordered
          classes="table text-monospace"
          expandRow={expandRow}
          //   filter={filterFactory()}
        ></BootstrapTable>
      </div>
    </div>
  );
}

export default EmployeePage;
