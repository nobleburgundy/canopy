import React, { useEffect, useState } from "react";
import EmployeeTable from "../../components/EmployeeTable";
import FilterRow from "../../components/FilterRow";
import Header from "../../components/Header";
import API from "../../utils/api";
// import useStateFilter from "../../utils/useStateFilter";
import BootstrapTable from "react-bootstrap-table-next";

function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [locationState, setStateValue] = useState("");
  const [filter, setFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");
  // const [role, setRole] = useState("");
  // const [fullName, setFullname] = useState("");

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
    },
  ];

  useEffect(() => {
    loadEmployees(filter, filterValue);
  }, [filter]);

  function loadEmployees() {
    API.getEmployees()
      .then((employees) => {
        if (filter) {
          console.log("filter", filter);
          setEmployees(employees.filter((e) => e[filter] === filterValue));
        } else {
          setEmployees(employees);
        }
      })
      .catch((err) => console.log(err));
  }

  const handleStateFilterChange = (event) => {
    console.log(event.target.value);
    setStateValue(event.target.value);
    setFilter(event.target.name);
    setFilterValue(event.target.value);
  };

  const expandRow = {
    renderer: (row) => (
      <div>
        <h4>Employee Details</h4>
        <p>Email: {row.email}</p>
        <p>Phone: {row.phone_number}</p>
        <p>Username: {row.username}</p>
        <h4>Employee Status</h4>
        <p>Plan: {row.subscription.plan}</p>
        <p>Status: {row.subscription.status}</p>
        <p>Term: {row.subscription.term}</p>
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
      <FilterRow
        names={employees.map((e) => e.first_name + " " + e.last_name)}
        roles={employees.map((e) => e.title)}
        onChange={handleStateFilterChange}
      />
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
        ></BootstrapTable>
      </div>
    </div>
  );
}

export default EmployeePage;
