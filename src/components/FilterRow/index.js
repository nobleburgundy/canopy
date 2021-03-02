import React from "react";
import stateList from "./state-list.json";
import OptionElement from "../OptionElement";
import EmployeeTable from "../EmployeeTable";

function FilterRow(props) {
  return (
    <div>
      <form className="form-inline" id="filterForm">
        <div className="form-group pl-0">
          <label className="sr-only" htmlFor="inlineFormInputName2">
            Search
          </label>
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="Search the table"
          />
        </div>
        <div className="form-group ml-auto">
          <label className="mr-1" htmlFor="nameFilter">
            Filter by Name:
          </label>
          <select
            className="form-control form-select-sm mb-2 mr-4"
            id="nameFilter"
            aria-label=".form-select-sm example"
          >
            <option defaultValue>Select Name</option>
            {props.names.map((name, index) => {
              return <OptionElement key={index} name={name} />;
            })}
          </select>
        </div>
        <div className="form-group ml-auto pr-0">
          <label className="mr-1" htmlFor="roleFilter">
            Filter by Role:
          </label>
          <select
            className="form-control form-select-sm mb-2 mr-4"
            id="roleFilter"
            aria-label=".form-select-sm example"
          >
            <option defaultValue>Select Role</option>
            {props.roles.map((role, index) => {
              return <OptionElement key={index} name={role} />;
            })}
          </select>
          <label className="mr-1" htmlFor="stateFilter">
            Filter by State:
          </label>
          <select
            className="form-control form-select-sm mb-2"
            id="stateFilter"
            aria-label=".form-select-sm example"
            onChange={props.onChange}
          >
            {stateList.map((state) => {
              return <OptionElement key={state.abbreviation} value={state.name} name={state.name} />;
            })}
          </select>
        </div>
      </form>
    </div>
  );
}

export default FilterRow;
