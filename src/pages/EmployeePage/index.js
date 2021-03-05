import React, { useEffect, useRef, useState } from "react";
import FilterRow from "../../components/FilterRow";
import Header from "../../components/Header";
import API from "../../utils/api";
import stateList from "./state-list.json";
import useDebounce from "../../utils/debounceHook";
import BootstrapTable from "react-bootstrap-table-next";

function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [search, setSearch] = useState("");
  const [roles, setRoles] = useState([]);
  const [names, setNames] = useState([]);
  // states as in US States
  const [usStates, setUsStates] = useState([]);

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
            // search the 'employees' by stringify-ing the fields returned from API
            // and filter based on that search
            setEmployees(employees.filter((e) => JSON.stringify(e).includes(debouncedSearchTerm)));
          } else {
            // no filter has been set
            setEmployees(employees);
          }

          // set roles and names for dropdowns
          setRoles(employees.map((e) => e.title));
          setNames(employees.map((e) => e.full_name));
          setUsStates(stateList.map((s) => s));
        })
        .catch((err) => console.log(err));
    }

    loadEmployees();
  }, [filter, filterValue, debouncedSearchTerm]);

  const handleFilterChange = (event) => {
    event.preventDefault();
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
    setNames([]);
    setRoles([]);
    setUsStates([]);
    // reset search input
    inputRef.current.value = "";
  };

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const expandRow = {
    renderer: (row) => (
      <div>
        <div className="container">
          <div className="row">
            <div className="col text-left">
              <h4>Employee Details</h4>
              <dl>
                <dt>Email</dt>
                <dd>{row.email}</dd>
                <dt>Username</dt>
                <dd>{row.username}</dd>
                <dt>Phone</dt>
                <dd>{row.phone_number}</dd>
                <dt>Location</dt>
                <dd>
                  {row.city}, {row.state}
                </dd>
              </dl>
            </div>
            <div className="col text-left">
              <h4>Employee Status</h4>
              <dl>
                <dt>Plan</dt>
                <dd>{row.subscription.plan}</dd>
                <dt>Status</dt>
                <dd>{row.subscription.status}</dd>
                <dt>Term</dt>
                <dd>{row.subscription.term}</dd>
              </dl>
            </div>
          </div>
        </div>
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
        names={names}
        roles={roles}
        onChange={handleFilterChange}
        clearFilter={handleClearFilter}
        searchTerm={handleSearchInput}
        forwardedRef={inputRef}
        stateList={usStates}
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
