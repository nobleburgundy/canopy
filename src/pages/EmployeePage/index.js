import React, { useEffect, useRef, useState } from "react";
import FilterRow from "../../components/FilterRow";
import Header from "../../components/Header";
import API from "../../utils/api";
import useDebounce from "../../utils/debounceHook";
import BootstrapTable from "react-bootstrap-table-next";

function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [search, setSearch] = useState("");

  const debouncedSearchTerm = useDebounce(search, 500);
  const inputRef = useRef();

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
    function loadEmployees() {
      API.getEmployees()
        .then((employees) => {
          if (filter) {
            // if filter has been set, filter the employee array by filterValue
            setEmployees(employees.filter((e) => e[filter] === filterValue));
          } else if (debouncedSearchTerm) {
            console.log("debounced", debouncedSearchTerm);
            setEmployees(employees.filter((e) => JSON.stringify(e).includes(debouncedSearchTerm)));
          } else {
            // no filter has been set
            setEmployees(employees);
          }
        })
        .catch((err) => console.log(err));
    }

    loadEmployees();
  }, [filter, filterValue, debouncedSearchTerm]);

  const handleStateFilterChange = (event) => {
    const filter = event.target.name;
    const value = event.target.value;

    // set the filter field (ie Role, Name, US State)
    setFilter(filter);
    // set the value of of the field we're looking for
    setFilterValue(value);
  };

  const handleClearFilter = (event) => {
    event.preventDefault();
    // clear filter and search
    setFilter("");
    setSearch("");
    // reset search input
    inputRef.current.value = "";
  };

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
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
        names={employees.map((e) => e.full_name)}
        roles={employees.map((e) => e.title)}
        onChange={handleStateFilterChange}
        clearFilter={handleClearFilter}
        searchTerm={handleSearchInput}
        forwardedRef={inputRef}
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
