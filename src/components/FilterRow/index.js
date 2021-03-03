import React from "react";
import stateList from "./state-list.json";
import OptionElement from "../OptionElement";
import EmployeeTable from "../EmployeeTable";

function FilterRow(props) {
  return (
    <>
      <div className="row">
        <a
          className="btn btn-link float-right ml-auto mr-3 mb-2"
          data-toggle="collapse"
          href="#collapsedControls"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          {/* bootstrap svg icon for filter row expand */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-gear-fill"
            viewBox="0 0 16 16"
          >
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
          </svg>
        </a>
      </div>
      <div className="collapse" id="collapsedControls">
        <form id="filterForm">
          <div className="form-row">
            <div className="col">
              <label className="sr-only" htmlFor="inlineFormInputName2">
                Search
              </label>
              <input
                type="text"
                className="form-control mb-2"
                id="inlineFormInputName2"
                placeholder="Search the table"
              />
            </div>
            <div className="col">
              <label className="sr-only" htmlFor="nameFilter">
                Filter by Name:
              </label>
              <select
                className="form-control form-select-sm"
                id="nameFilter"
                name="full_name"
                aria-label=".form-select-sm example"
                onChange={props.onChange}
              >
                <option defaultValue>Select Name</option>
                {props.names.map((name, index) => {
                  return <OptionElement key={index} name={name} />;
                })}
              </select>
            </div>
            <div className="col">
              <label className="sr-only" htmlFor="roleFilter">
                Filter by Role:
              </label>
              <select
                className="form-control form-select-sm mb-2 mr-4"
                id="roleFilter"
                name="title"
                aria-label=".form-select-sm example"
                onChange={props.onChange}
              >
                <option defaultValue>Select Role</option>
                {props.roles.map((role, index) => {
                  return <OptionElement key={index} name={role} />;
                })}
              </select>
            </div>
            <div className="col">
              <label className="sr-only" htmlFor="stateFilter">
                Filter by State:
              </label>
              <select
                className="form-control form-select-sm mb-2"
                id="stateFilter"
                name="state"
                aria-label=".form-select-sm example"
                onChange={props.onChange}
              >
                {stateList.map((state) => {
                  return <OptionElement key={state.abbreviation} value={state.name} name={state.name} />;
                })}
              </select>
            </div>
            <button className="btn btn-link float-right" onClick={props.clearFilter}>
              Clear filters
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FilterRow;
